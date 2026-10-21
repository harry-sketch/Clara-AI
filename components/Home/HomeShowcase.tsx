"use client";

import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Header/Navbar";
import RightSidebar from "@/components/Sidebar/RightSidebar";
import LeftSidebar from "@/components/Sidebar/LeftSidebar";
import { Button } from "@/components/ui/button";
import ChatInput from "../Chat/ChatInput";
import { useEditorStore } from "@/store/useEditor.store";

const HomeShowcase = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const selectedImage = useEditorStore((state) => state.selectedImage);

  const setSelectedImage = useEditorStore((state) => state.setSelectedImage);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];

      if (!file) {
        console.log("no file found");
      }

      if (file.type.startsWith("text")) {
        console.log("Wrong file selected");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;

        if (result) {
          setSelectedImage(result as string);
        }
      };

      reader.onerror = () => {
        console.log("Error reading the file. Please try again.");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-dvh flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 flex min-h-0 overflow-hidden">
        <LeftSidebar />

        <main className="flex-1 flex flex-col min-w-0 relative">
          <div className="flex-1 relative overflow-hidden w-full h-full">
            <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
              {!selectedImage ? (
                <div className="text-center space-y-6 max-w-sm z-10">
                  <Image
                    src="/logo.webp"
                    width={400}
                    height={200}
                    alt="logo"
                    className="object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100">
                      Start Creating
                    </h3>
                    <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                      Upload an image to unlock the full potential of{" "}
                      <span className="text-emerald-500 font-medium">
                        Coder&apos;s Banana
                      </span>{" "}
                      AI tools.
                    </p>
                  </div>

                  <input
                    type="file"
                    ref={fileRef}
                    onChange={handleUpload}
                    accept="image/*"
                  />
                  <Button
                    onClick={() => {
                      if (fileRef.current) {
                        fileRef.current?.click();
                      }
                    }}
                    className="w-full h-14 bg-emerald-400 hover:bg-emerald-500 text-zinc-950 text-base cursor-pointer font-bold rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Select Image
                  </Button>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedImage}
                    alt="selected-image"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* <ImageGenerationLoading /> */}
          </div>

          <div className="shrink-0 border-t border-zinc-800 p-4 lg:p-6 z-40 text-white">
            <ChatInput />
          </div>
        </main>

        <RightSidebar />
      </div>
    </div>
  );
};

export default HomeShowcase;
