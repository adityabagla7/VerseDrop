import { Button } from "./ui/button";
import partnerLogo from "@/assets/partner-logo.png";

const PartnerSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={partnerLogo}
              alt="Partner with us"
              className="w-full rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Partner With Us
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join us today and embark on an exciting journey towards success and innovation. 
              By partnering with us, you gain access to unparalleled resources and expertise 
              that can elevate your business. Together, we can forge a collaborative pathway 
              to achieving remarkable results in your industry.
            </p>
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
            >
              PARTNER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
