import z from "zod";

const GenderSchema = z.union([
  z.literal("m"),
  z.literal("f"),
  z.literal("mixed"),
]);

export type GenderType = z.infer<typeof GenderSchema>;

// types.ts
export interface TinderItem {
  title: string;
  emoji: string;
  gender: GenderType;
}

export const TinderItemSchema = z.object({
  title: z.string(),
  emoji: z.string(),
  gender: z.string(),
});
