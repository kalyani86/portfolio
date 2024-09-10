import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Frontpage from "../../components/Frontpage";
import { NavbarDemo } from "../../components/Navbar";
import { About } from "../../components/About";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";



export default function Home() {
  return (
   <>
 <NavbarDemo/>
 
  <Frontpage/>
  <div id="/about">
     <About/>
  </div>
  
  </>
  );
}
