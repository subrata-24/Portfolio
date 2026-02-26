import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Target,
  Award,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const stats = [
  {
    icon: Code2,
    value: "2500+",
    label: "Problems Cracked",
    sub: "Across all major platforms",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.15)",
    border: "rgba(34,211,238,0.2)",
  },
  {
    icon: Trophy,
    value: "3×",
    label: "ICPC Dhaka Regionalist",
    sub: "2023, 2024 & 2025",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.15)",
    border: "rgba(251,191,36,0.2)",
  },
  {
    icon: Target,
    value: "1516",
    label: "Codeforces Specialist",
    sub: "Max Rating",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.15)",
    border: "rgba(244,114,182,0.2)",
  },
  {
    icon: Award,
    value: "1812",
    label: "CodeChef 4★",
    sub: "Max Rating",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    border: "rgba(52,211,153,0.2)",
  },
  {
    icon: TrendingUp,
    value: "1710",
    label: "LeetCode Max",
    sub: "Highest Rating",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.15)",
    border: "rgba(251,146,60,0.2)",
  },
  {
    icon: Zap,
    value: "150+",
    label: "Students Mentored",
    sub: "17th → 13th rank improvement",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.2)",
  },
];

const contestHighlights = [
  {
    rank: "12th",
    event: "Uttara IUPC 2025",
    team: "PSTU_Salsabil",
    accent: "#fbbf24",
    border: "rgba(251,191,36,0.2)",
  },
  {
    rank: "44th",
    event: "BUET IUPC 2026",
    team: "PSTU_Nilkomol",
    accent: "#34d399",
    border: "rgba(52,211,153,0.2)",
  },
  {
    rank: "44th",
    event: "CUET IUPC 2023",
    team: "PSTU_BinaryMindSet",
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.2)",
  },
  {
    rank: "Champion",
    event: "PSTU IUPC 2025",
    team: "Intra-university",
    accent: "#34d399",
    border: "rgba(52,211,153,0.2)",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const Algorithmic = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="algorithmic"
      className="relative py-24 bg-[#07070f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-violet-700/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <SectionTitle
            title="🎯 Algorithmic Excellence"
            subtitle="Competing nationally, mentoring hundreds, and building algorithmic foundations that power production-grade systems"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-[1.5px] mt-8 bg-gradient-to-r from-cyan-500 via-cyan-500/20 to-transparent origin-left"
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const isHov = hovered === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-2xl p-6 border bg-white/3 backdrop-blur-sm cursor-default overflow-hidden group"
                style={{
                  borderColor: isHov ? stat.border : "rgba(255,255,255,0.06)",
                  boxShadow: isHov ? `0 0 40px ${stat.glow}` : "none",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Icon row */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    animate={
                      isHov
                        ? { scale: 1.12, rotate: 6 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{
                      background: stat.glow,
                      borderColor: stat.border,
                    }}
                  >
                    <Icon size={20} style={{ color: stat.accent }} />
                  </motion.div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                    style={{
                      color: stat.accent,
                      background: stat.glow,
                      borderColor: stat.border,
                    }}
                  >
                    Verified
                  </span>
                </div>

                {/* Value */}
                <div
                  className="text-5xl font-black leading-none mb-2 tracking-tight"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </div>
                <p className="text-sm font-bold text-white mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500">{stat.sub}</p>

                {/* Bottom accent line */}
                <motion.div
                  animate={isHov ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] origin-left rounded-b-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${stat.accent}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Contest Highlights */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-7">
            <h3 className="text-2xl font-black tracking-tight text-white whitespace-nowrap">
              Notable Contest Rankings
            </h3>
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {contestHighlights.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0.35 + i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="relative rounded-2xl p-5 border bg-white/3 backdrop-blur-sm overflow-hidden group cursor-default"
                style={{ borderColor: c.border }}
              >
                <div
                  className="text-4xl font-black leading-none mb-2 tracking-tight"
                  style={{ color: c.accent }}
                >
                  {c.rank}
                </div>
                <p className="text-sm font-bold text-white mb-1">{c.event}</p>
                <p className="text-xs text-gray-500">{c.team}</p>
                {/* Subtle glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at 50% 100%, ${c.border} 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-wrap items-center justify-between gap-5 p-8 rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-600/5 pointer-events-none" />

          <div className="relative">
            <h3 className="text-2xl font-black text-white tracking-tight">
              See the Complete Journey
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/competitive-journey")}
            className="relative group flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-violet-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 overflow-hidden transition-shadow"
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">View My Journey</span>
            <ArrowRight
              size={16}
              className="relative group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Algorithmic;
