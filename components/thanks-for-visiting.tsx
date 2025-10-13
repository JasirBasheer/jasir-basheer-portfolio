import Link from "next/link";
import React from "react";

const ThanksForVisiting = () => {
  return (
    <div className="lg:w-[20rem] h-[14rem] rounded-lg p-5 border-[1px] border-[#1e293b] bg-[#1b2537] bg-opacity-80 backdrop-blur-sm mb-2 font-poppins font-normal">
      <div className="flex items-center gap-2">
        <span className="text-2xl">👋</span>
        <p className="text-gray-400 text-sm">Thanks for visiting my site!</p>
      </div>
      <h1 className="text-white text-md font-bold mt-1">
        Glad to have you here.
      </h1>
      <ul className="mt-4 space-y-2 text-sm">
        {/* <li className="flex items-center justify-between group cursor-pointer">
          <Link
            href="/guestbook"
            className="text-blue-400 group-hover:underline max-w-[13rem]"
          >
            Leave a message on my guestbook
          </Link>
          <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </li> */}
        <li className="flex items-center justify-between group cursor-pointer">
          <Link href="mailto:hi@jasirbasheer.dev" className="text-blue-400 group-hover:underline">
            Send an email
          </Link>
          <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </li>
        <li className="flex items-center justify-between group cursor-pointer">
          <Link href="https://github.com/sponsors/JasirBasheer" className="text-blue-400 group-hover:underline">
            Sponsor me on github
          </Link>
          <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ThanksForVisiting;
// https://i.scdn.co/image/ab67706c0000da84b80903ef954198f942abfe6d