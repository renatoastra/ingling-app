"use client";
import { type CharacterOutput } from "@/types/character";
import clsx from "clsx";

import { useEffect, useState } from "react";
import Select, { type Props } from "react-select";
import { CharacterTable } from "./CharacterTable";
import ConfettiExplosion from "react-confetti-explosion";
import { CorrectAnswerSection } from "./CorrectAnswerSection";
import { type DailyCharacterOutput } from "@/types/daily-character";
import { useTranslations } from "next-intl";

interface GameSectionProps {
  data: CharacterOutput;
  dailyCharacter: DailyCharacterOutput;
}

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
      value: character.id,
      label: character.name,
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
    <div className="flex flex-col items-center gap-6">
      {explode && <ConfettiExplosion />}
      {!userAlreadyAnswer && dailyCharacter && (
        <>
          <Select
            placeholder={t("select")}
            classNames={{
              control: () =>
                "border w-[500px] dark:border-slate-800 rounded-lg dark:text-white dark:bg-slate-900 bg-slate-300 hover:cursor-pointer",
              input: () => "dark:bg-slate-900 ",
              placeholder: () => "dark:text-slate-300  text-primary ",
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
          <CharacterTable answer={answer} dailyCharacter={dailyCharacter} />
        </>
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
