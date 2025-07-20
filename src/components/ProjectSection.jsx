import { motion } from "framer-motion";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { div, section } from "framer-motion/client";
import { Link } from "react-router";

const projects = [
  {
    title: "Wanderlust",
    image: "src/assets/chat.jpg",
    description:
      "A fullstack applications having features login, signup, user specific profile and much more.",
    technologies: ["NodeJS", "MongoDB", "Express", "Bootstrap", "Passport.JS"],
    github: "https://github.com/yourusername/chat-app",
    live: "https://github.com/Sankar110000/Wanderlust",
  },
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/random/800x600?portfolio",
    description:
      "A responsive portfolio website built using React and Tailwind CSS.",
    technologies: ["NodeJS", "ReactJS", "Framer Motion", "Tailwind CSS", "Acertinity"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://amazing-brigadeiros-c92cda.netlify.app/",
  },
  {
    title: "Food Ordering App",
    image: "https://source.unsplash.com/random/800x600?food",
    description:
      "Swiggy-like food ordering app using MERN stack and localStorage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/food-ordering-app",
    live: "https://zwiggi.netlify.app/",
  },
];

export default function ProjectSection() {
  return (
    <section className="px-30">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-lg md:text-4xl lg:text-5xl text-neutral-50 border-blue-400 border-s-2 ps-4 my-10 ms-110 sm:ms-55 xl:ms-0 font-bold"
      >
        Projects
        <div className="text-sm md:text-2xl lg:text-3xl font-light">A lot of project in my <a href="" className="text-blue-500 hover:border-blue-500 hover:border-b-2 ">Github Repo</a></div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: false }}
                        className="flex justify-center sm:block lg:gap-3 px-70 lg:px-0"
                      >
            <Link to={project.live}>
            <CardSpotlight className="w-70 h-auto sm:w-150 lg:w-full lg:h-90 px-4 py-3 md:p-4 lg:p-10 mb-2">
              <p className="text-lg border-b-1 border-gray-400 md:border-0 md:text-xl font-semibold md:font-bold relative z-20 text-white">
                {project.title}
              </p>
              <div className="text-neutral-200 mt-1 md:mt-4 relative text-sm md:text-lg">
                Tech Stacks used :
                <ul className="list-none  mt-2">
                  {project.technologies.map((ele) => (
                    <Step title={ele} />
                  ))}
                </ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                {project.description}
              </p>
            </CardSpotlight>
            </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
