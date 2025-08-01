
import { HoverEffect } from "@/components/ui/card-hover-effect";


export function Miniproject() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stone Paper Scissors",
    description:
      "I developed a Stone Paper Scissors game using JavaScript, creating an interactive and engaging user experience. The game allows players to choose between stone, paper, or scissors, while the computer makes a random choice. I implemented the core game logic to compare selections and determine the winner, enhancing my understanding of conditional statements and DOM manipulation. The interface is simple and intuitive, providing real-time feedback on the results. Through this project, I improved my skills in JavaScript and event handling, furthering my expertise in web-based interactive applications."
     
  },
  {
    title: "Currency Converter",
    description:
      "I developed a Currency Converter application using JavaScript, allowing users to easily convert between different currencies in real time. The application integrates with an external API to fetch up-to-date exchange rates, ensuring accurate conversions. Through a user-friendly interface, users can select their desired currencies and input amounts, with instant results displayed upon selection. This project helped me enhance my proficiency in API integration, JavaScript, and asynchronous programming while delivering a responsive and interactive web-based tool for currency conversion.",
     
    },

 
];
