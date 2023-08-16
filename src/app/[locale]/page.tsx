import { api } from "@/trpc/server";
import { GameSection } from "./_components/GameSection";
import { Timer } from "./_components/Timer";
import { prisma } from "@/server/db";
import { type Character } from "@prisma/client";

async function dailyChracterGenerate() {
  const today = new Date().toLocaleDateString("pt-BR");
  const hasCharacterForToday = await prisma.characterOfTheDay.findFirst({
    where: {
      createdAt: today,
    },
  });

  const characters = await prisma.character.findMany({});

  if (!hasCharacterForToday && characters.length) {
    const randomCharacter: Character | undefined =
      characters[Math.floor(Math.random() * characters.length)];

    if (!randomCharacter) return null;

    const create = await prisma.characterOfTheDay.create({
      data: {
        characterId: randomCharacter.id,
        createdAt: today,
      },
      include: {
        Character: {
          select: {
            name: true,
            image: true,

            element: {
              select: {
                name: true,
                image: true,
                id: true,
              },
            },
            faction: {
              select: {
                name: true,
                image: true,
                id: true,
              },
            },
            material: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            talents: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
            weapon: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });

    return create;
  }

  return hasCharacterForToday;
}

export default async function Home() {
  const data = await api.character.getByGame.query({
    gameId: "cll0uj2bc0000iblwryjtriof",
  });

  const dailyCharacter = await api.character.dailyCharacterByGame.query({
    gameId: "cll0uj2bc0000iblwryjtriof",
  });

  const initialTimer = Math.floor(
    (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000
  );

  return (
    <div className="">
      <nav
        className="mb-4 flex
        h-12  w-full
        items-center justify-center
        border-b border-input"
      ></nav>
      <div
        className="flex flex-col 
        items-center
        justify-center gap-4 "
      >
        <Timer initialTimer={initialTimer} />
        <GameSection data={data} dailyCharacter={dailyCharacter} />
      </div>
    </div>
  );
}
