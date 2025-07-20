import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="ps-30">
        <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-lg md:text-4xl text-neutral-50 border-blue-400 border-s-2 ps-4 my-10 ms-110 sm:ms-55 xl:ms-0 font-bold"
              >
                Get in touch
                <div className="text-sm md:text-2xl font-light w-65 sm:w-auto">Want to buid an application, collaborate, or wana say Hii !</div>
              </motion.div>
        <section className="w-full sm:flex justify-center px-6 md:px-20 pb-4 sm:py-16 lg:gap-12">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="flex-1"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAfdH_JglEKmfWKa5Ziuw8iu_X7k_QCVN_O08qmJyGEzi1cOU3OEyfOEkYLTPgJaX-QK3&s"
          alt="Contact"
          className="h-70 rounded-2xl max-w-md sm:mx-auto ms-120"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="flex-1 ms-110 sm:ms-0 mt-10"
      >
        <p className="text-green-600 tracking-tight">have a great idea ?</p>
        <h2 className="text-3xl lg:text-6xl font-semibold mb-6 text-white">
          Let’s talk about <br />your project
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-lg w-70 sm:w-auto">
          Whether you have a question, want to collaborate, or just want to say
          hi — my inbox is always open!
        </p>
        <a
          href="mailto:skaibalya748@gmailcom"
          className="inline-block px-4 py-2 bg-amber-200 text-black rounded hover:bg-amber-300 transition duration-200"
        >
          I am Here
        </a>
      </motion.div>
    </section>
    </div>
  );
};

export default ContactSection;
