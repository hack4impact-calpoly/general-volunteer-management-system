//import Link from "next/link";
import Link from "../../../node_modules/next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex space-x-16 p-4 bg-slate-200">
        <Link href="/">Home</Link>
        <Link href="/pages/authentication/login">Login</Link>
        <Link href="/pages/dashboard">Dashboard</Link>
        <Link href="/pages/dashboard/event-calendar">Calendar</Link>
      </div>
    </>
  );
}
