import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Database,
  Layers,
  Wrench,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const skillCategories = [
  {
    category: "Languages & Core",
    icon: Code,
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.12)",
    border: "rgba(56,189,248,0.25)",
    skills: [
      { name: "C / C++", tag: "Systems" },
      { name: "JavaScript", tag: "Scripting" },
      { name: "Python", tag: "Multi-purpose" },
      { name: "TypeScript", tag: "Typed JS" },
    ],
  },
  {
    category: "Frontend Dev",
    icon: Layers,
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.25)",
    skills: [
      { name: "React", tag: "UI Library" },
      { name: "Redux", tag: "State Mgmt" },
      { name: "Zustand", tag: "State Mgmt" },
      { name: "Tanstack Query", tag: "Data Fetching" },
      { name: "React Router DOM", tag: "Routing" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Framer Motion", tag: "Animation" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
    skills: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "Framework" },
      { name: "Socket.IO", tag: "Real-time" },
      { name: "REST APIs", tag: "Protocol" },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.25)",
    skills: [
      { name: "MongoDB", tag: "NoSQL" },
      { name: "MySQL", tag: "Relational" },
      { name: "Oracle", tag: "Enterprise" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    accent: "#facc15",
    glow: "rgba(250,204,21,0.12)",
    border: "rgba(250,204,21,0.25)",
    skills: [
      { name: "Git & GitHub", tag: "VCS" },
      { name: "Postman", tag: "API Testing" },
      { name: "Figma", tag: "Design" },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: BookOpen,
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
    skills: [
      { name: "Data Structures", tag: "Core" },
      { name: "Algorithms", tag: "Problem Solving" },
      { name: "OOP", tag: "Design Pattern" },
      { name: "System Design", tag: "Architecture" },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStart = useRef(0);
  const total = skillCategories.length;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setActive(idx);
      setTimeout(() => setAnimating(false), 420);
    },
    [animating],
  );

  const prev = useCallback(
    () => goTo((active - 1 + total) % total),
    [active, total, goTo],
  );
  const next = useCallback(
    () => goTo((active + 1) % total),
    [active, total, goTo],
  );

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [prev, next]);

  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isVisible, next]);

  const C = skillCategories[active];
  const Icon = C.icon;

  const NavBtn = ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors"
    >
      {children}
    </motion.button>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-[#07070f] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          animate={{
            background: `radial-gradient(circle at 15% 50%, ${C.glow} 0%, transparent 55%)`,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-700/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Skills and Technologies"
          subtitle="Built through competitive programming, full-stack development, and a passion for clean scalable code."
        />

        {/* ── DESKTOP LAYOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex gap-6 items-stretch"
        >
          {/* LEFT — sidebar tabs */}
          <div className="w-60 flex-shrink-0 bg-white/3 border border-white/8 rounded-2xl p-3 flex flex-col gap-1">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-600 px-3 pb-3">
              Categories
            </p>
            {skillCategories.map((cat, i) => {
              const TabIcon = cat.icon;
              const isAct = i === active;
              return (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  whileHover={{ x: 3 }}
                  className="relative flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl transition-all duration-200 overflow-hidden"
                  style={{
                    background: isAct ? cat.glow : "transparent",
                    border: `1.5px solid ${isAct ? cat.border : "transparent"}`,
                  }}
                >
                  {/* Left indicator */}
                  <motion.div
                    animate={{ height: isAct ? "60%" : "0%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full"
                    style={{ background: cat.accent }}
                  />

                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all"
                    style={{
                      background: isAct ? cat.glow : "rgba(255,255,255,0.04)",
                      borderColor: isAct ? cat.border : "transparent",
                    }}
                  >
                    <TabIcon
                      size={15}
                      style={{ color: isAct ? cat.accent : "#4b5563" }}
                    />
                  </div>

                  <span
                    className="text-sm transition-all"
                    style={{
                      fontWeight: isAct ? 700 : 500,
                      color: isAct ? "#ffffff" : "#6b7280",
                    }}
                  >
                    {cat.category}
                  </span>

                  {isAct && (
                    <motion.span
                      layoutId="activeCount"
                      className="ml-auto text-[10px] font-black px-2 py-0.5 rounded-full"
                      style={{ color: cat.accent, background: cat.glow }}
                    >
                      {cat.skills.length}
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT — detail panel */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Card header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${active}`}
                initial={{ opacity: 0, scale: 0.97, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-7 border relative overflow-hidden"
                style={{ background: C.glow, borderColor: C.border }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2"
                    style={{ background: `${C.glow}`, borderColor: C.border }}
                  >
                    <Icon size={26} style={{ color: C.accent }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-black uppercase tracking-[0.14em] mb-1"
                      style={{ color: C.accent }}
                    >
                      Skill Category
                    </p>
                    <h3 className="text-3xl font-black text-white tracking-tight leading-none">
                      {C.category}
                    </h3>
                  </div>
                  <div className="ml-auto text-right select-none">
                    <span
                      className="text-6xl font-black leading-none tracking-tight"
                      style={{ color: `${C.accent}20` }}
                    >
                      {String(active + 1).padStart(2, "0")}
                      <span
                        className="text-3xl"
                        style={{ color: `${C.accent}10` }}
                      >
                        /{String(total).padStart(2, "0")}
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Skills grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`skills-${active}`}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-2.5"
              >
                {C.skills.map((sk, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: si * 0.05, duration: 0.3 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl border bg-white/3 hover:bg-white/5 transition-colors duration-200 cursor-default group"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        `${C.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.06)";
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          background: C.accent,
                          boxShadow: `0 0 6px ${C.accent}`,
                        }}
                      />
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {sk.name}
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ color: C.accent, background: C.glow }}
                    >
                      {sk.tag}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Dot nav row */}
            <div className="flex items-center gap-2.5 pl-1">
              {skillCategories.map((cat, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={cat.category}
                  animate={{ width: i === active ? 24 : 8 }}
                  transition={{ duration: 0.35 }}
                  className="h-2 rounded-full border-none cursor-pointer p-0"
                  style={{
                    background:
                      i === active ? cat.accent : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
              <span className="ml-auto text-[11px] font-semibold text-gray-600 tracking-wide">
                Use arrow keys or swipe
              </span>
              <NavBtn onClick={prev}>
                <ChevronLeft size={15} />
              </NavBtn>
              <NavBtn onClick={next}>
                <ChevronRight size={15} />
              </NavBtn>
            </div>
          </div>
        </motion.div>

        {/* ── MOBILE LAYOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden"
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - touchStart.current;
            if (diff < -45) next();
            else if (diff > 45) prev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-${active}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: C.border,
              }}
            >
              {/* Mobile header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                  style={{ background: C.glow, borderColor: C.border }}
                >
                  <Icon size={22} style={{ color: C.accent }} />
                </div>
                <div>
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.12em] mb-0.5"
                    style={{ color: C.accent }}
                  >
                    Category
                  </p>
                  <h3 className="text-xl font-black text-white tracking-tight leading-none">
                    {C.category}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-[1.5px] mb-5"
                style={{
                  background: `linear-gradient(90deg, ${C.accent}60, transparent)`,
                }}
              />

              {/* Mobile skills */}
              <div className="flex flex-col gap-2.5 mb-6">
                {C.skills.map((sk, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: si * 0.05, duration: 0.3 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl border"
                    style={{ background: C.glow, borderColor: `${C.accent}25` }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: C.accent }}
                      />
                      <span className="text-sm font-semibold text-gray-200">
                        {sk.name}
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ color: C.accent, background: "rgba(0,0,0,0.3)" }}
                    >
                      {sk.tag}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Counter */}
              <p
                className="text-right text-lg font-black tracking-widest select-none"
                style={{ color: `${C.accent}40` }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Mobile controls */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <NavBtn onClick={prev}>
              <ChevronLeft size={16} />
            </NavBtn>
            <div className="flex gap-2 items-center">
              {skillCategories.map((cat, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={cat.category}
                  animate={{ width: i === active ? 22 : 7 }}
                  transition={{ duration: 0.35 }}
                  className="h-2 rounded-full border-none cursor-pointer p-0"
                  style={{
                    background:
                      i === active ? cat.accent : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
            <NavBtn onClick={next}>
              <ChevronRight size={16} />
            </NavBtn>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
