"use client";
import { type CharacterOutput } from "@/types/character";
import clsx from "clsx";

import { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { CharacterTable } from "./CharacterTable";
import ConfettiExplosion from "react-confetti-explosion";
import { CorrectAnswerSection } from "./CorrectAnswerSection";
import { type DailyCharacterOutput } from "@/types/daily-character";
import { useTranslations } from "next-intl";

interface GameSectionProps {
  data: CharacterOutput;
  dailyCharacter: DailyCharacterOutput;
}

interface OptionsProps {
  data: {
    image: string;
    label: string;
    value: string;
  };
}

const Option = (props: OptionsProps) => {
  return (
    // @ts-ignore
    <components.Option
      {...props}
      key={props.data.value}
      className="flex cursor-pointer items-center gap-3 px-4 py-2 hover:bg-slate-200 hover:dark:bg-slate-700"
    >
      <img
        className="w-20  bg-slate-200 object-cover px-2 py-1 shadow-lg dark:bg-slate-800"
        src={props.data.image}
        alt={props.data.label}
      />
      <div className="font-mono text-xl uppercase text-muted-foreground">
        {props.data.label}
      </div>
    </components.Option>
  );
};

export const GameSection = ({ data, dailyCharacter }: GameSectionProps) => {
  const [answer, setAnswer] = useState<typeof data>([]);
  const [explode, setExplode] = useState(false);
  const [userAlreadyAnswer, setUserAlreadyAnswer] = useState(false);
  const t = useTranslations("GameSection");
  const [localStorageData, setLocalStorageData] = useState({
    date: "",
    trys: "",
  });
  const options = data.map((character) => {
    return {
      image: character.image,
      label: character.name,
      value: character.id,
    };
  });

  useEffect(() => {
    const hasAnswered: string | null = localStorage.getItem("answer");

    if (hasAnswered) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { date } = JSON.parse(hasAnswered);
      const today = new Date().toLocaleDateString("pt-BR");

      if (today !== date) {
        localStorage.removeItem("answer");
        console.log("🚀 ~ date:", date);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setLocalStorageData(JSON.parse(hasAnswered));
      setUserAlreadyAnswer(true);
    }
  }, []);

  const handleOnSelect = (userAnswer: (typeof options)[0]) => {
    const currentCharacter = data.filter((character) => {
      return character.id === userAnswer.value;
    })[0];

    if (!currentCharacter) return console.log("error");
    setAnswer([...answer, currentCharacter]);

    if (userAnswer.value === dailyCharacter?.characterId) {
      setExplode(true);
      setUserAlreadyAnswer(true);
      const localStorageAnswer = {
        date: new Date().toLocaleDateString("pt-BR"),
        trys: answer.length + 1,
      };

      localStorage.setItem("answer", JSON.stringify(localStorageAnswer));
      return;
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-6  md:w-[800px]">
      {explode && <ConfettiExplosion />}
      {!userAlreadyAnswer && dailyCharacter && (
        <div className=" flex w-full flex-col items-center gap-9 px-6">
          <Select
            placeholder={t("select")}
            classNames={{
              container: () => "w-full md:w-[400px]",
              control: () =>
                "border-0  w-full dark:border-slate-800 rounded-lg ring-0 py-1 px-1  dark:bg-slate-900 bg-slate-100 hover:cursor-pointer",
              menu: () => "dark:bg-slate-900 bg-slate-100  ",
              option: ({ isSelected, isFocused }) =>
                clsx(
                  "dark:bg-slate-900 bg-slate-100 hover:bg-slate-300 dark:text-white hover:dark:bg-slate-700  hover:cursor-pointer",
                  isSelected && "bg-indigo-500",
                  isFocused && "bg-indigo-500"
                ),
              singleValue: () => "text-secondary-foreground dark:text-white",
            }}
            hideSelectedOptions
            // @ts-ignore
            onChange={handleOnSelect}
            options={options}
            components={{ Option }}
          />
          <CharacterTable answer={answer} dailyCharacter={dailyCharacter} />
        </div>
      )}

      {userAlreadyAnswer && dailyCharacter?.Character && (
        <CorrectAnswerSection
          characterOfTheDay={dailyCharacter}
          tries={answer.length ? answer.length : Number(localStorageData.trys)}
        />
      )}
    </div>
  );
};
