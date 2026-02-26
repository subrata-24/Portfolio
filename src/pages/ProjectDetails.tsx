import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Zap,
} from "lucide-react";

const categoryStyles: Record<
  string,
  { accent: string; glow: string; border: string }
> = {
  "AI / SaaS": {
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
  },
  Lifestyle: {
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
  },
  "Full-Stack": {
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.25)",
  },
};

const stackStyles: Record<
  string,
  { color: string; glow: string; border: string }
> = {
  frontend: {
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.2)",
  },
  backend: {
    color: "#34d399",
    glow: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
  },
  database: {
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
  },
  devops: {
    color: "#f87171",
    glow: "rgba(248,113,113,0.08)",
    border: "rgba(248,113,113,0.2)",
  },
  other: {
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);

  const project = projects.find((p) => p.id === id);
  const cat = project
    ? (categoryStyles[project.category] ?? {
        accent: "#22d3ee",
        glow: "rgba(34,211,238,0.1)",
        border: "rgba(34,211,238,0.2)",
      })
    : {
        accent: "#22d3ee",
        glow: "rgba(34,211,238,0.1)",
        border: "rgba(34,211,238,0.2)",
      };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#07070f] flex flex-col items-center justify-center gap-6">
        <h2 className="text-6xl font-black text-white tracking-tight">
          Project Not Found
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-gray-400 border border-white/10 bg-white/5 hover:text-white hover:border-white/20 transition-all"
        >
          <ArrowLeft size={15} /> Back to Home
        </motion.button>
      </div>
    );
  }

  const allTechs: string[] = [];
  Object.values(project.techStack).forEach((arr) => {
    if (Array.isArray(arr)) allTechs.push(...arr);
  });

  return (
    <div className="min-h-screen bg-[#07070f] text-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-60"
          style={{
            background: `radial-gradient(circle, ${cat.glow} 0%, transparent 60%)`,
          }}
        />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-700/5 rounded-full blur-[100px]" />
      </div>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3.5 bg-[#07070f]/80 backdrop-blur-2xl border-b border-white/6 shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
        <motion.button
          whileHover={{ scale: 1.04, x: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-gray-400 hover:text-white border border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/6 transition-all"
        >
          <ArrowLeft size={13} /> Back
        </motion.button>

        <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 hidden sm:block">
          {project.title}
        </span>

        <div className="flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all"
            >
              <Github size={12} /> GitHub
            </motion.a>
          )}
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white transition-all"
              style={{
                background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}99)`,
                boxShadow: `0 4px 16px ${cat.glow}`,
              }}
            >
              <ExternalLink size={12} /> Live Demo
            </motion.a>
          )}
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-0">
        {/* Category pill */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="mb-7"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.14em] border"
            style={{
              color: cat.accent,
              background: cat.glow,
              borderColor: cat.border,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: cat.accent }}
            />
            {project.category}
          </span>
        </motion.div>

        {/* Giant title */}
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="visible"
          className="text-7xl sm:text-8xl md:text-9xl font-black leading-[0.88] tracking-tight text-white mb-8"
        >
          {project.title}
        </motion.h1>

        {/* Accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] mb-10 origin-left"
          style={{
            background: `linear-gradient(90deg, ${cat.accent}, ${cat.glow.replace("0.12", "0.1")}, transparent)`,
          }}
        />

        {/* Description + Stats */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-8 items-start mb-16"
        >
          <p className="text-base text-gray-400 leading-relaxed max-w-xl flex-1 min-w-[280px]">
            {project.fullDescription}
          </p>
          <div className="flex gap-3 flex-wrap">
            {[
              { val: project.features.length, label: "Features" },
              { val: allTechs.length, label: "Technologies" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-6 py-4 rounded-2xl border bg-white/3 hover:bg-white/5 transition-all cursor-default"
                style={{ borderColor: cat.border }}
              >
                <span
                  className="text-4xl font-black leading-none tracking-tight"
                  style={{ color: cat.accent }}
                >
                  {s.val}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-1.5">
                  {s.label}
                </span>
              </div>
            ))}
            {project.liveDemo && (
              <div
                className="flex flex-col items-center px-6 py-4 rounded-2xl border bg-white/3 hover:bg-white/5 transition-all cursor-default"
                style={{ borderColor: cat.border }}
              >
                <Zap size={24} style={{ color: cat.accent }} />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-1.5">
                  Live
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </header>

      {/* Hero Image */}
      <motion.div
        variants={fadeUp(0.55)}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 mb-20"
      >
        <div
          className="relative rounded-3xl overflow-hidden border border-white/8"
          style={{
            boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 60px ${cat.glow}`,
          }}
        >
          {/* Shimmer skeleton */}
          {!imgLoaded && (
            <div className="absolute inset-0 z-10 animate-pulse bg-white/3" />
          )}
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImgLoaded(true)}
            className="w-full object-cover block transition-opacity duration-700"
            style={{
              height: "clamp(220px, 42vw, 480px)",
              opacity: imgLoaded ? 1 : 0,
            }}
          />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/60 via-transparent to-transparent pointer-events-none" />

          {/* Image action buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 text-white text-xs font-bold border border-white/15 backdrop-blur-md hover:bg-black/80 transition-all"
              >
                <Github size={13} /> Source
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-bold transition-all"
                style={{ background: cat.accent }}
              >
                <ExternalLink size={13} /> Live
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        {/* Features */}
        {project.features.length > 0 && (
          <motion.section
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                style={{ background: cat.glow, borderColor: cat.border }}
              >
                <CheckCircle2 size={18} style={{ color: cat.accent }} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Core Features
              </h2>
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/3 hover:bg-white/5 hover:border-white/12 hover:translate-x-1 transition-all duration-200 group cursor-default"
                >
                  <span
                    className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border"
                    style={{ background: cat.glow, borderColor: cat.border }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: cat.accent }}
                    />
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 leading-snug transition-colors">
                    {feat}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <motion.section
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/25 bg-cyan-500/8">
                <Layers size={18} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Tech Stack
              </h2>
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="bg-white/3 border border-white/8 rounded-2xl p-6 sm:p-8 hover:border-white/12 transition-colors">
              <div className="flex flex-col gap-5">
                {Object.entries(project.techStack).map(([key, techs]) =>
                  techs && techs.length > 0 ? (
                    <div
                      key={key}
                      className="flex items-center gap-5 flex-wrap"
                    >
                      <span
                        className="text-[9px] font-black uppercase tracking-[0.18em] min-w-[68px] text-right"
                        style={{ color: stackStyles[key]?.color ?? "#94a3b8" }}
                      >
                        {key}
                      </span>
                      <div className="w-px h-4 bg-white/10 flex-shrink-0" />
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ y: -2, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="text-xs font-bold px-3 py-1.5 rounded-full border cursor-default"
                            style={{
                              color: stackStyles[key]?.color ?? "#94a3b8",
                              background:
                                stackStyles[key]?.glow ??
                                "rgba(255,255,255,0.04)",
                              borderColor:
                                stackStyles[key]?.border ??
                                "rgba(255,255,255,0.1)",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Banner */}
        <motion.section
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="relative rounded-3xl overflow-hidden p-10 sm:p-12 border"
            style={{ background: cat.glow, borderColor: cat.border }}
          >
            {/* BG decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:28px_28px]" />
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-30"
                style={{
                  background: `radial-gradient(circle, ${cat.accent}40 0%, transparent 70%)`,
                }}
              />
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-8">
              <div className="flex-1 min-w-[260px]">
                <p
                  className="text-[10px] font-black uppercase tracking-[0.18em] mb-3"
                  style={{ color: cat.accent }}
                >
                  Ready to Explore
                </p>
                <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                  Explore the codebase or see it running live — crafted with
                  attention to detail.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[180px]">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 border border-white/15 hover:bg-white/15 hover:border-white/25 overflow-hidden transition-all"
                  >
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <Github size={15} className="relative" />
                    <span className="relative">View Source Code</span>
                  </motion.a>
                )}
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white overflow-hidden transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}bb)`,
                      boxShadow: `0 8px 32px ${cat.glow}`,
                    }}
                  >
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <ExternalLink size={15} className="relative" />
                    <span className="relative">Open Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default ProjectDetails;
