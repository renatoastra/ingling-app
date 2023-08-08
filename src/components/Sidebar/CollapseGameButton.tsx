"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PlayIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export const CollapseGameButton = () => {
  return (
    <Collapsible className="w-full ">
      <CollapsibleTrigger asChild className="DialogContent ">
        <Button variant="outline" className="DialogContent w-full">
          <PlayIcon
            className={`h-[1.2rem] w-[1.2rem] text-primary ease-in-out  dark:text-secondary`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="DialogContent flex w-full flex-col items-center justify-center space-y-2  pt-4 font-mono text-xs  font-bold uppercase animate-in animate-out">
        <p className="">Genshin Impact</p>
        <div className="relative flex w-full items-center justify-center pt-4">
          <p className="">Honkai StarRail</p>
          <span className="absolute right-0 top-2 animate-bounce  pl-0 text-[8px] font-bold text-indigo-300 dark:text-emerald-600">
            SOON
          </span>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
