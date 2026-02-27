import { motion, type Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Heart,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/subrata-24",
    label: "GitHub",
    accent: "#e2e8f0",
    border: "rgba(226,232,240,0.2)",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/subrata-biswas-9a0469296/",
    label: "LinkedIn",
    accent: "#60a5fa",
    border: "rgba(96,165,250,0.25)",
  },
  {
    icon: Mail,
    href: "mailto:subrata17@cse.pstu.ac.bd",
    label: "Email",
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.25)",
  },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const platforms = [
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/TheAnt",
    dot: "#22d3ee",
    rating: "Specialist (1516)",
  },
  {
    label: "CodeChef",
    href: "https://www.codechef.com/users/beginner32",
    dot: "#fbbf24",
    rating: "4★ (1812)",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/BreakingBoundaries",
    dot: "#fb923c",
    rating: "Max 1710",
  },
];

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  },
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07070f] text-gray-400 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-700/4 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-md" />
                <div className="relative bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-xl shadow-lg shadow-cyan-500/25">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Subrata Biswas
                </h3>
                <p className="text-xs text-cyan-400/80">
                  🚀 Software Engineer & ICPC Regionalist
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
              I'm passionate about building scalable systems, solving complex
              problems, and sharing knowledge. When I'm not coding, I'm
              mentoring aspiring developers.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(
                ({ icon: Icon, href, label, accent, border }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl border border-white/8 bg-white/3 transition-all duration-200"
                    style={{ color: "#6b7280" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = accent;
                      (e.currentTarget as HTMLElement).style.borderColor =
                        border;
                      (e.currentTarget as HTMLElement).style.background =
                        border.replace("0.25", "0.08");
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6b7280";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.03)";
                    }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">
              📄 Explore
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="group text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CP Profiles */}
          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">
              🏆 CP Profiles
            </h4>
            <ul className="space-y-2.5">
              {platforms.map((p) => (
                <li key={p.label}>
                  <motion.a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="group text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <ExternalLink
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                    {p.label}
                  </motion.a>
                </li>
              ))}
              <li className="pt-3 space-y-2">
                {platforms.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: p.dot }}
                    />
                    <span>
                      {p.label}: {p.rating}
                    </span>
                  </div>
                ))}
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-gray-600 text-center">
            <span className="text-gray-500">
              © {currentYear} Subrata Biswas
            </span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="flex items-center gap-1.5">
              Built with
              <Heart
                size={12}
                className="text-red-500 fill-red-500 animate-pulse"
              />
              using React & Tailwind
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-gray-500">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Updated: Feb 2026
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />
    </footer>
  );
};

export default Footer;
