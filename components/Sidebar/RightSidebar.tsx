"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const RightSidebar = () => {
  const isActive = true;

  return (
    <aside className="flex h-full w-72 flex-col shrink-0 border-l border-zinc-800 z-20 overflow-hidden">
      <div className="flex-1 min-h-0 w-full">
        <ScrollArea className="h-full w-full">
          <div className="flex flex-col gap-4 p-4 pb-4">
            {/* conditional reder to this if not images in history */}
            {/* <div className="text-center py-10">
              <span className="text-xs text-zinc-600">No history yet</span>
            </div> */}

            <div className="relative group">
              <button
                type="button"
                onClick={() => {}}
                className={cn(
                  "relative w-full aspect-square rounded-xl overflow-hidden border transition-all duration-200",
                  isActive
                    ? "border-emerald-400"
                    : "border-zinc-800 hover:border-zinc-600 opacity-60 hover:opacity-100",
                )}
              >
                <Image
                  width={250}
                  height={250}
                  src="/logo.webp"
                  alt={`Version ${1}`}
                  className="w-full h-full object-contain"
                />

                {isActive && (
                  <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
                )}
              </button>

              <div
                className={cn(
                  "absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold shadow-md z-10 pointer-events-none",
                  isActive
                    ? "bg-emerald-400 text-zinc-950"
                    : "bg-zinc-800 text-zinc-400 border border-zinc-700",
                )}
              >
                1
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      <div className="p-3 border-t border-zinc-800 shrink-0 backdrop-blur-sm z-30">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={() => {}}
              className="w-full text-zinc-50 hover:text-zinc-100 bg-rose-500 hover:bg-rose-400 rounded-lg flex items-center justify-center py-4 cursor-pointer"
            >
              <Trash2 size={14} className="mr-2" />
              <span className="text-xs">Clear History</span>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Clear all except current</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
};

export default RightSidebar;
