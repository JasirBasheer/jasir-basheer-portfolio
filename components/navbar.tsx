"use client";
import { BriefcaseBusiness, Menu, Navigation } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { RiHome2Line, RiStackLine } from "react-icons/ri";

export function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="fixed lg:relative bottom-0 lg:h-screen w-full  lg:w-52 lg:dark:bg-slate-900 bg-transparent backdrop-blur-md z-50  ">
      <div className="h-20 lg:h-full flex items-center lg:items-center justify-center border-t lg:border-t-0 lg:border-r border-slate-200 dark:border-slate-800">
        <div className="flex lg:flex-col justify-center items-center gap-8 lg:gap-8  lg:ml-28 lg:px-0">
          {/* <Link href={`/`}>
            <div
              className={`${
                currentPath == "/"
                  ? "text-[#0ca6e8] "
                  : "text-slate-400 hover:text-slate-200"
              }sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center  transition-colors cursor-pointer `}
            >
              <RiHome2Line className="w-full h-full" />
            </div>
          </Link>
          <Link href={"/about"}>
            <div
              className={`${
                currentPath == "/about"
                  ? "text-[#0ca6e8] "
                  : "text-slate-400 hover:text-slate-200"
              }sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center  transition-colors cursor-pointer `}
            >
              <PiWarningCircleDuotone className="w-full h-full rotate-180" />
            </div>
          </Link>
          <Link href={"/blog"}>
            <div
              className={`${
                currentPath == "/blog"
                  ? "text-[#0ca6e8] "
                  : "text-slate-400 hover:text-slate-200"
              }sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center  transition-colors cursor-pointer `}
            >
              <RiStackLine className="w-full h-full" />
            </div>
          </Link>
          <Link href={"/projects"}>
            <div
              className={`${
                currentPath == "/projects"
                  ? "text-[#0ca6e8] "
                  : "text-slate-400 hover:text-slate-200"
              }sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center  transition-colors cursor-pointer `}
            >
              <BriefcaseBusiness className="w-full h-full" />
            </div>
          </Link>
          <Link href={"/resume"}>
            <div
              className={`${
                currentPath == "/resume"
                  ? "text-[#0ca6e8] "
                  : "text-slate-400 hover:text-slate-200"
              }sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center  transition-colors cursor-pointer `}
            >
              <Menu className="w-full h-full" />
            </div>
          </Link>
          <Link href={"/guestbook"}>
            <div
              className={`${
                currentPath == "/guestbook"
                  ? "text-[#0ca6e8] "
                  : "text-slate-400 hover:text-slate-200"
              }sm:w-[1.5rem] sm:h-[1.5rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center  transition-colors cursor-pointer `}
            >
              <Navigation className="w-full h-full" />
            </div>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
