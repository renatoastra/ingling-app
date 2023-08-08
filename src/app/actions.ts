"use server";

// import * as z from "zod";
import * as procs from "@/server/api/routers/character";
import { createAction } from "@/server/api/trpc";
// import { createAction, publicProcedure } from "@/server/api/trpc";

// /** You can import procedures from your api router. */
// export const createPost = createAction(procs.createPost);

export const getCharacters =  createAction(procs.characterRouter.getByGame);

// /** You can also create procedures inline using the reusable procedure builders. */
// export const editPost = createAction(
//   publicProcedure
//     .input(
//       z.object({
//         id: z.string(),
//         text: z.string().min(1),
//       }),
//     )
//     .mutation(({ ctx, input }) => {
//       return ctx.prisma.post.update({
//         where: {
//           id: input.id,
//         },
//         data: {
//           text: input.text,
//         },
//       });
//     }),
// );
