import { Instagram, Twitter, Youtube, Music2 } from "lucide-react";

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
            href="https://open.spotify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition-colors"
            aria-label="Spotify"
          >
            <SpotifyIcon className="w-10 h-10" />
          </a>
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
            href="https://soundcloud.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:text-white transition-colors"
            aria-label="SoundCloud"
          >
            <Music2 className="w-10 h-10" strokeWidth={2.5} />
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
            aria-label="X (Twitter)"
          >
            <Twitter className="w-10 h-10" strokeWidth={2.5} />
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
            Refund & Returns Policy
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
          <p className="text-red-600/80 mt-3">Follow us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
