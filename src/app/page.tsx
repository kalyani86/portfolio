import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Frontpage from "../../components/Frontpage";
import { NavbarDemo } from "../../components/Navbar";
import { About } from "../../components/About";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Project } from "../../components/Project";



export default function Home() {
  return (
   <>
 <NavbarDemo/>
  
  <div id="/" className="">
  <Frontpage/>
  </div>
  <div id="about" className="w-svh ">
     <About/>
  </div>
  <div id="project" className="w-svh">
    bsdv
  </div>
 
  </>
  );
}
