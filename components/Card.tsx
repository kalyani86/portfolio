
import { HoverEffect } from "@/components/ui/card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Hostel  management",
    description:
      "Developed a web application to automate hostel operations, including real-time queries, noticeboard updates, student profile management, leave request handling, and complaint submissions.Implemented features for managing student profiles, handling leave requests, and tracking complaints, streamlining administrative tasks and improving communication.Designed an intuitive interface for users to interact with various functionalities, ensuring ease of use for both hostel staff and students.Enhanced operational efficiency through automation, reducing manual effort and improving overall management of hostel activities."
     
  },
  {
    title: "Todo planner",
    description:
      "Developed a web application to streamline task management with features for task addition, deletion, status updates, and deadline management.Implemented a user-friendly interface using React for the frontend and Tailwind CSS for styling, ensuring an intuitive and responsive design.Utilized Express for backend operations and MongoDB for data storage, providing a robust and scalable solution.Enhanced task organization and efficiency, helping users manage their tasks effectively and stay on top of deadlines",
     
    },
    {
    title: "Success Sync",
    description:
      "SuccessSync is an AI-powered career readiness platform that helps users gain industry-specific insights, build professional resumes, prepare for interviews, and generate tailored cover letters. Using Generative AI, the platform analyzes the user’s target industry to provide real-time trends, key skills, and personalized guidance. It streamlines the job application process with intelligent tools for resume building, mock interviews, and automated document generation — all designed to enhance job-seeking efficiency and confidence.",
     
    },
 
];
