import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#achievements", label: "Achievements", id: "achievements" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/40 shadow-md shadow-gray-400/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:blur-lg group-hover:opacity-100 transition-all"></div>
              <Code2 className="relative w-7 sm:w-8 h-7 sm:h-8 text-white bg-linear-to-r from-blue-600 to-cyan-600 p-1.5 rounded-lg" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hidden sm:inline">
              Subrata
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 bg-linear-to-r from-blue-600 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Right - Resume Button & Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/resume.pdf"
              className="relative group overflow-hidden bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-5 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium text-xs sm:text-sm lg:text-sm transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:scale-105"
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-200/50 transition-colors text-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/50 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-gray-200 my-2"></div>

              <a
                href="/resume.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-medium text-center text-sm hover:shadow-lg hover:shadow-blue-600/30 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
