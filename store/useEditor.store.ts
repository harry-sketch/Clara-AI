import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { TUserChatRespPayload } from "@/types/index";

interface EditorState {
  image: string;
  setImage: (image: string) => void;
  sendEditDataToServer: (message: string) => Promise<TUserChatRespPayload>;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useEditorStore = create<EditorState>()(
  devtools((set, get) => ({
    image: "",
    setImage: (image: string) => {
      set({ image });
    },

    sendEditDataToServer: async (
      message: string,
    ): Promise<TUserChatRespPayload> => {
      if (!API_URL) {
        throw new Error("Missing Api Url");
      }
      const state = get();
      const { image } = state;

      if (!image || !message) {
        throw new Error("Missing fields");
      }

      const resp = await fetch(`${API_URL}/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          message,
        }),
      });

      if (!resp.ok) {
        throw new Error("Error Occured in API");
      }

      const data = await resp.json();

      return data;
    },
  })),
);
