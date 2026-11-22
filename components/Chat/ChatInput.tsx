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
import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import PromptInputAttachmentsDisplay from "@/components/Chat/PromptInputAttachmentsDisplay";
import { useEditorStore } from "@/store/useEditor.store";

const ChatInput = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { sendEditDataToServer } = useEditorStore();

  const handleSubmit = async (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);

    if (!hasText) {
      console.log("Text not found");
      return;
    }

    setIsLoading(true);

    try {
      const data = await sendEditDataToServer(message.text);
      console.log(data.message, data.image);
      setIsLoading(false);
    } catch (error) {
      console.log("Something went wrong", error);
    }
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
          <PromptInputSubmit status={isLoading ? "submitted" : "ready"} />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default ChatInput;
