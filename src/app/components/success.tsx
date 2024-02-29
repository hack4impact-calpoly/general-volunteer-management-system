import Link from "../../../node_modules/next/link";

export default function SuccessComponent() {
    return (
        <div className="my-36 w-2/5 h-80 shadow-md py-8 mx-auto my-15">
        <h1 className="text-center py-8 text-4xl font-sans font-medium text-rgb-1-1-38">Success!</h1>
        <h3 className="text-center font-sans font-normal text-black">You have successfully signed up for an account.</h3>
        <br></br>
        <Link href="/pages/login"><button className="flex align-center justify-center text-sm w-2/5 h-9 bg-sky-950 py-2 font-sans text-white border-none m-auto">Back to Login</button></Link>
    </div>
    );
  }