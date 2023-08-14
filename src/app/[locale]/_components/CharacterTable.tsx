"use client";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { type CharacterOutput } from "@/types/character";
import { type NonNullableDailyCharacterOutput } from "@/types/daily-character";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const CharacterTableHeader = () => {
  const t = useTranslations("GenshinTableHeader");
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-40 text-center">{t("character")}</TableHead>
        <TableHead className="w-28 text-center">{t("element")}</TableHead>
        <TableHead className="w-28 text-center">{t("region")}</TableHead>
        <TableHead className="w-28 text-center">{t("weapon")}</TableHead>
        <TableHead className="w-28 text-center">{t("talent")}</TableHead>
        <TableHead className="w-28 text-center">{t("material")}</TableHead>
      </TableRow>
    </TableHeader>
  );
};

interface Props {
  answer: CharacterOutput;
  dailyCharacter: NonNullableDailyCharacterOutput;
}

export const CharacterTable = ({ answer, dailyCharacter }: Props) => {
  const t = useTranslations("GameSection");
  return (
    <Table className="">
      <TableCaption>{t("whoIsTheCharacter")}</TableCaption>
      <CharacterTableHeader />
      <TableBody className="mx-2">
        {answer.map((character) => {
          return (
            <TableRow key={character.id}>
              <TableCell
                className={clsx(
                  `flex  font-medium dark:border-slate-700`,
                  character.id === dailyCharacter.characterId
                    ? "bg-green-700"
                    : "bg-red-700"
                )}
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
              <TableCell
                title={`${character.element.name}`}
                className={clsx(
                  ` border-collapse  border text-center dark:border-slate-700`,
                  character.elementId === dailyCharacter.Character.element.id
                    ? "bg-green-700"
                    : "bg-red-700"
                )}
              >
                {
                  <Image
                    src={character.element.image}
                    width={102}
                    height={102}
                    alt=""
                  />
                }
              </TableCell>
              <TableCell
                className={clsx(
                  ` border-collapse  border text-right dark:border-slate-700`,
                  character.factionId === dailyCharacter.Character.faction.id
                    ? "bg-green-700"
                    : "bg-red-700"
                )}
              >
                {
                  <Image
                    src={character.faction.image as string}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
              </TableCell>
              <TableCell
                className={clsx(
                  `r  border-collapse border  text-right dark:border-slate-700`,
                  character.weaponId === dailyCharacter.Character.weapon.id
                    ? "bg-green-700"
                    : "bg-red-700"
                )}
              >
                {
                  <Image
                    src={character.weapon.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
              </TableCell>
              <TableCell
                className={clsx(
                  `border-collapse  border text-right dark:border-slate-700`,
                  character.talentsId === dailyCharacter.Character.talents.id
                    ? "bg-green-700"
                    : "bg-red-700"
                )}
              >
                {
                  <Image
                    src={character.talents.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
              </TableCell>

              <TableCell
                className={clsx(
                  `border-collapse  border text-right dark:border-slate-700`,
                  character.materialId === dailyCharacter.Character.material.id
                    ? "bg-green-700"
                    : "bg-red-700"
                )}
              >
                {
                  <Image
                    src={character.material.image}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
