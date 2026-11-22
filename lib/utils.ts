import { DATA_URL_REGEX } from "./constants";

export { cn } from "cn";

export const changeImageToBaseUrl = (dataUrl: string): string => {
  return dataUrl.replace(/^data:image\/\w+;base64,/, "");
};

export const getMimeType = (dataUrl: string): string => {
  const match = dataUrl.match(DATA_URL_REGEX);
  return match?.[1] ?? "image/jpeg";
};
