import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Character } from "@prisma/client";

export const characterRouter = createTRPCRouter({
  getByGame: publicProcedure
    .input(z.object({ gameId: z.string() }))
    .query(async ({ input, ctx }) => {
      const query = await ctx.prisma.character.findMany({
        where:{
          gameId: input.gameId,
        },
        include:{
          element:{
            select:{
              name:true,
              image:true,
            },
          },
          faction:{
            select:{
              name:true,
              image:true,
            },
          },
          material:{
            select:{
              name:true,
              image:true,
            }
          },
          talents:{
            select:{
              name:true,
              image:true,
          },
        },
        weapon:{
          select:{
            name:true,
            image:true,
          }
        }}
      })
      return query;
    }),

    dailyCharacterByGame:publicProcedure
    .input(z.object({ gameId: z.string() }))
    .query(async ({ input, ctx }) => {
      const today = new Date().toLocaleDateString("pt-BR");

      const hasCharacterForToday = await ctx.prisma.characterOfTheDay.findFirst({
        where: {
          createdAt: today,
        },
        
      });
    
      const characters = await ctx.prisma.character.findMany({});
    
      if (!hasCharacterForToday && characters.length) {
        const randomCharacter: Character | undefined =
          characters[Math.floor(Math.random() * characters.length)];
    
        if (!randomCharacter) return null;
    
        const createdCharacter = await ctx.prisma.characterOfTheDay.create({
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
        
        return createdCharacter;
      }

      const query = await ctx.prisma.characterOfTheDay.findFirst({
        where:{
          createdAt: today,
          AND:{
            Character:{
              gameId: input.gameId,
            }
          }
        },
        include:{
          Character:{
            select:{
            name:true,
            image:true,

          element:{
            select:{
              name:true,
              image:true,
             id:true, 
            },
          },
          faction:{
            select:{
              name:true,
              image:true,
              id:true,
            },
          },
          material:{
            select:{
              id:true,
              name:true,
              image:true,
            }
          },
          talents:{
            select:{
              id:true,
              name:true,
              image:true,
          },
        },
        weapon:{
          select:{
            id:true,
            name:true,
            image:true,
          }
        }
      }}
      }

      })
      return query;
    }),
});
