import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Star } from "lucide-react";

const journey = [
  {
    phase: "2022",
    era: "Foundation",
    title: "Getting Started",
    emoji: "🚀",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.25)",
    achievements: [
      "Started competitive programming journey",
      "Solved first 100+ problems on Codeforces",
      "Participated in local contests",
      "Built strong DSA fundamentals",
    ],
  },
  {
    phase: "2023 – 2024",
    era: "Growth",
    title: "Rapid Progression",
    emoji: "📈",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
    achievements: [
      "Achieved 2× ICPC Finalist status",
      "Reached Codeforces Specialist rank",
      "Mentored first batch of students",
      "Competed in KUET IUPC 2024 and NCPC 2023",
    ],
  },
  {
    phase: "2025",
    era: "Excellence",
    title: "Peak Performance",
    emoji: "⭐",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.25)",
    achievements: [
      "3× ICPC Finalist achievement",
      "CodeChef 3★ rating reached",
      "Mentored 150+ students total",
      "Improved PSTU's rank from 17th to 13th nationally",
      "Became Problem Setter for NHSPC 2025",
      "Elected CSE Club Vice President",
    ],
  },
];

const summary = [
  {
    icon: "💡",
    accent: "#22d3ee",
    border: "rgba(34,211,238,0.2)",
    glow: "rgba(34,211,238,0.08)",
    text: "Solved 2500+ problems with a systematic approach, sharpening algorithmic thinking across Codeforces, LeetCode, and CodeChef.",
  },
  {
    icon: "🏆",
    accent: "#fbbf24",
    border: "rgba(251,191,36,0.2)",
    glow: "rgba(251,191,36,0.08)",
    text: "Achieved 3× ICPC Finalist status, representing PSTU at the national level against top universities.",
  },
  {
    icon: "📊",
    accent: "#34d399",
    border: "rgba(52,211,153,0.2)",
    glow: "rgba(52,211,153,0.08)",
    text: "Ranked consistently in major inter-university contests — Uttara IUPC, CUET IUPC, KUET IUPC, AUST IUPC.",
  },
  {
    icon: "👨‍🏫",
    accent: "#f472b6",
    border: "rgba(244,114,182,0.2)",
    glow: "rgba(244,114,182,0.08)",
    text: "Mentored 150+ students in competitive programming, improving PSTU's national standing from 17th to 13th.",
  },
  {
    icon: "📝",
    accent: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
    glow: "rgba(167,139,250,0.08)",
    text: "Served as Problem Setter for NHSPC 2025, designing algorithmic problems for a national-level competition.",
  },
  {
    icon: "⚡",
    accent: "#fb923c",
    border: "rgba(251,146,60,0.2)",
    glow: "rgba(251,146,60,0.08)",
    text: "Competitive programming expertise directly powers efficient, scalable production code with strong algorithmic foundations.",
  },
];

const CompetitiveJourney = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState(2);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const selected = journey[activePhase];

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  });

  return (
    <div className="min-h-screen bg-[#07070f] text-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          animate={{
            background: `radial-gradient(circle at 20% 30%, ${selected.glow.replace("0.12", "0.08")} 0%, transparent 60%)`,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-700/5 rounded-full blur-[100px]" />
      </div>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3.5 bg-[#07070f]/80 backdrop-blur-2xl border-b border-white/6 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
        <motion.button
          whileHover={{ scale: 1.04, x: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-gray-400 hover:text-white border border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/6 transition-all"
        >
          <ArrowLeft size={13} /> Back
        </motion.button>

        <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
          Competitive Journey
        </span>

        {/* Phase dots */}
        <div className="flex gap-1.5 items-center">
          {journey.map((j, i) => (
            <motion.div
              key={i}
              onClick={() => setActivePhase(i)}
              animate={{ width: i === activePhase ? 24 : 8 }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full cursor-pointer"
              style={{
                background:
                  i === activePhase ? j.accent : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 pb-24">
        {/* Page Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/25 bg-yellow-500/8 mb-6">
            <Star size={11} className="text-yellow-400" />
            <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.12em]">
              Learning Path
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.88] mb-5">
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              CP Journey
            </span>
          </h1>

          <p className="text-base text-gray-400 max-w-lg leading-relaxed">
            From solving my first problem in 2022 to competing nationally and
            mentoring hundreds — a story of consistent growth.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[1.5px] mt-8 bg-gradient-to-r from-cyan-500 via-cyan-500/20 to-transparent origin-left"
          />
        </motion.div>

        {/* Main Layout */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row gap-5 mb-20"
        >
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0 bg-white/3 border border-white/8 rounded-2xl p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-600 px-2 pb-3">
              Timeline
            </p>
            {journey.map((j, i) => {
              const isAct = i === activePhase;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl transition-all duration-250 mb-1"
                  style={{
                    background: isAct ? j.glow : "transparent",
                    border: `1.5px solid ${isAct ? j.border : "transparent"}`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 border transition-all"
                    style={{
                      background: isAct ? j.glow : "rgba(255,255,255,0.04)",
                      borderColor: isAct ? j.border : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {j.emoji}
                  </div>
                  <div>
                    <p
                      className="text-[9px] font-black uppercase tracking-[0.12em] mb-0.5"
                      style={{ color: isAct ? j.accent : "#4b5563" }}
                    >
                      {j.phase}
                    </p>
                    <p
                      className={`text-xs font-bold ${isAct ? "text-white" : "text-gray-500"}`}
                    >
                      {j.era}
                    </p>
                  </div>
                  {isAct && (
                    <motion.div
                      layoutId="activeDot"
                      className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: j.accent }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div className="flex-1 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Phase Header */}
                <div
                  className="rounded-2xl p-7 mb-4 border relative overflow-hidden"
                  style={{
                    background: selected.glow,
                    borderColor: selected.border,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{selected.emoji}</span>
                    <div>
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.14em] mb-1"
                        style={{ color: selected.accent }}
                      >
                        {selected.phase} · {selected.era}
                      </p>
                      <h2 className="text-4xl font-black text-white leading-none tracking-tight">
                        {selected.title}
                      </h2>
                    </div>
                    <div
                      className="ml-auto text-8xl font-black leading-none select-none"
                      style={{ color: `${selected.accent}18` }}
                    >
                      {String(activePhase + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div
                    className="h-[1.5px]"
                    style={{
                      background: `linear-gradient(90deg, ${selected.accent}80, transparent)`,
                    }}
                  />
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selected.achievements.map((ach, i) => (
                    <motion.div
                      key={ach}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.35 }}
                      className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/3 hover:bg-white/5 hover:border-white/12 hover:translate-x-1 transition-all duration-200 group"
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: selected.accent }}
                      />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-snug">
                        {ach}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-7">
            <h3 className="text-2xl font-black text-white tracking-tight whitespace-nowrap">
              What This Means
            </h3>
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {summary.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp(0.45 + i * 0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="flex gap-4 items-start p-5 rounded-2xl border transition-all duration-300 cursor-default"
                style={{
                  background: s.glow,
                  borderColor: s.border,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border bg-[#07070f]/60"
                  style={{ borderColor: s.border }}
                >
                  {s.icon}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitiveJourney;
