"use client";
import * as React from "react";
import { TextIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

export function ChangeLanguage() {
  const t = useTranslations("Sidebar");
  const [isPending, startTransition] = React.useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleOnChangeLanguage = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };
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
        <DropdownMenuItem
          className="text-primary dark:text-secondary"
          onClick={() => handleOnChangeLanguage("en")}
        >
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-primary dark:text-secondary"
          onClick={() => handleOnChangeLanguage("pt")}
        >
          {t("portuguese")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
