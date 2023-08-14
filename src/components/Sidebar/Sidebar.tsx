"use client";
import { HomeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { CollapseGameButton } from "@/components/Sidebar/CollapseGameButton";
import { ModeToggle } from "../Theme/ModeToggle";
import { Button } from "../ui/button";
import { ChangeLanguage } from "./ChangeLang";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <nav
      className=" fixed z-10  h-screen w-[150px]  border-r
     border-secondary shadow-md dark:border-slate-800"
    >
      <div className="flex h-full w-full flex-col items-center justify-start gap-3 px-4 py-11 ">
        <div>
          <h1
            className="mb-4 font-mono font-bold uppercase
           text-indigo-300 dark:text-slate-200"
          >
            Inkling
            <span className="text-2xl text-slate-700 dark:text-indigo-500">
              .
            </span>
            app
          </h1>
        </div>
        <div>
          <ModeToggle />
        </div>
        <div>
          <ChangeLanguage />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 ">
          <Button variant="outline" size="icon" className="w-full">
            <HomeIcon className="h-[1.2rem] w-[1.2rem] text-primary dark:text-secondary" />
          </Button>

          <div className="flex h-32 w-full items-center justify-center ">
            <CollapseGameButton />
          </div>
        </div>

        <footer className="flex h-full w-full flex-col items-center justify-end ">
          <Link href={"https://github.com/renatoastra"} target="_blank">
            <Button variant="outline" size="icon" className="w-full">
              <GitHubLogoIcon
                className="h-[1.2rem] w-[1.2rem] text-primary
              dark:text-secondary"
              />
            </Button>
          </Link>
        </footer>
      </div>
    </nav>
  );
};
