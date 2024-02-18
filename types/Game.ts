import z from "zod";
import { TinderItem, TinderItemSchema } from "@/types/TinderCard";

// Schema for a single day's data
const DayDataSchema = z.object({
  name: z.string(),
  items: z.array(TinderItemSchema),
});

// Regex to validate the date format dd-mm-yyyy

// Schema to validate the entire data object, including keys
export const DataSchema = z.record(
  z.string(),
  DayDataSchema
  //   const dateFormatRegex = /^[0-3][0-9]-[0-1][0-9]-[0-9]{4}$/;
  //   .regex(dateFormatRegex),
);

export type Game = { name: string; items: TinderItem[] };
