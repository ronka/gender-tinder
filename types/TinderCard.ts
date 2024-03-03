import z from "zod";

const GenderSchema = z.union([
  z.literal("m"),
  z.literal("f"),
  z.literal("mixed"),
]);

export type GenderType = z.infer<typeof GenderSchema>;

export const TinderItemSchema = z.object({
  title: z.string(),
  emoji: z.string(),
  gender: GenderSchema,
});

export type TinderItem = z.infer<typeof TinderItemSchema>;
