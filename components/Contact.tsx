"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Contact = () => {
  return (
    <div className="relative max-w-lg mx-auto justify-center items-center bg-black p-8 rounded-lg shadow-lg text-gray-300 space-y-6">
      
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">📧 Email:</p>
          <p className="text-lg">patil.kalyani8956@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-400">📞 Phone:</p>
          <p className="text-lg">+91 8080153807</p>
        </div>
        
      </div>
      <ShootingStars className="absolute inset-0 pointer-events-none" />
      <StarsBackground className="absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default Contact;
