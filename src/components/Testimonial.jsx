import React from "react";
import { AnimatedTestimonials } from "./ui/animate-testimonial";
import { motion } from "framer-motion";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "The real-time chat app Kaibalya built for us was seamless and fast. Our team uses it daily and the performance has been flawless.",
      name: "Rohit Sharma",
      designation: "Team Lead at CodeSphere",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Our website went from zero to a modern, responsive experience thanks to his portfolio build. The UI was clean and mobile-friendly out of the box.",
      name: "Priya Mehta",
      designation: "Founder at CreativEdge",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "His food ordering system prototype had everything — a smooth UI, cart management, and localStorage persistence. Impressive work!",
      name: "Arjun Verma",
      designation: "Product Strategist at QuickBite",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Kaibalya is a quick learner. He built and deployed a project dashboard for us using MERN that helped track metrics in real time.",
      name: "Neha Kapoor",
      designation: "Project Manager at DevGrid",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Excellent problem-solving skills and a clean coding style. He built a backend API for our app that scaled effortlessly.",
      name: "Ankit Singh",
      designation: "CTO at Innoventix",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="px-30">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-lg md:text-4xl lg:text-5xl text-neutral-50 border-blue-400 border-s-2 ps-4 my-10 ms-110 sm:ms-55 xl:ms-0 font-bold"
      >
        Testimonials
        <div className="text-sm md:text-2xl lg:text-3xl font-light">Reivews that are from real customres</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="lg:scale-110"
      >
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>
    </section>
  );
}

export default Testimonial;
