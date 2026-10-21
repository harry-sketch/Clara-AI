import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface EditorState {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

export const useEditorStore = create<EditorState>()(
  devtools((set) => ({
    selectedImage: "",
    setSelectedImage: (image: string) => {
      set({ selectedImage: image });
    },
  })),
);
