// components/SkillsSection.jsx
import { motion } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
  },
  {
    name: "React",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmA-5psdnl5cuss92m2i1vIDxyaZ3uVStnw&s",
  },
  {
    name: "Nextjs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfU0qghEuei759froX5J9i6sC68bDzFR698A&s",
  },
  {
    name: "NodeJS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4P-pt61PeTsAj_1b-Bb_MmFpUO22360XrQw&s",
  },
  {
    name: "Express",
    image: "https://axcomputersconsulting.com/wp-content/uploads/2022/12/our-express-js-webapp-development.webp",
  },
  {
    name: "Git",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriEiHGx3W7DzlLbDNJ8fDqmpfGwJCqKdFrA&s",
  },
  {
    name: "Github",
    image: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
  },
  {
    name: "MongoDB",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*4EchIT_YAbhl-hzy7x1gCA.png",
  },
  {
    name: "Postman",
    image: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png",
  },
];

const repeatedSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section className="px-30 md:mb-20" id="skills">
        <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-lg md:text-4xl lg:text-5xl text-neutral-50 border-blue-400 border-s-2 ps-4 mt-10 lg:my-10 ms-110 sm:ms-55 xl:ms-0 font-bold"
              >
                Skills
                <div className="text-sm md:text-2xl lg:text-3xl font-light">Lorem, ipsum dolor.</div>
        </motion.div>
      <div className="max-w-6xl lg:max-w-7xl text-center">
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max mt-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="h-20 w-20 md:h-30 md:w-30 lg:h-50 lg:w-50"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="mx-auto h-[80%] object-contain rounded border-0"
                />
                <p className="text-xl mt-4 text-white">{skill.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
