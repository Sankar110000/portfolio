import React from 'react';
import { motion } from 'framer-motion';

const reviewData = [
  {
    name: "Alice Johnson",
    role: "Product Manager at Acme Inc.",
    text: "Kaibalya is a dedicated and highly skilled developer. He delivered top-notch results on time and was a pleasure to work with.",
  },
  {
    name: "Ravi Sharma",
    role: "Full Stack Developer",
    text: "Clean code, great communication, and amazing UI sense. Highly recommended for frontend projects.",
  },
  {
    name: "Emily Tran",
    role: "Team Lead at DevHub",
    text: "Kaibalya brought creative solutions to complex problems and was a key asset to our project’s success.",
  },
  {
    name: "Emily Tran",
    role: "Team Lead at DevHub",
    text: "Kaibalya brought creative solutions to complex problems and was a key asset to our project’s success.",
  },
];

function Reviews() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="border-s-2 border-white p-2 sm:p-6  ms-4 lg:ms-0 w-[85%] lg:w-auto"
    >
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-blue-500 mb-2">Reviews</h1>
      <div className="border-b-2 border-blue-500 mb-6"></div>

      <div className="grid gap-2 sm:gap-6 md:grid-cols-2">
        {reviewData.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="bg-gray-700 text-sm lg:text-[15px] rounded sm:rounded-xl p-1 sm:p-4 shadow-md border border-gray-600 w-[18rem] sm:w-auto"
          >
            <p className="text-gray-300 mb-4">"{review.text}"</p>
            <div>
              <p className="text-blue-400 font-semibold">{review.name}</p>
              <p className="text-sm text-gray-400">{review.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Reviews;
