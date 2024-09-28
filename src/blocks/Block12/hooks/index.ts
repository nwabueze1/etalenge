import { useState } from "react";
import { parse } from "node-html-parser";

export const useCopyTextToClipBoard = () => {
  const [feedBackText, setFeeBackText] = useState<string>("copy link");

  const copyToClipboard = (slug: string) => {
    if (typeof window === "undefined") return;

    const baseUrl = location.origin;
    const postLink = `${baseUrl}/blog${slug}`;
    const type = "text/plain";
    const blob = new Blob([postLink], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
    setFeeBackText(`copied`);

    setTimeout(() => {
      setFeeBackText("copy link");
    }, 5000);
  };

  return {
    feedBackText,
    copyToClipboard,
  };
};

export const useCalculateMinutesRead = () => {
  const extractTextFromHtml = (html: string) => {
    return parse(html ?? "<p></p>").textContent;
  };
  const calculateMinutesRead = (content: string) => {
    const wordCount = (extractTextFromHtml(content) ?? content).split(/\s+/).length;
    const minutesRead = Math.ceil(wordCount / 250);
    return minutesRead <= 1 ? "1 minute" : minutesRead + " minutes";
  };
  return calculateMinutesRead;
};
