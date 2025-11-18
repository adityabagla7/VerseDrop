import ArtistCard from "./ArtistCard";
import ikkaImage from "@/assets/artist-ikka-card.jpg";
import ragaImage from "@/assets/artist-raga-card.jpg";
import pantherImage from "@/assets/artist-panther-card.jpg";

const MerchStore = () => {
  const artists = [
    {
      image: ikkaImage,
      name: "IKKA",
      subtitle: "The story-teller",
      label: "NEW COLLECTION",
      link: "/ikka"
    },
    {
      image: ragaImage,
      name: "RAGA",
      subtitle: "The rager",
      link: "/raga"
    },
    {
      image: pantherImage,
      name: "PANTHER",
      subtitle: "Galat karam kare",
      link: "/panther"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
          Explore our Merch Store
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={index} {...artist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchStore;
