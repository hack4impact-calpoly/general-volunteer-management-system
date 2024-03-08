"use client";
import Link from "next/link";
import { PasswordInput } from "@components/password-input";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-5/12 h-4/6 border border-primary-color shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)]">
        <div className="m-auto left-1/2 right-1/2 text-left w-8/12 text-primary-text-color">
          <h1 className="font-medium text-4xl mt-16 mb-10">
            Login
          </h1>
          <form>
            <div className="mb-2">
              <label
                className="font-medium font-size: 1.125rem; leading-5"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div>
              <input
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-14 w-full border border-primary-color"
                type="email"
                required
              ></input>
            </div>
            <div className="mb-2 mt-6">
              <label
                className="font-medium font-size: 1.125rem; leading-5"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div>
              <PasswordInput className="focus-visible:ring-offset-0 h-14 w-full border border-primary-color rounded-none"></PasswordInput>
            </div>
            <p className="hover:text-primary-link-hover-color font-medium text-sm leading-5 text-right mt-2.5 mb-3.5">
              <Link href="/forgotPassword">Forgot password?</Link>
            </p>
            <div>
              <button
                className="hover:shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)] w-full h-14 bg-primary-color text-lg text-white font-medium"
                type="submit"
              >
                Log in
              </button>
            </div>
            <p className="text-sm leading-5 text-center mt-10">
              Don&apos;t have an account?{" "}
              <Link className="hover:text-primary-link-hover-color font-medium" href="/createAccount">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
}