import React, { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up submission (API or email)
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Keep existing hero UI */}
        <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-8 text-red-600">Contact Us</h1>
          <p className="text-lg lg:text-2xl text-white/80 max-w-2xl mb-8">
            Interested in partnering, collaborating, or have a question? Use the form below or email us at 
            <a href="mailto:contact@versedrop.com" className="text-red-400 underline ml-1">contact@versedrop.com</a>.
          </p>
          <a
            href="mailto:contact@versedrop.com"
            className="inline-block bg-red-600 text-black hover:bg-red-700 rounded-md px-10 py-4 font-bold text-xl transition-colors duration-200 mb-8"
          >
            PARTNER WITH US
          </a>
        </section>

        {/* Incoming content: form + contact cards + about, adapted to match current UI */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in touch</h2>
                <p className="text-white/70 text-lg">Your questions are always welcome!</p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-600/10 rounded-lg">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <a href="tel:+919466666213" className="text-white/70 hover:text-red-600 transition-colors text-base">+91 9466666213</a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-600/10 rounded-lg">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-2">Email</p>
                      <a href="mailto:contact@versedrop.in" className="text-white/70 hover:text-red-600 transition-colors block mb-1 text-base">contact@versedrop.in</a>
                      <a href="mailto:support@versedrop.in" className="text-white/70 hover:text-red-600 transition-colors block text-base">support@versedrop.in</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#0b0b0b] border border-gray-800 rounded-lg shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">Name<span className="text-red-500 ml-1">*</span></Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-2 h-12 text-base" placeholder="Enter your first name" />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-base font-semibold">Last name</Label>
                    <Input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} className="mt-2 h-12 text-base" placeholder="Enter your last name" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">Email<span className="text-red-500 ml-1">*</span></Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-2 h-12 text-base" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">Message<span className="text-red-500 ml-1">*</span></Label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} className="mt-2 min-h-[140px] text-base" placeholder="Tell us what's on your mind..." />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 h-12 text-base font-semibold rounded-md">Submit</Button>
                </form>
              </div>
            </div>

            {/* Right Column - About Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
                <div className="w-16 h-1 bg-red-600 mb-6"></div>
              </div>

              <div className="p-8 bg-[#0b0b0b] border border-gray-800 rounded-lg shadow-sm">
                <div className="space-y-6 text-white/70 leading-relaxed">
                  <p className="text-base">Hip hop is more than music. It is culture, voice, and community. VerseDrop was created to keep that culture alive by bringing artists and fans closer through authentic and official merchandise.</p>
                  <p className="text-base">We work directly with Indian hip hop artists to design drops that carry their vision and their story. Every piece is artist approved, carefully crafted, and made for fans who want to wear their pride and represent the movement.</p>
                  <p className="text-base">For artists, VerseDrop means true ownership and freedom. They decide how their creativity is represented and share in the value their work creates. For fans, VerseDrop is a way to connect with the culture beyond the music and stand side by side with the artists they believe in.</p>
                  <p className="font-bold text-lg text-white pt-4 border-t border-gray-800">This is not just merch. This is hip hop, dropped.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 flex items-center"><span className="w-1 h-8 bg-red-600 mr-3"></span>Mission</h3>
                  <p className="text-white/70 leading-relaxed text-base">Our mission is to build a strong bond between artists and fans through authentic, high quality merchandise. We are dedicated to empowering artists with creative control and fair royalties, while giving fans access to pieces that represent the culture they love.</p>
                </div>

                <div className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 flex items-center"><span className="w-1 h-8 bg-red-600 mr-3"></span>Vision</h3>
                  <p className="text-white/70 leading-relaxed text-base">Our vision is to make VerseDrop the home of Indian hip hop culture. We aim to create a global platform where artists own their voice, fans discover real and official drops, and the culture continues to grow, inspire, and thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;