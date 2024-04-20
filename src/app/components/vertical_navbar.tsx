import * as React from "react";
import { Home, CalendarDays, Clock }  from "lucide-react";
import Link from "next/link";

export default function Vertical_Navbar_Component() {
  return (
    <>
    <ul className="m-0 h-max p-0 pb-96 w-10 bg-stone-400">
      <li className="block pt-5 pl-2"><Link href="/"><Home></Home></Link></li>
      <li className="block pt-5 pl-2"><Link href="/"><CalendarDays></CalendarDays></Link></li>
      <li className="block pt-5 pl-2"><Link href="/"><Clock></Clock></Link></li>
    </ul>
  </>
  );
}