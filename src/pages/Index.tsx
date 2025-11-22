import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import heroImage from "@/assets/hero-ikka.jpg";
import ikkaImage from "@/assets/artist-ikka-card.jpg";
import ragaImage from "@/assets/artist-raga-card.jpg";
import pantherImage from "@/assets/artist-panther-card.jpg";
import partnerLogo from "@/assets/partner-logo.png";
import { merchGrid } from "@/pages/Store";

type ArtistCardProps = {
  image: string;
  name: string;
  subtitle: string;
  label?: string;
  link: string;
};

type MerchCardProps = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

const MerchCard: React.FC<MerchCardProps> = ({ image, title, description, href = "/store" }) => {
  return (
    <a href={href} className="group block rounded-2xl overflow-hidden bg-black shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute left-6 bottom-6 z-10">
          <h3 className="text-2xl font-extrabold uppercase tracking-wider text-white">{title}</h3>
          <p className="mt-1 text-sm text-red-500 font-bold">Shop now</p>
        </div>
      </div>

      <div className="px-6 py-6 bg-black">
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </a>
  );
};

const Index2: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const artists: ArtistCardProps[] = [
    {
      image: ikkaImage,
      name: "IKKA",
      subtitle: "The story-teller",
      label: "NEW COLLECTION",
      link: "/ikka",
    },
    {
      image: ragaImage,
      name: "RAGA",
      subtitle: "The rager",
      link: "/raga",
    },
    {
      image: pantherImage,
      name: "PANTHER",
      subtitle: "Galat karam kare",
      link: "/panther",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero — centered image with text placed left-of-center */}
        <section className="relative isolate min-h-[110vh] lg:min-h-[120vh] overflow-hidden pt-28 lg:pt-28">
          {/* Centered full-bleed image */}
          <div className="absolute inset-0 h-full w-full">
            <img
              src={heroImage}
              alt="IKKA hero"
              className="h-full w-full object-cover object-center transition-transform duration-700 will-change-transform"
            />
          </div>

          {/* Content overlay: text block positioned left-of-center */}
          <div className="relative z-10 min-h-[110vh] lg:min-h-[120vh] pt-28 lg:pt-40">
            <div className="container mx-auto px-6 lg:px-12 relative h-full">
              <div className="absolute left-6 lg:left-20 top-1/2 lg:top-[58%] -translate-y-1/2 max-w-3xl">
                <motion.h1
                  initial={{ y: 48, opacity: 0 }}
                  animate={heroLoaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="font-black tracking-tight text-white leading-[0.85] -mb-2 text-[10rem] sm:text-[9rem] md:text-[14rem] lg:text-[16rem]"
                  style={{ lineHeight: 0.9 }}
                >
                  IKKA
                </motion.h1>

                <p
                  className={`mt-4 text-2xl lg:text-3xl font-semibold text-red-500 uppercase tracking-widest transition-all duration-700 ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  IKKA DROP 01 COMING SOON
                </p>

                <div
                  className={`mt-8 ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  } transition-all duration-700`}
                >
                  <Button
                    size="lg"
                    aria-label="Check out"
                    className="cta-diagonal hover:text-black hover:bg-red-600 text-white rounded-md px-10 py-10 font-extrabold uppercase tracking-wider shadow-[0_10px_30px_rgba(220,38,38,0.18)] transition-colors duration-200 text-3xl lg:text-3xl"
                  >
                    CHECK OUT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section: player spans full width; supporting text constrained */}
        <section className="w-full overflow-hidden bg-black">
          <div className="w-full">
            {/* Full-width player (spans 100% to sides) */}
            <div className="w-full overflow-hidden">
              <video
                className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
                src={"REPLACE_WITH_VIDEO_URL.mp4"}
                autoPlay
                muted
                loop
                controls
                playsInline
              />
            </div>

            {/* Supporting text constrained to container width */}
            <div className="container mx-auto px-4 py-6">
              <p className="text-center text-sm text-white/70">
                Watch on <a href="REPLACE_WITH_VIDEO_URL.mp4" target="_blank" rel="noreferrer" className="text-red-500 underline">Direct Link</a>
              </p>
            </div>
          </div>
        </section>

        

        {/* Merch Store (revamped cards) */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-black text-center mb-6 text-white">Merchandise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <MerchCard
                  key={index}
                  image={artist.image}
                  title={artist.name}
                  description={artist.subtitle || "Exclusive merch drop — limited quantities available."}
                  href="/store"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img src={partnerLogo} alt="Partner with us" className="w-full rounded-lg" />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Partner With Us</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join us today and embark on an exciting journey towards success and innovation. By partnering with us, you gain access to unparalleled resources and expertise that can elevate your business. Together, we can forge a collaborative pathway to achieving remarkable results in your industry.
                </p>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">PARTNER NOW</Button>
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
