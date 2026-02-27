import Container from "../components/Container";
import { Users, BookOpen, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { motion, type Variants } from "framer-motion";

const Leadership = () => {
  const stats = [
    { icon: "👨‍🎓", value: "150+", label: "Students Mentored" },
    { icon: "📈", value: "17→13", label: "National Rank Boost" },
    { icon: "🎯", value: "10+", label: "Events Organized" },
    { icon: "🧩", value: "15+", label: "Problems Created" },
  ];

  const roles = [
    {
      icon: Users,
      title: "CP Trainer",
      org: "PSTU",
      period: "Nov 2022 – Dec 2025",
      accent: "#22d3ee",
      glow: "rgba(34,211,238,0.12)",
      border: "rgba(34,211,238,0.25)",
      gradientFrom: "#22d3ee",
      gradientTo: "#3b82f6",
      note: "Mentored 150+ students in DSA & CP. Improved national rank from 17th to 13th. Helped students secure ICPC regional spots.",
    },
    {
      icon: Award,
      title: "Vice President",
      org: "CSE Club, PSTU",
      period: "May 2025 – Dec 2025",
      accent: "#a78bfa",
      glow: "rgba(167,139,250,0.12)",
      border: "rgba(167,139,250,0.25)",
      gradientFrom: "#a78bfa",
      gradientTo: "#ec4899",
      note: "Organized PSTU IUPC 2024 (South Zone). Led contests, hackathons, and technical workshops.",
    },
    {
      icon: BookOpen,
      title: "Problem Setter",
      org: "NHSPC",
      orgFull: "National High School Programming Contest",
      period: "2025",
      accent: "#fb923c",
      glow: "rgba(251,146,60,0.12)",
      border: "rgba(251,146,60,0.25)",
      gradientFrom: "#fb923c",
      gradientTo: "#ef4444",
      note: "Designed 15+ algorithmic problems with test cases and editorials for the National High School Programming Contest.",
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

  return (
    <section
      id="leadership"
      className="relative py-20 sm:py-24 md:py-28 bg-[#07070f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-700/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-700/5 rounded-full blur-[100px]" />
      </div>

      <Container>
        <SectionTitle
          title="🏅 Leadership & Experience"
          subtitle="Mentoring, organizing, and building a thriving competitive programming community."
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.1 + i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 280 }}
              className="group relative text-center p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-cyan-500/25 hover:bg-white/5 transition-colors duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-cyan-500/5 to-transparent rounded-2xl" />

              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp(0.2 + i * 0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="group relative p-6 rounded-2xl border bg-white/3 backdrop-blur-sm overflow-hidden cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    role.border;
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 40px ${role.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Subtle top gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${role.accent}60, transparent)`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex p-3 rounded-xl mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${role.gradientFrom}, ${role.gradientTo})`,
                    boxShadow: `0 8px 24px ${role.glow}`,
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>

                <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-white transition-colors">
                  {role.title}
                </h3>

                <div
                  className="text-sm font-bold mb-0.5 tracking-tight"
                  style={{ color: role.accent }}
                >
                  {role.orgFull ?? role.org}
                </div>

                <div className="text-xs text-gray-600 mb-4 font-medium">
                  {role.period}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {role.note}
                </p>

                {/* Corner number watermark */}
                <div
                  className="absolute bottom-4 right-5 text-6xl font-black leading-none select-none opacity-[0.04]"
                  style={{ color: role.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Leadership;
