"use client";

import { type CharacterOutput } from "@/types/character";

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
  return <Select options={options} />;
};
