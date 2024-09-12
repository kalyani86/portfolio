"use client";
import React, { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { NavbarDemo } from "./Navbar";
import { TabsDemo } from "./Aboutmedata";

export function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="h-svh rounded-md  bg-black flex flex-col items-center justify-center relative w-full text-white">
        <NavbarDemo/>
      <div className="h-20 w-full mb-8">
        <TextHoverEffect text="About Me" />
      </div>
      <BackgroundGradient className="rounded-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/linkdien.png`}
          alt="profile image"
          height="200"
          width="200"
          className="object-contain"
        />
      </BackgroundGradient>
      <div className="flex mx-10 md:mx-40 lg:mx-80 justify-center items-center mt-10">
        <p className="indent-6 lg:indent-20 text-clip text-wrap">
          Hi, I’m Kalyani Patil, a web developer and third-year Computer Science student at Pune Institute of Computer Technology. I focus on building web applications using the MERN stack, and I’m passionate about creating solutions that are efficient and user-friendly.{" "}
          {readMore ? (
            <>
              I’m also exploring AI and machine learning to broaden my skill set and stay updated with the latest technologies. Outside of coding, I enjoy volunteering at tech events and contributing to community initiatives. I’m always eager to learn new things and take on challenges that help me grow as a developer.
            </>
          ) : <></>}
        </p>
      </div>
      <button
        onClick={() => setReadMore(!readMore)}
        className="text-sm my-4 text-blue-500 underline"
      >
        {readMore ? "Read less" : "Read more"}
      </button>
      <div>
        <TabsDemo/>
      </div>
      <ShootingStars className="absolute inset-0 pointer-events-none" />
    <StarsBackground  className="absolute inset-0 pointer-events-none"/>
    </div>
  );
}
