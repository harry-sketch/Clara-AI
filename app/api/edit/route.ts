import { NextResponse } from "next/server";
import {
  createUserChatRequestSchema,
  type TUserChatRespPayload,
} from "@/types/index";
import { openai_model } from "@/model/model";
import { changeImageToBaseUrl, getMimeType } from "../../../lib/utils";

export async function POST(req: Request) {
  try {
    const { image, message } = (await req.json()) as TUserChatRespPayload;

    if (!image || !message) {
      return NextResponse.json(
        {
          message: "missing fields",
        },
        {
          status: 400,
        },
      );
    }

    const [imageResp, textResp] = await Promise.all([
      await openai_model.images.edit({
        model: "gpt-image-2.5-flare",
        image: new File([changeImageToBaseUrl(image)], getMimeType(image), {
          type: getMimeType(image),
        }),
        prompt: message,
      }),

      await openai_model.chat.completions.create({
        model: "gpt-6-luna",
        temperature: 0,
        reasoning_effort: "none",
        max_completion_tokens: 800,
        messages: [
          {
            role: "system",
            content: "",
          },

          {
            role: "user",
            content: message,
          },
        ],
      }),
    ]);

    if (!imageResp.data) {
      return NextResponse.json(
        {
          message: "Failed in fetching Data",
        },
        {
          status: 500,
        },
      );
    }

    const generatedImage = imageResp.data[0]?.b64_json;

    const generatedText = textResp.choices[0].message.content;

    const parsedData = createUserChatRequestSchema.safeParse({
      message: generatedText,
      image: generatedImage,
    });

    if (!parsedData.success) {
      console.error("Schema mismatch:", parsedData.error.issues);
      return NextResponse.json(
        { message: "error in parsing data" },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      image: parsedData.data.image,
      message: parsedData.data.message,
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return NextResponse.json(
      { message: "Error occured" },
      {
        status: 500,
      },
    );
  }
}
