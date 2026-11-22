import OpenAI from "openai";

export const openai_model = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});
