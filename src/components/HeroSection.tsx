import { Button } from "./ui/button";
import heroImage from "@/assets/hero-ikka.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight">
          IKKA
        </h2>
        <p className="text-white text-lg lg:text-xl mb-8 font-medium tracking-wide">
          IKKA DROP 01 COMING SOON
        </p>
        <Button 
          size="lg"
          className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold"
        >
          CHECK NOW
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
