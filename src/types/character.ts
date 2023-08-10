import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { characterRouter } from '@/server/api/routers/character';
 
type RouterInput = inferRouterInputs<typeof characterRouter>;
type RouterOutput = inferRouterOutputs<typeof characterRouter>;
 
type CharacterInput = RouterInput["getByGame"];
type CharacterOutput = RouterOutput["getByGame"];