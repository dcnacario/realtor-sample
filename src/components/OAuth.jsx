import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const currentUser = result.user;

      //check if the user account exist?
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: currentUser.displayName,
          email: currentUser.email,
          timestamp: serverTimestamp(),
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Could not authorized with Google!");
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 
    rounded-md uppercase text-sm font-medium shadow-md hover:bg-red-800 active:bg-red-900
     transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg"
    >
      Continue with Google{" "}
      <FcGoogle className="mx-2 text-2xl bg-white rounded-full mr-2" />
    </button>
  );
}
