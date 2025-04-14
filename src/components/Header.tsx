import { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Logo from '../../public/images/Logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl uppercase">
            <img src={Logo} alt="Logo" style={{width:"100px"}} />
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/mt5" className="text-foreground hover:text-primary font-medium">
            Trade with MT5
          </Link>
          <Link to="/calculator" className="text-foreground hover:text-primary font-medium">
            Profit Calculator
          </Link>
          <Link to="/transparency" className="text-foreground hover:text-primary font-medium">
            Transparency
          </Link>
          <Link to="/support" className="text-foreground hover:text-primary font-medium">
            Support
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-foreground border-muted"
            >
              <LogIn size={18} />
              Log In
            </Button>
          </Link>

          <Link to="/signup">
            <Button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <UserPlus size={18} />
              Sign Up
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="bg-[#25D366] text-white hover:bg-[#25D366]/80 rounded-full p-2 h-10 w-10"
            onClick={() => console.log('WhatsApp clicked')}
          >
            <MessageCircle size={20} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card shadow-lg py-4 px-6 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-primary font-medium py-2">
              Home
            </Link>
            <Link to="/mt5" className="text-foreground hover:text-primary font-medium py-2">
              Trade with MT5
            </Link>
            <Link to="/calculator" className="text-foreground hover:text-primary font-medium py-2">
              Profit Calculator
            </Link>
            <Link to="/transparency" className="text-foreground hover:text-primary font-medium py-2">
              Transparency
            </Link>
            <Link to="/support" className="text-foreground hover:text-primary font-medium py-2">
              Support
            </Link>

            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 text-foreground border-muted w-full"
                >
                  <LogIn size={18} />
                  Log In
                </Button>
              </Link>

              <Link to="/signup">
                <Button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <UserPlus size={18} />
                  Sign Up
                </Button>
              </Link>

              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#25D366]/80 w-full"
                onClick={() => console.log('WhatsApp clicked')}
              >
                <MessageCircle size={18} />
                WhatsApp Signup
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
