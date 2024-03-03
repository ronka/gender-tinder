import z from "zod";
import { TinderItem, TinderItemSchema } from "@/types/TinderCard";

// Schema for a single day's data
const DayDataSchema = z.object({
  name: z.string(),
  items: z.array(TinderItemSchema),
});

const GameSchema = z.object({
  name: z.string(),
  items: z.array(TinderItemSchema),
});

type DateKey = `${string}-${string}-${string}`;

export const DataSchema = z.record(DayDataSchema, GameSchema);

export type Game = z.infer<typeof GameSchema>;

export type { DateKey };
