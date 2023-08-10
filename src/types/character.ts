import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { characterRouter } from '@/server/api/routers/character';
 
type RouterInput = inferRouterInputs<typeof characterRouter>;
type RouterOutput = inferRouterOutputs<typeof characterRouter>;
 
export type CharacterInput = RouterInput["getByGame"];
export type CharacterOutput = RouterOutput["getByGame"];