import { useEffect, useRef, useState, useCallback } from "react";
import {
  Code,
  Database,
  Layers,
  Wrench,
  BookOpen,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const skillCategories = [
  {
    category: "Languages & Core",
    icon: Code,
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    bg: "rgba(56,189,248,0.07)",
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
    glow: "rgba(244,114,182,0.18)",
    bg: "rgba(244,114,182,0.07)",
    skills: [
      { name: "React", tag: "UI Library" },
      { name: "Redux", tag: "State Mgmt" },
      { name: "Zustand", tag: "State Mgmt" },
      { name: "Tanstack query", tag: "State Mgmt" },
      { name: "React Router DOM", tag: "React Routing" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "Framer Motion", tag: "Animation" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: Database,
    accent: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    bg: "rgba(52,211,153,0.07)",
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
    glow: "rgba(251,146,60,0.18)",
    bg: "rgba(251,146,60,0.07)",
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
    glow: "rgba(250,204,21,0.18)",
    bg: "rgba(250,204,21,0.07)",
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
    glow: "rgba(167,139,250,0.18)",
    bg: "rgba(167,139,250,0.07)",
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
      setTimeout(() => setAnimating(false), 450);
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

  // Auto-advance
  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isVisible, next]);

  const C = skillCategories[active];
  const Icon = C.icon;

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "96px 0",
        background: "#f8f9ff",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes sk-fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes sk-slideIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes sk-popIn {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes sk-pulse {
          0%,100% { box-shadow: 0 0 0 0 var(--accent-glow); }
          50%      { box-shadow: 0 0 0 6px transparent; }
        }

        /* ── Desktop: sidebar tab ── */
        .sk-tab {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1.5px solid transparent;
          position: relative;
          overflow: hidden;
        }
        .sk-tab:hover { background: rgba(0,0,0,0.04); }
        .sk-tab.active {
          background: #fff;
          border-color: rgba(0,0,0,0.07);
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .sk-tab-indicator {
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 3px; height: 0;
          border-radius: 0 3px 3px 0;
          transition: height 0.3s ease;
        }
        .sk-tab.active .sk-tab-indicator { height: 60%; }

        /* ── Skill row in detail panel ── */
        .sk-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.05);
          background: #fff;
          transition: all 0.22s ease;
        }
        .sk-row:hover {
          border-color: var(--row-accent);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        /* ── Mobile nav btn ── */
        .sk-nav {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.08);
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
          color: #334155;
        }
        .sk-nav:hover { transform: scale(1.1); box-shadow: 0 4px 18px rgba(0,0,0,0.13); }

        /* ── Extras card ── */
        .sk-extra {
          flex: 1; min-width: 240px;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.06);
          border-radius: 22px;
          padding: 28px 30px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 14px rgba(0,0,0,0.04);
        }
        .sk-extra:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(0,0,0,0.09); }

        /* ── Mobile card ── */
        .sk-mobile-card {
          background: #fff;
          border-radius: 24px;
          padding: 28px;
          border: 1.5px solid rgba(0,0,0,0.07);
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
          width: 100%;
        }

        /* ── Responsive ── */
        .sk-desktop { display: flex; }
        .sk-mobile  { display: none; }

        @media (max-width: 767px) {
          .sk-desktop { display: none !important; }
          .sk-mobile  { display: block !important; }
        }
      `}</style>

      {/* BG dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(99,102,241,0.06) 1px, transparent 0)",
          backgroundSize: "38px 38px",
        }}
      />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        {/* ── Section header ── */}
        <SectionTitle
          title="Skills and Technologies"
          subtitle="Built through competitive programming, full-stack development, and a
            passion for clean scalable code."
        />

        {/* ══════════════════════════════════════
            DESKTOP LAYOUT — sidebar + detail
        ══════════════════════════════════════ */}
        <div
          className="sk-desktop"
          style={{
            gap: 28,
            alignItems: "stretch",
            animation: isVisible ? "sk-fadeUp 0.7s ease 0.2s both" : "none",
            opacity: isVisible ? undefined : 0,
          }}
        >
          {/* LEFT — tab list */}
          <div
            style={{
              width: 260,
              flexShrink: 0,
              background: "#fff",
              borderRadius: 24,
              padding: 16,
              border: "1.5px solid rgba(0,0,0,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#94a3b8",
                padding: "4px 18px 12px",
              }}
            >
              Categories
            </p>
            {skillCategories.map((cat, i) => {
              const TabIcon = cat.icon;
              const isAct = i === active;
              return (
                <div
                  key={i}
                  className={`sk-tab${isAct ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  style={{ "--accent-glow": cat.glow } as React.CSSProperties}
                >
                  <div
                    className="sk-tab-indicator"
                    style={{ background: cat.accent }}
                  />
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 12,
                      flexShrink: 0,
                      background: isAct ? cat.glow : "rgba(0,0,0,0.04)",
                      border: isAct
                        ? `1.5px solid ${cat.accent}40`
                        : "1.5px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <TabIcon
                      size={17}
                      style={{ color: isAct ? cat.accent : "#64748b" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: isAct ? 700 : 500,
                      color: isAct ? "#0f172a" : "#64748b",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat.category}
                  </span>
                  {isAct && (
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: 10,
                        fontWeight: 800,
                        color: cat.accent,
                        background: cat.glow,
                        padding: "2px 8px",
                        borderRadius: 50,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {cat.skills.length}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — detail panel */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {/* Card header */}
            <div
              key={`header-${active}`}
              style={{
                background: `linear-gradient(135deg, #fff 55%, ${C.bg})`,
                borderRadius: 24,
                padding: "32px 36px",
                border: `1.5px solid ${C.accent}44`,
                boxShadow: `0 8px 40px ${C.glow}, 0 2px 12px rgba(0,0,0,0.05)`,
                animation: "sk-popIn 0.4s ease both",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 18,
                    background: C.glow,
                    border: `2px solid ${C.accent}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} style={{ color: C.accent }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: C.accent,
                      marginBottom: 4,
                    }}
                  >
                    Skill Category
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2.2rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1,
                      color: "#0f172a",
                    }}
                  >
                    {C.category}
                  </h3>
                </div>
                {/* Progress indicator */}
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "3.5rem",
                      lineHeight: 1,
                      color: `${C.accent}22`,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {String(active + 1).padStart(2, "0")}
                    <span
                      style={{ fontSize: "1.5rem", color: `${C.accent}15` }}
                    >
                      /{String(total).padStart(2, "0")}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Skills grid */}
            <div
              key={`skills-${active}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                animation: "sk-slideIn 0.4s ease 0.05s both",
              }}
            >
              {C.skills.map((sk, si) => (
                <div
                  key={si}
                  className="sk-row"
                  style={
                    { "--row-accent": C.accent + "66" } as React.CSSProperties
                  }
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: C.accent,
                        display: "inline-block",
                        flexShrink: 0,
                        boxShadow: `0 0 8px ${C.accent}`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {sk.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: C.accent,
                      background: C.glow,
                      padding: "3px 11px",
                      borderRadius: 50,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {sk.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Dot nav row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                paddingLeft: 4,
              }}
            >
              {skillCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={cat.category}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === active ? cat.accent : "#cbd5e1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                    padding: 0,
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#94a3b8",
                  letterSpacing: "0.06em",
                }}
              >
                Swipe or use arrows
              </span>
              <button
                className="sk-nav"
                onClick={prev}
                aria-label="Prev"
                style={{ width: 36, height: 36 }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="sk-nav"
                onClick={next}
                aria-label="Next"
                style={{ width: 36, height: 36 }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MOBILE LAYOUT — swipeable cards
        ══════════════════════════════════════ */}
        <div
          className="sk-mobile"
          style={{
            animation: isVisible ? "sk-fadeUp 0.7s ease 0.2s both" : "none",
            opacity: isVisible ? undefined : 0,
          }}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - touchStart.current;
            if (diff < -45) next();
            else if (diff > 45) prev();
          }}
        >
          {/* Mobile card */}
          <div
            key={`mob-${active}`}
            className="sk-mobile-card"
            style={{ animation: "sk-popIn 0.38s ease both" }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: C.glow,
                  border: `1.5px solid ${C.accent}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={22} style={{ color: C.accent }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: C.accent,
                    marginBottom: 3,
                  }}
                >
                  Category
                </p>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.6rem",
                    letterSpacing: "0.04em",
                    color: "#0f172a",
                    lineHeight: 1,
                  }}
                >
                  {C.category}
                </h3>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: `linear-gradient(90deg, ${C.accent}55, transparent)`,
                marginBottom: 18,
              }}
            />

            {/* Skills */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {C.skills.map((sk, si) => (
                <div
                  key={si}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "11px 14px",
                    borderRadius: 12,
                    background: C.bg,
                    border: `1px solid ${C.accent}22`,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: C.accent,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {sk.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: C.accent,
                      background: C.glow,
                      padding: "3px 10px",
                      borderRadius: 50,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {sk.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Counter */}
            <p
              style={{
                textAlign: "right",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                color: `${C.accent}66`,
                letterSpacing: "0.08em",
              }}
            >
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>

          {/* Mobile controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              marginTop: 24,
            }}
          >
            <button className="sk-nav" onClick={prev} aria-label="Prev">
              <ChevronLeft size={18} />
            </button>
            <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
              {skillCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={cat.category}
                  style={{
                    width: i === active ? 22 : 7,
                    height: 7,
                    borderRadius: 4,
                    background: i === active ? cat.accent : "#cbd5e1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <button className="sk-nav" onClick={next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
