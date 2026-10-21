import { create } from "zustand";

interface EditorState {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
}

export const useEditorStore = create<EditorState>()((set) => ({
  selectedImage: "",
  setSelectedImage: (image: string) => {
    set({ selectedImage: image });
  },
}));
