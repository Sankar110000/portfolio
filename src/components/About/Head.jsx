import React from 'react'
import { motion } from "framer-motion";
import { ContainerTextFlip } from '../ui/text-flip';

function Head() {
  return (
    <section
      id="about"
      className="py-16 px-6 text-gray-800 dark:text-white ms-5 sm:ms-0"
    >
      <div className="w-screen mx-auto sm:flex justify-center gap-6 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="w-1/2 flex sm:justify-center lg:justify-end"
        >
          <div className="w-[40%]">
            <div className="w-60 overflow-hidden rounded-2xl">
              <img
                src="/profile.jpg"
                alt=""
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-sm leading-relaxed space-y-6 w-[60%]"
        >
          <div className="flex">
            <div>
              <p className="text-2xl sm:text-5xl lg:text-7xl uppercase font-bold tracking-tighter sm:tracking-normal">
                About <br className='visible'/> Kaibalya
              </p>
              <p className="lg:text-lg mt-2 text-sky-400">Full-Stack Developer | MERN | Open Source | Gen AI</p>
              <ContainerTextFlip words={["Developer", "Student", "Learner", "Freelancer", "AI Enthusiast"]} interval={1000} className="mt-2"/>
              <br />
              <br />
              <a href="src/assets/Updated Resume.docx" className='py-3 px-3 bg-sky-600 text-white rounded-lg border-1 border-b-black border-indigo-800 font-bold sm:text-lg'>
                Download resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Head