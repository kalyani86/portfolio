"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
   
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/kalyani86",
    },
    {
      title:"Linkdein",
      icon:(
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href:"https://www.linkedin.com/in/kalyani-patil-a41476258/"
    }
  ];
  return (
    <div className="flex items-center justify-center w-full mb-4">
      <FloatingDock
    
        items={links}
      />
    </div>
  );
}
