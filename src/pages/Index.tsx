import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import MerchStore from "@/components/MerchStore";
import PartnerSection from "@/components/PartnerSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImageGallery />
        <MerchStore />
        <PartnerSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
