"use client";
import { type CharacterOutput } from "@/types/character";
import clsx from "clsx";

import { useState } from "react";
import Select, { type Props } from "react-select";
import { CharacterTable } from "./CharacterTable";

interface GameSectionProps {
  data: CharacterOutput;
}

export const GameSection = ({ data }: GameSectionProps) => {
  const [answer, setAnswer] = useState<typeof data>([]);
  const dailyChracter = "cll10sb3h0000ibicw1x8cnu4";
  const options = data.map((character) => {
    return {
      value: character.id,
      label: character.name,
    };
  });

  const handleOnSelect = (e: (typeof options)[0]) => {
    const currentCharacter = data.filter((character) => {
      return character.id === e.value;
    })[0];

    if (!currentCharacter) return console.log("error");

    setAnswer([...answer, currentCharacter]);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <Select
        classNames={{
          control: () =>
            "border w-[500px] dark:border-slate-800 rounded-lg dark:text-white dark:bg-slate-900 bg-slate-300 hover:cursor-pointer",
          input: () => "dark:bg-slate-900 ",
          menu: () => "dark:bg-slate-900 bg-slate-300",
          option: ({ isSelected, isFocused }) =>
            clsx(
              "dark:bg-slate-900 bg-slate-300  hover:dark:bg-slate-700  hover:cursor-pointer",
              isSelected && "bg-indigo-500",
              isFocused && "bg-indigo-500"
            ),
        }}
        options={options}
        // @ts-ignore
        onChange={handleOnSelect}
      />

      <CharacterTable answer={answer} />
    </div>
  );
};
