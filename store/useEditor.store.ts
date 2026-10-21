import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EditorState {
  userPrompt: string;
  setUserPrompt: (userPrompt: string) => void;
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

export const useEditorStore = create<EditorState>()(
  devtools((set) => ({
    userPrompt: "",
    setUserPrompt: (userPrompt: string) => {
      set({
        userPrompt,
      });
    },

    selectedImage: "",
    setSelectedImage: (image: string) => {
      set({ selectedImage: image });
    },
  })),
);
