import Link from "next/link";
import { Star, X } from 'lucide-react';

export default function Volunteer_Task_Success() {
    return (
        <div className="container my-36 w-3/5 h-96 shadow-md py-8 mx-auto my-15">
          <div className="-mt-5 -ml-5"><X/></div>
          <div className="mt-5 flex justify-center"><Star className="size-12"/></div>
          <h1 className="text-center py-8 text-4xl font-sans font-medium text-rgb-1-1-38">Success!</h1>
          <h3 className="text-center mx-16 font-sans font-normal text-black">You have registered as a volunteer for [EventName]. You can access details for this event again through your dashboard.</h3>
          <br></br>
          <Link href="/"><button className="flex align-center justify-center relative text-sm w-2/5 h-9 bg-[#314b89] py-2 font-sans text-white border-none m-auto">Return to Home</button></Link>
      </div>
    );
  }