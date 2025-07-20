import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

function Connect() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="border-s-2 border-amber-50 p-2 sm:p-6 ms-4 lg:ms-0 w-[85%] lg:w-auto"
    >
      <h1 className="text-xl sm:text-3xl font-semibold text-blue-500 mb-2">
        Let&apos;s Connect
      </h1>
      <div className="border-b-2 border-blue-500 mb-4"></div>

      <p className="text-gray-300 text-sm sm:text-lg mb-6 w-[18rem] sm:w-auto">
        Have a project idea, freelance work, or just want to collaborate? I'm always open to exciting conversations!
      </p>

      <div className="space-y-4 text-gray-300">
        <div>
          <h2 className="text-sm sm:text-xl font-semibold text-white mb-1">Email Me</h2>
          <a
            href="mailto:skaibalya@gmail.com"
            className="flex text-sm sm:text-lg items-center text-blue-400 hover:underline ms-4"
          >
            <FaEnvelope className="mr-2" /> skaibalya@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-sm sm:text-xl font-semibold text-white mb-1">Find Me Online</h2>
          <div className="flex flex-col space-y-2 ms-4">
            <a
              href="https://www.fiverr.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-green-400 hover:underline text-sm sm:text-lg"
            >
              <FaExternalLinkAlt className="font-light me-2"/>{}Fivver
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-blue-400 hover:underline text-sm sm:text-lg"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-gray-400 hover:underline text-sm sm:text-lg"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>

        <div>
          <button className="sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white py-1 sm:py-2 px-2 sm:px-6 rounded transition-all duration-300">
            Contact with me
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Connect;
