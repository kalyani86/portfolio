"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function About() {
  return (
    <div className="h-svh rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
