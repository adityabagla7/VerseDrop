import { ShoppingCart, Menu, ChevronDown, Search, LogIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-top-banner text-primary-foreground text-center py-2 text-sm font-medium tracking-wide">
        EXCLUSIVE DHH MERCH COMING RIGHT YOUR WAY
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-gray-300 border-b border-black/10">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-10 text-xl font-bold text-black tracking-wide uppercase">
              <Link
                to="/"
                className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
              >
                Home
              </Link>
              <Link
                to="/store"
                className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
              >
                Store
              </Link>
              <button className="flex items-center space-x-2 transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4">
                <span className="uppercase">Artists</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              <a
                href="#contact"
                className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="block">
                <h1 className="text-3xl lg:text-5xl font-black text-orange-500 tracking-tight">
                  VERSEDROP
                </h1>
              </a>
            </div>


            {/* Right Actions */}
            <div className="flex items-center space-x-6 text-black">
              <button className="transition hover:text-[#ff1e1e]">
                <Search className="w-8 h-8" aria-label="Search" />
              </button>
              <button className="transition hover:text-[#ff1e1e]">
                <LogIn className="w-8 h-8" aria-label="Login" />
              </button>
              <button className="transition hover:text-[#ff1e1e]">
                <ShoppingCart className="w-8 h-8" aria-label="Cart" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-black/10">
              <div className="flex flex-col space-y-4 text-lg font-semibold text-black">
                <Link
                  to="/"
                  className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
                >
                  Home
                </Link>
                <Link
                  to="/store"
                  className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
                >
                  Store
                </Link>
                <a
                  href="#artists"
                  className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
                >
                  Artists
                </a>
                <a
                  href="#contact"
                  className="transition hover:text-[#ff1e1e] hover:underline decoration-2 underline-offset-4"
                >
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
