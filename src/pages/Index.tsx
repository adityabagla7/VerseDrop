import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ikka.jpg";
import ikkaImage from "@/assets/artist-ikka-card.jpg";
import ragaImage from "@/assets/artist-raga-card.jpg";
import pantherImage from "@/assets/artist-panther-card.jpg";
import partnerLogo from "@/assets/partner-logo.png";

const ArtistCard = ({ image, name, subtitle, label, link }: {
  image: string;
  name: string;
  subtitle: string;
  label?: string;
  link: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        {label && (
          <p className="text-white/90 text-sm font-semibold mb-1 tracking-wide">{label}</p>
        )}
        <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">{name}</h3>
        <p className="text-white/80 text-sm mb-4">{subtitle}</p>
        <Button
          variant="outline"
          className="w-full bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm"
        >
          See more
        </Button>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const images = [heroImage, heroImage, heroImage, heroImage];

  const artists = [
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
        {/* Hero — big off-center-left image with overlay text */}
        <section className="relative isolate min-h-[110vh] lg:min-h-[120vh] overflow-hidden">
          {/* Large image positioned off-center left */}
          <div className="absolute top-0 left-0 h-full w-[70%] lg:w-[65%] -translate-x-6 lg:-translate-x-12">
            <img
              src={heroImage}
              alt="IKKA hero"
              className="h-full w-full object-cover object-left transition-transform duration-700 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          {/* Decorative red accent on the right */}
          <div className="absolute inset-y-0 right-0 w-1/12 bg-red-600/40 blur-lg opacity-60" />

          {/* Content overlay positioned above image, slightly right so text sits on image */}
          <div className="relative z-10 flex min-h-[110vh] lg:min-h-[120vh] items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl pl-4 lg:pl-12">
                <h1
                  className={`font-black tracking-tight text-white leading-[0.85] -mb-2 text-[9rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] transition-transform duration-700 ${
                    heroLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ lineHeight: 0.9 }}
                >
                  IKKA
                </h1>

                <p className={`mt-4 text-xl lg:text-2xl font-semibold text-red-500 uppercase tracking-widest transition-all duration-700 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  IKKA DROP 01 COMING SOON
                </p>

                <div className={`mt-8 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700`}> 
                  <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 rounded-full px-8 py-4 font-bold">
                    CHECK NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden">
                  <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Merch Store */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">Explore our Merch Store</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist, index) => (
                <ArtistCard key={index} {...artist} />
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

        {/* Video Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-border mb-12" />

            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground">Check out crazy tracks</h2>

            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">IKKA: Interview</h3>
                    <p className="text-sm text-white/70">Video Player</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-foreground">IKKA: Interview</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Fab Entertainment presents the official video of the song "Interview", based on Ikka's real life story.</p>
                <p className="text-muted-foreground text-xs mt-4 leading-relaxed">Song : Interview | Artist : Ikka | Lyrics : Ikka | Composition: Ikka | Producer : Arun Tanwar | Music By : JSL | Directed By : Inflict | D.O.P : Vishal Anand | Label : Fab Entertainment | Production : Purple Sparks Media | Online Promotion: ST Network</p>
              </div>
            </div>

            <div className="w-full h-px bg-border mt-12" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
