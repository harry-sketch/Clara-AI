"use client";

import { GlobeIcon } from "lucide-react";
import { useState } from "react";

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import type { ChatStatus } from "ai";

import PromptInputAttachmentsDisplay from "@/components/Chat/PromptInputAttachmentsDisplay";

const ChatInput = () => {
  const [status] = useState<ChatStatus>("ready");

  const handleSubmit = () => {};

  return (
    <div className="size-full">
      <PromptInput globalDrop multiple onSubmit={handleSubmit}>
        <PromptInputAttachmentsDisplay />
        <PromptInputBody>
          <PromptInputTextarea />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputActionMenu>
              <PromptInputActionMenuTrigger className="cursor-pointer" />
              <PromptInputActionMenuContent className="bg-zinc-800 text-white flex flex-col items-center justify-center text-center">
                <PromptInputActionAddAttachments className="flex flex-col items-center justify-center" />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>
          </PromptInputTools>
          <PromptInputSubmit status={status} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default ChatInput;
