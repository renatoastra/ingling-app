"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { type CharacterOutput } from "@/types/character";
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
    <div className="flex flex-col items-center  gap-6">
      <div className="mt-8">
        <h1 className="mb-8 text-3xl font-bold">
          {t("title", {
            character: character.name,
            location: character.faction.name,
          })}
        </h1>
        <Table>
          <TableCaption> {t("footer", { tries })}</TableCaption>
          <CharacterTableHeader />
          <TableBody>
            <TableRow className="bg-secondary dark:bg-slate-900">
              <TableCell className="flex font-medium" title={character.name}>
                {
                  <Image
                    src={character.image}
                    width={150}
                    alt={`${character.name} icon`}
                    height={150}
                  />
                }
              </TableCell>
              <TableCell className=" 0 text-center">
                {
                  <Image
                    src={character.element.image}
                    width={102}
                    height={102}
                    alt=""
                  />
                }
                <p className="text-center font-mono  text-xs text-muted-foreground">
                  {character.element.name}
                </p>
              </TableCell>
              <TableCell className="">
                {
                  <Image
                    src={character.faction.image as string}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-muted-foreground">
                  {character.faction.name}
                </p>
              </TableCell>
              <TableCell className="text-right">
                {
                  <Image
                    src={character.weapon.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-muted-foreground">
                  {character.weapon.name}
                </p>
              </TableCell>
              <TableCell className="text-right">
                {
                  <Image
                    src={character.talents.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-muted-foreground">
                  {character.talents.name}
                </p>
              </TableCell>

              <TableCell className="text-right">
                {
                  <Image
                    src={character.material.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
                <p className="text-center font-mono  text-xs text-muted-foreground">
                  {character.material.name}
                </p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <TwitterShareButton
          url={"https://stardle.vercel.app/"}
          title={`Eu acertei o personagem de hoje do @stardleapp em ${tries} tentativas! `}
          hashtags={["stardleapp", "genshinimpact"]}
        >
          <button className="mt-8 rounded-lg bg-indigo-300 px-6 py-3 text-secondary dark:bg-slate-700">
            {t("share")}
          </button>
        </TwitterShareButton>
      </div>
    </div>
  );
};
