import * as React from "react";
import { Home, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";

export default function Vertical_Navbar_Component() {
  return (
    <>
      <ul className="m-0 h-screen p-0 pb-full w-10 bg-stone-400">
        <li className="block pt-5 pl-2">
          <Link href="/pages/dashboard">
            <Home></Home>
          </Link>
        </li>
        <li className="block pt-5 pl-2">
          <Link href="/pages/dashboard/event-calendar">
            <CalendarDays></CalendarDays>
          </Link>
        </li>
        <li className="block pt-5 pl-2">
          <Link href="/">
            <Clock></Clock>
          </Link>
        </li>
      </ul>
    </>
  );
}
