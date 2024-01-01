import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  };
  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">Forgot Password</h1>
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
                  to={"/sign-in"}
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <input
              type="submit"
              value="Send Reset Password"
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
