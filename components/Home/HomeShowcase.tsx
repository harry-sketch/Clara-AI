"use client";

import Image from "next/image";
import { Navbar } from "@/components/Header/Navbar";
import LeftSidebar from "@/components/Sidebar/LeftSidebar";
import RightSidebar from "@/components/Sidebar/RightSidebar";
import { Button } from "@/components/ui/button";
import ChatInput from "../Chat/ChatInput";

const HomeShowcase = () => {
  const imageSelected = false;

  return (
    <div className="w-full h-dvh flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 flex min-h-0 overflow-hidden">
        <LeftSidebar />

        <main className="flex-1 flex flex-col min-w-0 relative">
          <div className="flex-1 relative overflow-hidden w-full h-full">
            <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
              {!imageSelected ? (
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
                      <span className="text-yellow-500 font-medium">
                        Coder&apos;s Banana
                      </span>{" "}
                      AI tools.
                    </p>
                  </div>
                  <Button
                    onClick={() => {}}
                    className="w-full h-14 bg-emerald-400 hover:bg-emerald-500 text-zinc-950 text-base cursor-pointer font-bold rounded-xl transition-all hover:scale-[1.02]"
                  >
                    Select Image
                  </Button>
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  IMAGE EDITOR COMPONENT
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
