import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/service', label: 'Process' },
    { path: '/knowledge', label: 'Knowledge' },
    { path: '/pricing', label: 'Pricing' },
  ];

  // Text color logic:
  // If scrolled -> Dark text (bg is white)
  // If NOT scrolled AND on Home -> White text (bg is hero image)
  // If NOT scrolled AND NOT on Home -> Dark text (bg is default white/light)
  const getTextColorClass = () => {
    if (scrolled) return 'text-strategic-dark';
    if (isHome) return 'text-white';
    return 'text-strategic-dark';
  };

  const getHoverColorClass = () => {
    if (scrolled) return 'hover:text-strategic-primary';
    if (isHome) return 'hover:text-gray-300';
    return 'hover:text-strategic-primary';
  };

  const getActiveColorClass = () => {
    if (scrolled) return 'text-strategic-primary';
    if (isHome) return 'text-white border-b-2 border-white';
    return 'text-strategic-primary';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`p-2.5 rounded transition-colors duration-300 ${scrolled ? 'bg-strategic-dark text-white' : (isHome ? 'bg-white text-strategic-dark' : 'bg-strategic-dark text-white')}`}>
                 <Rocket className="h-5 w-5" />
              </div>
              <span className={`font-heading font-extrabold text-2xl tracking-tighter ${getTextColorClass()}`}>
                VALIDEUM
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-colors uppercase tracking-widest ${
                    isActive(link.path) ? getActiveColorClass() : `${getTextColorClass()} ${getHoverColorClass()}`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/pricing"
                className={`border-2 px-7 py-2.5 rounded-none font-bold transition-all text-xs uppercase tracking-widest ${
                    scrolled 
                    ? 'bg-strategic-dark text-white border-strategic-dark hover:bg-transparent hover:text-strategic-dark' 
                    : (isHome 
                        ? 'bg-white text-strategic-dark border-white hover:bg-transparent hover:text-white'
                        : 'bg-strategic-dark text-white border-strategic-dark hover:bg-transparent hover:text-strategic-dark'
                      )
                }`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${getTextColorClass()} focus:outline-none`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100">
            <div className="px-6 pt-4 pb-8 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-none border-l-2 text-base font-bold ${
                    isActive(link.path) ? 'border-strategic-primary text-strategic-primary bg-gray-50' : 'border-transparent text-strategic-dark hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-strategic-dark text-gray-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="h-6 w-6 text-white" />
                <span className="font-heading font-bold text-2xl text-white tracking-tighter">VALIDEUM</span>
              </div>
              <p className="text-sm leading-relaxed">
                Real market validation using actual ad networks and landing pages. Stop guessing, start measuring.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/service" className="hover:text-white transition-colors">How it Works</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/knowledge" className="hover:text-white transition-colors">Knowledge Base</Link></li>
                <li><Link to="/knowledge" className="hover:text-white transition-colors">Validation Guide</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span></li>
                <li><span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span></li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-xs">
            &copy; {new Date().getFullYear()} Valideum Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;