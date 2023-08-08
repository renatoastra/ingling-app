import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

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
    })
});
