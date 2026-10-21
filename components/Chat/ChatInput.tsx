"use client";

import { useState } from "react";

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import type { ChatStatus } from "ai";
import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import PromptInputAttachmentsDisplay from "@/components/Chat/PromptInputAttachmentsDisplay";
import { useEditorStore } from "@/store/useEditor.store";

const ChatInput = () => {
  const [status] = useState<ChatStatus>("ready");

  const { sendEditDataToServer } = useEditorStore();

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);

    if (!hasText) {
      console.log("Text not found");
      return;
    }

    await sendEditDataToServer(message.text);
  };

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
              <PromptInputActionMenuContent className="bg-zinc-800 text-white flex flex-col items-center justify-center text-center w-48 p-2 hover:bg-none">
                <PromptInputActionAddAttachments />
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
