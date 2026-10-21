import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EditorState {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  sendEditDataToServer: (message: string) => Promise<void>;
}

export const useEditorStore = create<EditorState>()(
  devtools((set, get) => ({
    selectedImage: "",
    setSelectedImage: (image: string) => {
      set({ selectedImage: image });
    },

    sendEditDataToServer: async (message: string) => {
      const state = get();
      const { selectedImage } = state;
      console.log({ selectedImage, message });
    },
  })),
);
