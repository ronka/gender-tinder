import z from "zod";
import { TinderItem, TinderItemSchema } from "@/types/TinderCard";

const GameSchema = z.object({
  name: z.string(),
  items: z.array(TinderItemSchema),
});

type DateKey = `${string}-${string}-${string}`;

export const DataSchema = z.record(GameSchema);

export type Game = z.infer<typeof GameSchema>;

export type { DateKey };
