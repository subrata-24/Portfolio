import { Github, Linkedin, Mail, Code2, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/subrata-24",
      label: "GitHub",
      color: "hover:text-gray-200"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/subrata-biswas-9a0469296/",
      label: "LinkedIn",
      color: "hover:text-blue-300"
    },
    {
      icon: Mail,
      href: "mailto:subrata17@cse.pstu.ac.bd",
      label: "Email",
      color: "hover:text-cyan-300"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" }
  ];

  const platforms = [
    { label: "Codeforces", href: "https://codeforces.com/profile/TheAnt" },
    { label: "CodeChef", href: "https://www.codechef.com/users/beginner32" },
    { label: "LeetCode", href: "https://leetcode.com/BreakingBoundaries" }
  ];

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg sm:rounded-xl blur-sm"></div>
                <Code2 className="relative w-8 sm:w-10 h-8 sm:h-10 text-white bg-linear-to-r from-blue-600 to-cyan-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Subrata Biswas</h3>
                <p className="text-xs sm:text-sm text-blue-400">🚀 Software Engineer & ICPC Regionalist</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md">
              I'm passionate about building scalable systems, solving complex problems, and sharing knowledge. When I'm not coding, I'm mentoring aspiring developers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2 sm:p-3 bg-gray-800 rounded-lg sm:rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:scale-110 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">📄 Explore</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitive Programming */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">🏆 CP Profiles</h4>
            <ul className="space-y-2 sm:space-y-3">
              {platforms.map((platform) => (
                <li key={platform.label}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{platform.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 sm:pt-3">
                <div className="text-xs text-gray-500 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span>Codeforces: Specialist (1495)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>CodeChef: 3★ (1784)</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { label: "Problems Solved", value: "2500+" },
              { label: "ICPC Regional", value: "3×" },
              { label: "Students Mentored", value: "150+" },
              { label: "Projects Built", value: "10+" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-lg sm:text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            <span>© {currentYear} Subrata Biswas</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <span>Built with</span>
              <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-red-500 fill-current animate-pulse" />
              <span>using React & Tailwind</span>
            </span>
          </div>

          {/* Tech Badge */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-800 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Updated: Feb 2026</span>
            </div>
          </div>

        </div>

        {/* Decorative Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600"></div>

      </div>
    </footer>
  );
};

export default Footer;