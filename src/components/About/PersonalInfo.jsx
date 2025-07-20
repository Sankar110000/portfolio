import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdSchool } from "react-icons/md";
import { motion } from "framer-motion";

function PersonalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="border-s-2 border-white p-2 sm:p-6 ms-4 lg:ms-0 sm:w-[85%] lg:w-auto"
    >
      <h1 className="text-xl sm:text-3xl font-semibold text-blue-500 mb-2">Personal Info</h1>
      <div className="border-b-2 border-blue-500 mb-4"></div>

      <div className="space-y-3 text-gray-300 text-sm sm:text-lg">
        <p> Fullname: <span className="text-gray-400">Kaibalya Sahoo</span></p>
        <p><FaEnvelope className="inline mr-2" />Email: <a href="mailto:skaibalya@gmail.com" className="text-blue-400 hover:underline">skaibalya@gmail.com</a></p>
        <p><FaPhone className="inline mr-2" />Phone: <span className="text-gray-400">+91 9876543210</span></p>
        <p><MdLocationOn className="inline mr-2" />Location: <span className="text-gray-400">Bhubaneswar, India</span></p>
        <p><MdSchool className="inline mr-2" />Education: <span className="text-gray-400">B.Tech in CSE, XYZ University</span></p>
        <p><FaGithub className="inline mr-2" />GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/yourusername</a></p>
        <p><FaLinkedin className="inline mr-2" />LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/yourusername</a></p>
      </div>
    </motion.div>
  );
}

export default PersonalInfo;
