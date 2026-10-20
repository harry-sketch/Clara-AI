"use client";

import { cn } from "cn";
import { Download, History, Redo, Undo, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b border-zinc-800 flex items-center justify-between px-10 shrink-0 z-50 h-24">
      {/* Left: Branding */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Clara-AI Logo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Right: Actions Toolbar */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* 1. Undo / Redo Group */}
        <div className="flex items-center bg-zinc-900 rounded-md p-1 border border-zinc-800">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 cursor-pointer"
          >
            <Undo size={15} />
          </Button>

          <div className="h-4 w-px bg-zinc-700 mx-1"></div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 cursor-pointer"
          >
            <Redo size={15} />
          </Button>
        </div>

        {/* Separator 1 */}
        <div className="h-6 w-px bg-zinc-700 mx-1 md:mx-2"></div>

        {/* 2. File Operations Group */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-9 bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 px-2.5 md:px-4 cursor-pointer"
          >
            <Upload size={14} className="md:mr-2" />
            <span className="hidden md:inline">Upload</span>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="h-9 bg-rose-600 text-zinc-50 hover:bg-rose-500 font-bold px-2.5 md:px-4 cursor-pointer"
          >
            <span className="hidden md:inline">Export</span>
            <Download size={14} className="md:ml-2" />
          </Button>
        </div>

        {/* 3. History Toggle & Separator (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="h-6 w-px bg-zinc-700 mx-2"></div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-9 w-9 transition-all duration-200 bg-zinc-800 text-zinc-100 border border-zinc-700 cursor-pointer",
            )}
            title="Open History"
          >
            <History size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
}
