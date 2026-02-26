import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "subrata17@cse.pstu.ac.bd",
    href: "mailto:subrata17@cse.pstu.ac.bd",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.25)",
    label: "Send a mail",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/subrata-24",
    href: "https://github.com/subrata-24",
    accent: "#e2e8f0",
    glow: "rgba(226,232,240,0.08)",
    border: "rgba(226,232,240,0.2)",
    label: "View profile",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/subrata-biswas",
    href: "https://linkedin.com/in/subrata-biswas-9a0469296/",
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.25)",
    label: "Connect",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Patuakhali, Bangladesh",
    href: "#",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
    label: "Based here",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 bg-[#07070f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-700/5 rounded-full blur-[80px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle title="💬 Get In Touch" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            const isLink = method.href !== "#";

            return (
              <motion.a
                key={i}
                href={method.href}
                target={isLink ? "_blank" : undefined}
                rel={isLink ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col bg-white/3 border border-white/8 rounded-2xl p-5 sm:p-6 overflow-hidden cursor-pointer transition-colors duration-300"
                style={{ textDecoration: "none" }}
              >
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${method.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1.5px ${method.border}` }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl border mb-4 flex-shrink-0"
                    style={{
                      background: method.glow,
                      borderColor: method.border,
                    }}
                  >
                    <Icon size={20} style={{ color: method.accent }} />
                  </motion.div>

                  {/* Title */}
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 mb-1">
                    {method.title}
                  </p>

                  {/* Value */}
                  <p className="text-sm font-bold text-white mb-4 leading-snug break-all">
                    {method.value}
                  </p>

                  {/* Connect row */}
                  <div className="mt-auto flex items-center gap-1.5">
                    <span
                      className="text-xs font-bold transition-colors duration-200"
                      style={{ color: method.accent }}
                    >
                      {method.label}
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      style={{ color: method.accent }}
                    />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${method.accent}, transparent)`,
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
