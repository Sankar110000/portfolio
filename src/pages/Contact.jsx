import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const form = React.useRef();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_ID

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast('We have recived your Email')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast('Some technical error')
        },
      );

      setEmail('')
      setName('')
      setMessage('')
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-20">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500">Let's Connect</h1>
          <p className="text-gray-300 text-lg">
            Have an idea or project in mind? Let's turn it into reality! Feel free to drop a message and I’ll get back to you soon.
          </p>
          <a
            href="mailto:skaibalya@gmail.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition-all"
          >
            Email Me
          </a>
        </div>
        <Toaster />
        <div className="w-full md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg text-black w-full"
          >
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label className="font-semibold">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-all"
            >
              Send
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
