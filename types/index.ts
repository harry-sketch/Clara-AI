import z from "zod";

export const createUserChatRequestSchema = z.object({
  message: z.string(),
  image: z.string(),
});

export type TUserChatRespPayload = z.infer<typeof createUserChatRequestSchema>;
