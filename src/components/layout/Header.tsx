import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <BookOpen size={32} className="text-primary mr-2" />
          <span className="text-2xl font-display font-bold text-accent">BaliLore</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/stories" active={location.pathname === '/stories'} onClick={closeMenu}>
            Stories
          </NavLink>
          <NavLink to="/submit" active={location.pathname === '/submit'} onClick={closeMenu}>
            Submit
          </NavLink>
          <NavLink to="/about" active={location.pathname === '/about'} onClick={closeMenu}>
            About
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/stories" active={location.pathname === '/stories'} onClick={closeMenu}>
              Stories
            </NavLink>
            <NavLink to="/submit" active={location.pathname === '/submit'} onClick={closeMenu}>
              Submit
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about'} onClick={closeMenu}>
              About
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, onClick, children }) => {
  return (
    <Link
      to={to}
      className={`font-body text-lg transition-all duration-300 hover:text-primary ${
        active ? 'text-primary font-medium' : 'text-accent'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;