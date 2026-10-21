import { NextResponse } from "next/server";
import type { TUserChatRespPayload } from "@/types/index";

export async function POST(req: Request) {
  try {
    const { image, message } = (await req.json()) as TUserChatRespPayload;

    if (!image || !message) {
      return NextResponse.json({
        message: "missing fields",
      });
    }

    return NextResponse.json({
      message: "request Successfull!!!!",
      payload: {
        image,
        message,
      },
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return NextResponse.json({ message: "Error occured" });
  }
}
