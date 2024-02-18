import z from "zod";

// types.ts
export interface TinderItem {
	title: string;
	emoji: string;
	gender: string;
}

export const TinderItemSchema = z.object({
	title: z.string(),
	emoji: z.string(),
	gender: z.string(),
  });
  
  