import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Frontpage from "../../components/Frontpage";
import { NavbarDemo } from "../../components/Navbar";
import { About } from "../../components/About";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Project } from "../../components/Project";
import Contact from "../../components/Contact";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
   <div className="flex flex-col gap-16">
 <NavbarDemo/>
  
  <div id="/" className="">
  <Frontpage/>
  </div>
  <div id="about" className="">
     <About/>
  </div>
  <div id="project" className="">
    <Project/>
  </div>
 <div id="contact" className="text-white">
 <div className="h-20 w-full mb-8">
    <TextHoverEffect text="Contact Me" />
      </div>
    <Contact/>
 </div>
  </div>
  );
}
