import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-8 text-center text-red-600">Contact Us</h1>
        <p className="text-lg lg:text-2xl text-white/80 max-w-2xl text-center mb-12">
          Interested in partnering, collaborating, or have a question? Fill out the form below or email us directly at <a href="mailto:contact@versedrop.com" className="text-red-400 underline">contact@versedrop.com</a>.
        </p>
        <a
          href="mailto:contact@versedrop.com"
          className="inline-block bg-red-600 text-black hover:bg-red-700 rounded-md px-10 py-4 font-bold text-xl transition-colors duration-200 mb-8"
        >
          PARTNER WITH US
        </a>
        {/* You can add a contact form here if needed */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;