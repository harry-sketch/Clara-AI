"use client";

import { CheckIcon, GlobeIcon } from "lucide-react";
import { useState } from "react";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
// import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  // PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { models } from "@/components/Chat/models.data";
import PromptInputAttachmentsDisplay from "@/components/Chat/PromptInputAttachmentsDisplay";

const ChatInput = () => {
  const [model, setModel] = useState<string>(models[0].id);

  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);

  const selectedModelData = models.find((m) => m.id === model);

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
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>
            <PromptInputButton>
              <GlobeIcon size={16} />
              <span>Search</span>
            </PromptInputButton>
            <ModelSelector
              onOpenChange={setModelSelectorOpen}
              open={modelSelectorOpen}
            >
              <ModelSelectorTrigger render={<PromptInputButton />}>
                {selectedModelData?.chefSlug && (
                  <ModelSelectorLogo provider={selectedModelData.chefSlug} />
                )}
                {selectedModelData?.name && (
                  <ModelSelectorName>
                    {selectedModelData.name}
                  </ModelSelectorName>
                )}
              </ModelSelectorTrigger>
              <ModelSelectorContent>
                <ModelSelectorInput placeholder="Search models..." />
                <ModelSelectorList>
                  <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
                  {["OpenAI", "Anthropic", "Google"].map((chef) => (
                    <ModelSelectorGroup heading={chef} key={chef}>
                      {models
                        .filter((m) => m.chef === chef)
                        .map((m) => (
                          <ModelSelectorItem
                            key={m.id}
                            onSelect={() => {
                              setModel(m.id);
                              setModelSelectorOpen(false);
                            }}
                            value={m.id}
                          >
                            <ModelSelectorLogo provider={m.chefSlug} />
                            <ModelSelectorName>{m.name}</ModelSelectorName>
                            <ModelSelectorLogoGroup>
                              {m.providers.map((provider) => (
                                <ModelSelectorLogo
                                  key={provider}
                                  provider={provider}
                                />
                              ))}
                            </ModelSelectorLogoGroup>
                            {model === m.id ? (
                              <CheckIcon className="ml-auto size-4" />
                            ) : (
                              <div className="ml-auto size-4" />
                            )}
                          </ModelSelectorItem>
                        ))}
                    </ModelSelectorGroup>
                  ))}
                </ModelSelectorList>
              </ModelSelectorContent>
            </ModelSelector>
          </PromptInputTools>
          {/* <PromptInputSubmit status={status} /> */}
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default ChatInput;
