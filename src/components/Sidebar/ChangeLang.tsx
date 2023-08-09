"use client";
import * as React from "react";
import { MoonIcon, SunIcon, TextIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSetLanguage } from "@/hooks/useSetLanguage";

export function ChangeLanguage() {
  const setLanguage = useSetLanguage();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="z-10" variant="outline" size="icon">
          <TextIcon
            className=" h-[1.2rem] w-[1.2rem] rotate-0 scale-100
           text-primary transition-all dark:-rotate-90 dark:scale-0 
           dark:text-secondary"
          />
          <TextIcon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0
           text-primary transition-all dark:rotate-0 dark:scale-100
            dark:text-secondary"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}></DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("pt")}></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
