"use client";

import { Tabs } from "@/components/ui/tabs";
import { FaJava, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiMysql, SiVisualstudiocode, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus size={40} className="text-blue-600" /> },
  { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-500" /> },
  { name: "HTML", icon: <SiHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "SQL", icon: <SiMysql size={40} className="text-blue-700" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "Next.js", icon: <FaReact size={40} className="text-gray-900" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
  { name: "VS Code", icon: <SiVisualstudiocode size={40} className="text-blue-500" /> }
];



const achievements = [
  {
    name: "LeetCode",
    description: "Solved 100+ problems.",
    link: "https://leetcode.com/u/Kalyani47/",
    icon: <FaTrophy size={40} className="text-yellow-500" />
  },
  {
    name: "GeeksforGeeks",
    description: "Solved 200+ problems.",
    link: "https://www.geeksforgeeks.org/user/patilkalyczf4/",
    icon: <FaTrophy size={40} className="text-green-500" />
  },
  {
    name: "HackerRank",
    description: "4-star in C++.",
    link: "https://www.hackerrank.com/profile/patil_kalyani891",
    icon: <FaTrophy size={40} className="text-purple-500" />
  },
  {
    name: "Coding Ninjas",
    description: "Solved 100+ problems.",
    link: "https://www.naukri.com/code360/profile/46e2cdc0-3e3c-41e1-995a-d999765a9897",
    icon: <FaTrophy size={40} className="text-red-500" />
  }
];

export function TabsDemo() {
  const tabs = [
    {
      title: "Skills",
      value: "Skills",
      content: (
        <div className="flex flex-wrap justify-center gap-16 p-4 h-100 bg-gradient-to-br py-16 from-purple-700 to-violet-900 mx-10 flex-grow-1 flex-basic-0 lg:py-10">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center group">
              <div className="transition transform hover:scale-110">{skill.icon}</div>
              <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      )
    },
   
   {
        title: "Education",
        value: "Education",
        content: (
          <div className="flex flex-wrap justify-center gap-6 p-4 h-100 bg-gradient-to-br from-purple-700 to-violet-900 flex-grow-1 flex-basic-0 mx-10">
           
              <div className="flex flex-col items-center justify-center group">
                <div className="transition transform hover:scale-110"> <FaGraduationCap size={40} className="text-blue-500" /></div>
                <p className="text-lg font-bold mt-2">Pune Institute Of Computer Technology</p>

                    <p className="text-sm">Bachelor of Engineering in Computer Engineering</p>
                    <p className="text-xs text-gray-300">CGPA: 9.83</p>
                 
                <div className="transition transform hover:scale-110">  <FaGraduationCap size={40} className="text-blue-500" /></div>
                <p className="text-lg font-bold mt-2">Laxmanrao Kirloskar Vidyamandir and Jr College Palus Sangli</p>

                    <p className="text-sm">SSC Board</p>
                    <p className="text-xs text-gray-300">97.00%</p>
                    <div  className="text-center">
                      <p className="text-sm">2019 – 2020</p>
                    </div>
                    <p className="text-sm">HSC Board</p>
                    <p className="text-xs text-gray-300">96.33%</p>
                    <div  className="text-center">
                      <p className="text-sm">2020 – 2022</p>
                    </div>
                </div>
              </div>
        )
      },
      {
        title: "Achievement",
        value: "Achievement",
        content: (
          <div className="flex flex-wrap justify-center gap-16 p-4 h-100 bg-gradient-to-br py-32 from-purple-700 to-violet-900 mx-10 flex-grow-1 flex-basic-0 ">
            {achievements.map((ach, index) => (
              <div key={index} className="flex flex-col items-center justify-center group">
                <div className="transition transform hover:scale-110">{ach.icon}</div>
                <p className="text-lg font-bold mt-2">{ach.name}</p>
                <p className="text-sm">{ach.description}</p>
                <a
                  href={ach.link}
                  className="text-xs text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )
      }, 
  ];

  return (
    <div className="w-screen">
      <div className="relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
