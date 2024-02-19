import React, { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Invalid user credentials!");
    }
  };
  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1562770584-eaf50b017307?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <div className="relative mt-4">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {showPassword ? (
                <MdOutlineVisibilityOff
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <MdOutlineVisibility
                  className="absolute right-3 top-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?{" "}
                <Link
                  to={"/sign-up"}
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={"/forgot-password"}
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password
                </Link>
              </p>
            </div>
            <input
              type="submit"
              value="Sign in"
              className="w-full bg-blue-600 text-white px-7 py-3 font-medium text-sm uppercase rounded-md shadow-md
             hover:bg-blue-700 transition duration-200 ease-in-out cursor-pointer hover:shadow-lg active:bg-blue-800"
            />
            <div className="flex items-center my-4">
              <div className="border-t border-gray-300 flex-1"></div>
              <p className="text-center font-semibold mx-4">OR</p>
              <div className="border-t border-gray-300 flex-1"></div>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
