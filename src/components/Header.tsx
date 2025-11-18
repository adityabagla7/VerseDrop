import { ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-top-banner text-primary-foreground text-center py-2 text-sm font-medium tracking-wide">
        EXCLUSIVE DHH MERCH COMING RIGHT YOUR WAY
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm">
              <a href="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#store" className="text-foreground hover:text-accent transition-colors">
                Store
              </a>
              <button className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors">
                <span>Artists</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl lg:text-3xl font-bold text-accent tracking-tight">
                VERSEDROP
              </h1>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-foreground hover:text-accent transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <Button 
                variant="default" 
                className="hidden lg:block bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              >
                Search Products
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-foreground hover:text-accent transition-colors">
                  Home
                </a>
                <a href="#store" className="text-foreground hover:text-accent transition-colors">
                  Store
                </a>
                <a href="#artists" className="text-foreground hover:text-accent transition-colors">
                  Artists
                </a>
                <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                  Contact Us
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
