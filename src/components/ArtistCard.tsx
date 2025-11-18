import { Button } from "./ui/button";

interface ArtistCardProps {
  image: string;
  name: string;
  subtitle: string;
  label?: string;
  link: string;
}

const ArtistCard = ({ image, name, subtitle, label, link }: ArtistCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        {label && (
          <p className="text-white/90 text-sm font-semibold mb-1 tracking-wide">
            {label}
          </p>
        )}
        <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
          {name}
        </h3>
        <p className="text-white/80 text-sm mb-4">
          {subtitle}
        </p>
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

export default ArtistCard;
