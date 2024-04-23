import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';

export default function Horizontal_Navbar_Component() {
    return (
      <>
      <div className="flex space-x-16 p-4 bg-zinc-300">
            <Link className="mr-auto" href="/">Company Name and Logo</Link>
            <Link className="ml-auto" href="/">
                <CircleUserRound/>
            </Link>
      </div>
      </>
    )
}