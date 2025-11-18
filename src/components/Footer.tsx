import { Instagram, Twitter, Linkedin, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Pinterest"
          >
            <Share2 className="w-6 h-6" />
          </a>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-primary-foreground/20 mb-8" />

        {/* Footer Links */}
        <nav className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
          <a href="/" className="hover:text-accent transition-colors">
            Home
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="/privacy-policy" className="hover:text-accent transition-colors">
            Privacy Policy
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="/terms" className="hover:text-accent transition-colors">
            Terms and Condition
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="/refund" className="hover:text-accent transition-colors">
            Refund & Returns Policy
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="/disclaimer" className="hover:text-accent transition-colors">
            Disclaimer
          </a>
          <span className="text-primary-foreground/50">|</span>
          <a href="/contact" className="hover:text-accent transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© Copyright 2025 Versedrop</p>
          <p className="text-primary-foreground/70 mt-2">Follow us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
