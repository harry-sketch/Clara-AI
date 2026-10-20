"use client";

import {
  Brush,
  Delete,
  Eraser,
  Hand,
  ImageIcon,
  Maximize,
  Sparkles,
  Square,
} from "lucide-react";
import GridItem from "@/components/GridItem";
import ToolButton from "@/components/ToolButton";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { filters, ratios } from "@/lib/constants";

const LeftSidebar = () => {
  return (
    <aside className="hidden md:flex w-80 flex-col border-r border-zinc-800 z-20 shrink-0 h-full">
      <ScrollArea className="h-full w-full">
        <div className="p-4 space-y-6">
          {/* 1. Tools Grid */}
          <div className="px-4 space-y-2 bg-zinc-900 p-3 rounded-lg">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Tools
            </h3>
            <Separator className="bg-zinc-800" />

            <div className="grid grid-cols-4 gap-2">
              <ToolButton
                active={true}
                onClick={() => {}}
                icon={<Hand size={18} />}
                label="Pan"
              />
              <ToolButton
                active={false}
                onClick={() => {}}
                icon={<Square size={18} />}
                label="Select"
              />
              <ToolButton
                active={false}
                onClick={() => {}}
                icon={<Brush size={18} />}
                label="Brush"
              />
              <ToolButton
                active={false}
                onClick={() => {}}
                icon={<Eraser size={18} />}
                label="Erase"
              />
            </div>

            {/* 2. Brush Size */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Size
                </h3>
                <span className="text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded">
                  10px
                </span>
              </div>

              {/* Custom styled slider to force yellow theme regardless of global primary color */}
              <Slider
                defaultValue={[10]}
                max={100}
                min={5}
                step={1}
                onValueChange={() => {}}
                className="py-2 [&>.relative>.absolute]:bg-emerald-500 **:[[role=slider]]:border-emerald-500 **:[[role=slider]]:bg-zinc-950 **:[[role=slider]]:ring-offset-zinc-950 **:[[role=slider]]:focus-visible:ring-emerald-500"
              />
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          {/* 3. AI Accordions */}
          <div className="px-4 space-y-2 bg-zinc-800/50 p-3 rounded-lg">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Options
            </h3>

            <Separator className="bg-zinc-800" />

            <Accordion className="w-full">
              {/* Item 1: Editing Options */}
              <AccordionItem value="options" className="border-zinc-800">
                <AccordionTrigger className="text-zinc-200 hover:text-emerald-500 hover:no-underline py-3 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} />
                    <span className="text-sm">AI Editing Options</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <GridItem
                      icon={Delete}
                      label={"Remove Background"}
                      // desc={"clear background"}
                      onClick={() => {}}
                      disabled={true}
                    />
                    <GridItem
                      icon={Sparkles}
                      label={"AI Refreshment"}
                      desc={""}
                      onClick={() => {}}
                      disabled={true}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Item 2: AI Filters */}
              <AccordionItem value="filters" className="border-zinc-800">
                <AccordionTrigger className="text-zinc-200 hover:text-emerald-500 hover:no-underline py-3 transition-colors">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={16} />
                    <span className="text-sm">AI Filters</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {filters.map(({ id, image, name, prompt }) => {
                      return (
                        <GridItem
                          key={id}
                          image={image}
                          label={name}
                          desc={prompt}
                          onClick={() => {}}
                          disabled={true}
                        />
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Item 3: AI Expansion */}
              <AccordionItem value="expansion" className="border-none">
                <AccordionTrigger className="text-zinc-200 hover:text-emerald-500 hover:no-underline py-3 transition-colors">
                  <div className="flex items-center gap-2">
                    <Maximize size={16} />
                    <span className="text-sm">AI Expansion</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {ratios.map((r) => (
                      <GridItem
                        key={r.label}
                        icon={r.icon}
                        label={r.label}
                        desc={r.desc}
                        onClick={() => {}}
                        disabled={true}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default LeftSidebar;
