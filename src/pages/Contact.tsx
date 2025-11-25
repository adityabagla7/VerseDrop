import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail } from "lucide-react";
import contactHeroImage from "@/assets/contact-hero.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactHeroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
                CONTACT US
              </h1>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20">
          {/* Introduction Text */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              <strong className="text-foreground">Feel free to contact us with any questions or concerns.</strong> You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Get in touch</h2>
                <p className="text-muted-foreground text-lg">Your questions are always welcome!</p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Phone</p>
                      <a href="tel:+919466666213" className="text-muted-foreground hover:text-accent transition-colors text-base">
                        +91 9466666213
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Email</p>
                      <a href="mailto:contact@versedrop.in" className="text-muted-foreground hover:text-accent transition-colors block mb-1 text-base">
                        contact@versedrop.in
                      </a>
                      <a href="mailto:support@versedrop.in" className="text-muted-foreground hover:text-accent transition-colors block text-base">
                        support@versedrop.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 bg-card border border-border rounded-lg shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">
                      Name<span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 h-12 text-base"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-base font-semibold">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-2 h-12 text-base"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email<span className="text-destructive ml-1">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 h-12 text-base"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">
                      Message<span className="text-destructive ml-1">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[140px] text-base"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold rounded-md shadow-md hover:shadow-lg transition-all"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column - About Us */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Us</h2>
                <div className="w-16 h-1 bg-accent mb-6"></div>
              </div>
              
              <div className="p-8 bg-card border border-border rounded-lg shadow-sm">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-base">
                    Hip hop is more than music. It is culture, voice, and community. VerseDrop was created to keep that culture alive by bringing artists and fans closer through authentic and official merchandise.
                  </p>
                  <p className="text-base">
                    We work directly with Indian hip hop artists to design drops that carry their vision and their story. Every piece is artist approved, carefully crafted, and made for fans who want to wear their pride and represent the movement.
                  </p>
                  <p className="text-base">
                    For artists, VerseDrop means true ownership and freedom. They decide how their creativity is represented and share in the value their work creates. For fans, VerseDrop is a way to connect with the culture beyond the music and stand side by side with the artists they believe in.
                  </p>
                  <p className="font-bold text-lg text-foreground pt-4 border-t border-border">
                    This is not just merch. This is hip hop, dropped.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                    <span className="w-1 h-8 bg-accent mr-3"></span>
                    Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Our mission is to build a strong bond between artists and fans through authentic, high quality merchandise. We are dedicated to empowering artists with creative control and fair royalties, while giving fans access to pieces that represent the culture they love.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center">
                    <span className="w-1 h-8 bg-accent mr-3"></span>
                    Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Our vision is to make VerseDrop the home of Indian hip hop culture. We aim to create a global platform where artists own their voice, fans discover real and official drops, and the culture continues to grow, inspire, and thrive.
                  </p>
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

