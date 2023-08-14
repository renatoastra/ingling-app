import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { characterRouter } from '@/server/api/routers/character';
 
type RouterInput = inferRouterInputs<typeof characterRouter>;
type RouterOutput = inferRouterOutputs<typeof characterRouter>;
 
export type DailyCharacterInput = RouterInput["dailyCharacterByGame"];
export type DailyCharacterOutput = RouterOutput["dailyCharacterByGame"];

export type NonNullableDailyCharacterOutput = Exclude<DailyCharacterOutput, null>;

