
import { Instagram, Twitter, Youtube, Music2 } from "lucide-react";


// Pinterest logo SVG
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.084 2.438 7.548 6.188 7.548 2.547 0 3.57-1.44 3.57-3.158 0-.772-.197-1.963-.509-2.51-.134-.23-.342-.59-.523-.755-.162-.147-.393-.482-.01-.492.364-.009.623.336.797.594.414.62.814 1.613.814 2.34 0 1.37-1.04 2.49-2.91 2.49-2.37 0-3.86-2.06-3.86-4.82 0-3.98 3.24-7.79 8.12-7.79 4.42 0 6.85 2.7 6.85 6.3 0 4.23-2.1 7.39-5.01 7.39-1.04 0-2.02-.56-2.36-1.19l-.64 2.44c-.19.74-.56 1.67-.83 2.24.62.18 1.28.28 1.97.28 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-red-600 py-16">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-10 h-10" strokeWidth={2.5} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" strokeWidth={2.5} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-10 h-10" strokeWidth={2.5} />
          </a>
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition-colors"
            aria-label="Pinterest"
          >
            <PinterestIcon className="w-10 h-10" />
          </a>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-red-600/30 mb-10" />

        {/* Footer Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-10 text-lg font-bold">
          <a href="/" className="text-red-600 hover:text-white transition-colors">
            Home
          </a>
          <span className="text-red-600/50">|</span>
          <a href="/privacy-policy" className="text-red-600 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-red-600/50">|</span>
          <a href="/terms" className="text-red-600 hover:text-white transition-colors">
            Terms and Condition
          </a>
          <span className="text-red-600/50">|</span>
          <a href="/refund" className="text-red-600 hover:text-white transition-colors">
            Refunds & Returns Policy
          </a>
          <span className="text-red-600/50">|</span>
          <a href="/disclaimer" className="text-red-600 hover:text-white transition-colors">
            Disclaimer
          </a>
          <span className="text-red-600/50">|</span>
          <a href="/contact" className="text-red-600 hover:text-white transition-colors">
            Contact Us
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center text-lg font-bold">
          <p className="text-red-600">© Copyright 2025 Versedrop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
