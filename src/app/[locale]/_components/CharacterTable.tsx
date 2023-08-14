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
import Image from "next/image";

interface Props {
  answer: CharacterOutput;
}

export const CharacterTable = ({ answer }: Props) => {
  return (
    <Table className="">
      <TableCaption>Chute sem medo de ser feliz</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-40 text-center">Personagem</TableHead>
          <TableHead className="w-28 text-center">Elemento</TableHead>
          <TableHead className="w-28 text-center">Região</TableHead>
          <TableHead className="w-28 text-center">Arma</TableHead>
          <TableHead className="w-28 text-center">Talento</TableHead>
          <TableHead className="w-28 text-center">Material</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {answer.map((character) => {
          return (
            <TableRow key={character.id}>
              <TableCell className="flex bg-green-500  font-medium">
                {
                  <Image
                    src={character.image}
                    width={150}
                    alt={`${character.name} icon`}
                    height={150}
                  />
                }
              </TableCell>
              <TableCell className=" bg-red-500 text-center">
                {
                  <Image
                    src={character.element.image}
                    width={102}
                    height={102}
                    alt=""
                  />
                }
              </TableCell>
              <TableCell className="bg-yellow-500">
                {
                  <Image
                    src={character.faction.image as string}
                    width={102}
                    height={102}
                    alt="..."
                  />
                }
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
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
