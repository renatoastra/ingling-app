"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { CharacterTableHeader } from "./CharacterTable";
import Image from "next/image";
import { TwitterShareButton } from "react-share";
import { type NonNullableDailyCharacterOutput } from "@/types/daily-character";
import { useTranslations } from "next-intl";

interface CorrectAnswerSectionProps {
  characterOfTheDay: NonNullableDailyCharacterOutput;
  tries: number;
}

export const CorrectAnswerSection = ({
  characterOfTheDay,
  tries,
}: CorrectAnswerSectionProps) => {
  const t = useTranslations("CorrectAnswerSection");
  const character = characterOfTheDay.Character;
  return (
    <div className="flex w-full flex-col items-center gap-6 px-3">
      <div className="w-full md:mt-8">
        <div className="flex w-full flex-col">
          <h1 className="break-words  text-center text-3xl font-bold text-indigo-300  dark:text-muted-foreground md:mb-8 md:text-3xl">
            {t("title", {
              character: character.name,
              location: character.faction.name,
            })}
          </h1>
          <h2 className="text-center  text-2xl font-bold text-indigo-300 dark:text-muted-foreground md:text-4xl">
            {t("theAnswerWas", {
              character: character.name,
              location: character.faction.name,
            })}
          </h2>
        </div>

        <Table>
          <TableCaption className="text-left md:text-center">
            {" "}
            {t("footer", { tries })}
          </TableCaption>
          <CharacterTableHeader />
          <TableBody>
            <TableRow className="bg-secondary  dark:bg-slate-900">
              <TableCell
                className="border-collapse border  bg-green-700 font-medium dark:border-slate-700"
                title={character.name}
              >
                {
                  <Image
                    src={character.image}
                    width={150}
                    alt={`${character.name} icon`}
                    height={150}
                  />
                }
              </TableCell>
              <TableCell className="border-collapse border bg-green-700  text-center dark:border-slate-700">
                {
                  <Image
                    src={character.element.image}
                    width={102}
                    height={102}
                    alt=""
                  />
                }
                <p className="text-center font-mono  text-xs text-indigo-300 dark:text-muted-foreground">
                  {character.element.name}
                </p>
              </TableCell>
              <TableCell className="border-collapse border-x bg-green-700 text-right dark:border-slate-700">
                {
                  <Image
                    src={character.faction.image as string}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-indigo-300 dark:text-muted-foreground">
                  {character.faction.name}
                </p>
              </TableCell>
              <TableCell className="border-collapse border-x bg-green-700 text-right dark:border-slate-700">
                {
                  <Image
                    src={character.weapon.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-indigo-300 dark:text-muted-foreground">
                  {character.weapon.name}
                </p>
              </TableCell>
              <TableCell className="border-collapse border-x bg-green-700 text-right dark:border-slate-700">
                {
                  <Image
                    src={character.talents.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-indigo-300 dark:text-muted-foreground">
                  {character.talents.name}
                </p>
              </TableCell>

              <TableCell className="border-collapse border-x bg-green-700 text-right dark:border-slate-700">
                {
                  <Image
                    src={character.material.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-indigo-300 dark:text-muted-foreground">
                  {character.material.name}
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="max-md:w-full">
          <TwitterShareButton
            url={"https://stardle.vercel.app/"}
            title={`Eu acertei o personagem de hoje do @stardleapp em ${tries} tentativas! `}
            hashtags={["stardleapp", "genshinimpact"]}
            className="max-md:w-full"
          >
            <button className="mt-8 rounded-lg bg-indigo-300 px-6 py-3 text-secondary dark:bg-slate-700 max-md:w-full">
              {t("share")}
            </button>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};
