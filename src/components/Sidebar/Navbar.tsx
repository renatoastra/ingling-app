import Link from "next/link";
import { ModeToggle } from "../Theme/ModeToggle";
import { ChangeLanguage } from "./ChangeLang";

export const Navbar = () => {
  return (
    <nav
      className=" fixed right-0 top-0 z-10  w-full border-b border-secondary  px-4  
     py-3 shadow-md dark:border-slate-800"
    >
      <div className="flex items-center justify-between">
        <h1
          className=" font-mono font-bold uppercase
           text-indigo-300 dark:text-slate-200"
        >
          Inkling
          <span className="text-2xl text-slate-700 dark:text-indigo-500">
            .
          </span>
          app
        </h1>
        <div className="flex items-center justify-center gap-2">
          <ModeToggle />
          <ChangeLanguage />
        </div>
      </div>
    </nav>
  );
};
