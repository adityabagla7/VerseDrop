import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import heroImage from "@/assets/ikka2.png";
import partnerLogo from "@/assets/main logo.svg";
import versedrop1 from "@/assets/versedrop1.jpg";
import versedrop2 from "@/assets/versedrop2.jpg";
import versedrop3 from "@/assets/versedrop3.jpg";

type ArtistCardProps = {
  image: string;
  name: string;
  subtitle: string;
  label?: string;
  link: string;
};

/* Merch cards removed from this page; use /store for product listing */

const Index2: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero — centered image with text placed left-of-center */}
        <section className="relative isolate min-h-[36vh] sm:min-h-[110vh] lg:min-h-[120vh] overflow-hidden pt-0 sm:pt-28 lg:pt-28">
          {/* Centered full-bleed image */}
          <div className="absolute inset-0 h-full w-full">
            <img
              src={heroImage}
              alt="IKKA hero"
              className="block w-full h-auto max-h-[30vh] sm:h-full sm:max-h-none sm:object-cover sm:object-center transition-transform duration-700 will-change-transform"
            />
          </div>

          {/* Content overlay: text block positioned left-of-center */}
          <div className="relative z-10 pt-8 sm:min-h-[110vh] lg:min-h-[120vh] sm:pt-28 lg:pt-40">
            <div className="container mx-auto px-6 lg:px-12 relative h-full">
              <div className="absolute left-6 lg:left-20 top-0 -translate-y-0 sm:top-1/2 sm:-translate-y-1/2 lg:top-[58%] max-w-3xl">
                <motion.h1
                  initial={{ y: 48, opacity: 0 }}
                  animate={heroLoaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="font-black tracking-tight text-white leading-[0.85] -mb-2 text-[2.2rem] xs:text-[3.2rem] sm:text-[5rem] md:text-[10rem] lg:text-[16rem]"
                  style={{ lineHeight: 0.9 }}
                >
                  IKKA
                </motion.h1>

                <p
                  className={`mt-4 text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold text-red-800 uppercase tracking-widest transition-all duration-700 ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  IKKA DROP 01 COMING SOON
                </p>

                <div
                  className={`mt-6 sm:mt-8 ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  } transition-all duration-700`}
                >
                  <a
                    href="/store"
                    aria-label="Check out"
                    className="cta-diagonal inline-block hover:text-black hover:bg-red-600 text-white rounded-md px-6 py-5 sm:px-10 sm:py-10 font-extrabold uppercase tracking-wider shadow-[0_10px_30px_rgba(220,38,38,0.18)] transition-colors duration-200 text-lg xs:text-xl sm:text-3xl lg:text-3xl text-center"
                  >
                    CHECK OUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid Section: full-width, 3 columns, images touch with no gaps */}
        <section className="w-full bg-black overflow-hidden">
          <div className="w-full">
            <div className="w-full grid grid-cols-3 gap-0">
              <div className="w-full">
                <img src={versedrop1} alt="Versedrop 1" className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover block" />
              </div>
              <div className="w-full">
                <img src={versedrop3} alt="Versedrop 2" className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover block" />
              </div>
              <div className="w-full">
                <img src={versedrop2} alt="Versedrop 3" className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover block" />
              </div>
            </div>

            
          </div>
        </section>

    

        {/* Partner Section (red & black theme, animated) */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 mb-8 lg:mb-0">
                <img src={partnerLogo} alt="Partner with us" className="w-full rounded-lg ring-2 ring-red-600/40" />
              </div>

              <div className="order-1 lg:order-2">
                <motion.h2
                  initial={{ y: 48, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-5xl lg:text-6xl font-extrabold mb-6 text-white"
                >
                  Partner With Us
                </motion.h2>

                <motion.p
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed max-w-prose"
                >
                  Join us and collaborate on exclusive drops, events and cross-promotional campaigns. Our partners get prioritized access to limited merchandise runs, co-branded promotions, and direct support from the artist team to amplify reach and impact.
                </motion.p>

                  <a href="/contact" className="cta-diagonal hover:text-black hover:bg-red-600 text-white rounded-md px-5 py-5 font-extrabold uppercase tracking-wider shadow-[0_10px_30px_rgba(220,38,38,0.18)] transition-colors duration-200 text-2xl lg:text-2xl">PARTNER NOW</a>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default Index2;
