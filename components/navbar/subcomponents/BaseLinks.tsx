import React from "react";
import Link from "next/link";
import type { Session } from "next-auth";
interface Props {
  session: Session | null;
}

//use the session as a prop instead of using it in Navbar.tsx

const BaseLinks: React.FC<Props> = ({ session }) => {
  return (
    <div className="hidden sm:flex gap-3">
      <div className="grid place-items-center p-2 rounded-md hover:ring-4">
        <Link href="/">Home</Link>
      </div>

      <div className="grid place-items-center p-2 rounded-md hover:ring-4">
        <Link href="/about">About</Link>
      </div>

      <div className="grid place-items-center p-2 rounded-md hover:ring-4">
        <Link href="/contact">Contact</Link>
      </div>

      {session && (
        <div className="grid place-items-center p-2 rounded-md hover:ring-4">
          <Link href="/profile">Profile</Link>
        </div>
      )}

      {/* <div className="grid place-items-center p-2 rounded-md hover:ring-4">
        <Link href="/cart">Cart</Link>
      </div> */}

      {/* <div className="grid place-items-center p-2 rounded-md hover:ring-4">
        <Link href="/checkout">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
            Buy now
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default BaseLinks;
