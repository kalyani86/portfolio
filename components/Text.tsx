"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
        text: "Kalyani",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "Patil",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mb-5">
      <TypewriterEffect words={words} />
      <p className="text-sm mt-2">
        This is my portfolio
      </p>
    </div>
  );
}
