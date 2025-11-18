import heroImage from "@/assets/hero-ikka.jpg";

const ImageGallery = () => {
  const images = [heroImage, heroImage, heroImage, heroImage];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index}
              className="aspect-video rounded-lg overflow-hidden"
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
