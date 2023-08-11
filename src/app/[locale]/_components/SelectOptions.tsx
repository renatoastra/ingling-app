"use client";

import { type CharacterOutput } from "@/types/character";
import Select from "react-select";

interface SelectOptionsProps {
  data: CharacterOutput;
}

export const SelectOptions = ({ data }: SelectOptionsProps) => {
  console.log(data.map((character) => character.name));
  const options = data.map((character) => {
    return {
      value: character.id,
      label: character.name,
    };
  });
  return (
    <Select
      classNames={{
        control: () =>
          "border w-[300px] dark:border-slate-800   rounded-lg dark:text-white dark:bg-slate-900 bg-slate-300 hover:cursor-pointer",
        input: () => "dark:bg-slate-900 bg-slate-300",
        menu: () => "dark:bg-slate-900 bg-slate-300",
      }}
      options={options}
    />
  );
};
