import * as React from "react";
import Link from "next/link";

export default function Confirm_Reset_Component() {
  return (
    <div className="my-36 w-3/5 h-80 shadow-lg py-8 mx-auto my-15">
      <h1 className="text-center py-8 text-4xl font-sans font-medium text-rgb-1-1-38">
        Success!
      </h1>
      <h3 className="text-center font-sans font-normal text-black">
        You have successfully reset your password.
      </h3>
      <br></br>
      <Link href="/">
        <button className="flex align-center justify-center text-sm w-2/5 h-9 bg-[#314b89] py-2 font-sans text-white border-none m-auto">
          Back to Login
        </button>
      </Link>
    </div>
  );
}