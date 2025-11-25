import { ShoppingCart, Menu, ChevronDown, LogIn, LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
              <Link to="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <a href="#store" className="text-foreground hover:text-accent transition-colors">
                Store
              </a>
              <button className="flex items-center space-x-1 text-foreground hover:text-accent transition-colors">
                <span>Artists</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link to="/contact-us" className="text-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
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
              
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="hidden lg:flex items-center space-x-2 hover:opacity-80 transition-opacity">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || "User"} />
                        <AvatarFallback>
                          {currentUser.displayName?.charAt(0).toUpperCase() || currentUser.email?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{currentUser.displayName || "User"}</p>
                        <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    className="hidden lg:flex items-center space-x-2 border-2 hover:bg-accent/5"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              )}
              
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
                <Link to="/" className="text-foreground hover:text-accent transition-colors">
                  Home
                </Link>
                <a href="#store" className="text-foreground hover:text-accent transition-colors">
                  Store
                </a>
                <a href="#artists" className="text-foreground hover:text-accent transition-colors">
                  Artists
                </a>
                <Link to="/contact-us" className="text-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
                {currentUser ? (
                  <div className="flex flex-col space-y-2 mt-2">
                    <div className="flex items-center space-x-2 px-2 py-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || "User"} />
                        <AvatarFallback>
                          {currentUser.displayName?.charAt(0).toUpperCase() || currentUser.email?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium">{currentUser.displayName || "User"}</p>
                        <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center space-x-2 border-2 hover:bg-accent/5"
                      onClick={handleLogout}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center space-x-2 border-2 hover:bg-accent/5 mt-2"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
