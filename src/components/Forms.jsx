import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qr2fo85', 'template_ypfyjnr', form.current, {
        publicKey: 'yZJWD_Zpxvm9hgPiA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='h-screen flex justify-center items-center'>
        <div className=''>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 bg-white p-6 rounded shadow-md">
  
  <label>Name</label>
  <input type="text" name="name" required className="border px-3 py-2" />

  <label>Email</label>
  <input type="email" name="{email}" required className="border px-3 py-2" />

  <label>Message</label>
  <textarea name="message" required className="border px-3 py-2" />

  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
</form>

    </div>
    </section>
  );
};