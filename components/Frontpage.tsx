"use client"

import { SparklesCore } from '@/components/ui/sparkles'
import React from 'react'
import { TypewriterEffectDemo } from './Text'
import { FloatingDockDemo } from './floatingApp'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'



const Frontpage = () => {
  const handleDownload = ():void => {
    const link = document.createElement('a');
    link.href = '/Kalyani_Patil_C2K22128_Resume.pdf'; // File path from the 'public' folder
    link.download = 'Kalyani_Patil_C2K22128_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };
  return (
    <div id='/' className="h-svh w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h1 className="md:text-2xl text-3xl lg:text-3xl font-bold text-center text-white relative z-20">
     <TypewriterEffectDemo/>
     <FloatingDockDemo/>
    </h1>
   
    <button className="p-[3px] relative mb-4" onClick={handleDownload}>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg" />
  <div className="px-8 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Download CV
  </div>
</button>
    <div className="w-[40rem] h-40 relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(450px_300px_at_top,transparent_20%,white)]"></div>
    </div>
    <ShootingStars />
    <StarsBackground />
  </div>
  )
}

export default Frontpage