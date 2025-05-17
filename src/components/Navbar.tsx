import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center">
              <span className="text-white font-bold">SF</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              StreamFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/browse" className="text-white/80 hover:text-white transition-colors">
              Browse
            </Link>
            <Link to="/categories" className="text-white/80 hover:text-white transition-colors">
              Categories
            </Link>
            <Link to="/live" className="text-white/80 hover:text-white transition-colors">
              Live
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative max-w-xs w-full mx-4">
            <Input 
              type="text" 
              placeholder="Search videos..." 
              className="bg-white/5 border-white/10 text-white/80 pl-10 focus-visible:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search videos..." 
                className="bg-white/5 border-white/10 text-white/80 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white/80 hover:text-white transition-colors py-2">
                Home
              </Link>
              <Link to="/browse" className="text-white/80 hover:text-white transition-colors py-2">
                Browse
              </Link>
              <Link to="/categories" className="text-white/80 hover:text-white transition-colors py-2">
                Categories
              </Link>
              <Link to="/live" className="text-white/80 hover:text-white transition-colors py-2">
                Live
              </Link>
              <Button className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white w-full mt-2">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}