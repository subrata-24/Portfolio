import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Star } from "lucide-react";

const journey = [
  {
    phase: "2022",
    era: "Foundation",
    title: "Getting Started",
    emoji: "🚀",
    accent: "#2563eb",
    lightBg: "#eff6ff",
    border: "#bfdbfe",
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
    accent: "#059669",
    lightBg: "#ecfdf5",
    border: "#a7f3d0",
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
    accent: "#d97706",
    lightBg: "#fffbeb",
    border: "#fde68a",
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
    accent: "#2563eb",
    lightBg: "#eff6ff",
    border: "#bfdbfe",
    text: "Solved 2500+ problems with a systematic approach, sharpening algorithmic thinking across Codeforces, LeetCode, and CodeChef.",
  },
  {
    icon: "🏆",
    accent: "#d97706",
    lightBg: "#fffbeb",
    border: "#fde68a",
    text: "Achieved 3× ICPC Finalist status, representing PSTU at the national level against top universities.",
  },
  {
    icon: "📊",
    accent: "#059669",
    lightBg: "#ecfdf5",
    border: "#a7f3d0",
    text: "Ranked consistently in major inter-university contests — Uttara IUPC, CUET IUPC, KUET IUPC, AUST IUPC.",
  },
  {
    icon: "👨‍🏫",
    accent: "#db2777",
    lightBg: "#fdf2f8",
    border: "#fbcfe8",
    text: "Mentored 150+ students in competitive programming, improving PSTU's national standing from 17th to 13th.",
  },
  {
    icon: "📝",
    accent: "#7c3aed",
    lightBg: "#f5f3ff",
    border: "#ddd6fe",
    text: "Served as Problem Setter for NHSPC 2025, designing algorithmic problems for a national-level competition.",
  },
  {
    icon: "⚡",
    accent: "#ea580c",
    lightBg: "#fff7ed",
    border: "#fed7aa",
    text: "Competitive programming expertise directly powers efficient, scalable production code with strong algorithmic foundations.",
  },
];

const CompetitiveJourney = () => {
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(2);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const selected = journey[activePhase];

  return (
    <div
      ref={pageRef}
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#0f172a",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes cj-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cj-popIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes cj-slideIn {
          from { opacity: 0; transform: translateX(-14px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes cj-pulse-light {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50%      { opacity: 0.9; transform: scale(1.08); }
        }

        .cj-phase-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 16px;
          cursor: pointer;
          border: 1.5px solid transparent;
          background: transparent;
          transition: all 0.28s ease;
          text-align: left;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
        }
        .cj-phase-btn:hover { background: #f8fafc; border-color: #e2e8f0; }
        .cj-phase-btn.active { background: #fff; border-color: #e2e8f0; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

        .cj-achieve-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          transition: all 0.25s ease;
        }
        .cj-achieve-row:hover {
          background: #fff;
          border-color: #e2e8f0;
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }

        .cj-summary-card {
          padding: 22px 24px;
          border-radius: 20px;
          background: #fff;
          transition: all 0.3s ease;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .cj-summary-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
        }

        .cj-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 50px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          color: #64748b;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
        .cj-back-btn:hover {
          background: #fff;
          color: #0f172a;
          border-color: #cbd5e1;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
        }

        @media (max-width: 767px) {
          .cj-layout { flex-direction: column !important; }
          .cj-sidebar { width: 100% !important; }
          .cj-phase-btn { padding: 12px 14px !important; }
        }
      `}</style>

      {/* Light decorative blobs */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${selected.lightBg} 0%, transparent 65%)`,
            animation: "cj-pulse-light 12s ease-in-out infinite",
            filter: "blur(60px)",
            transition: "background 0.5s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f5f3ff 0%, transparent 65%)",
            animation: "cj-pulse-light 15s ease-in-out infinite 5s",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(99,102,241,0.04) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Sticky Nav ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "13px 32px",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #f1f5f9",
          boxShadow: "0 1px 12px rgba(0,0,0,0.04)",
        }}
      >
        <button className="cj-back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={15} /> Back
        </button>
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            color: "#94a3b8",
            textTransform: "uppercase",
          }}
        >
          Competitive Journey
        </span>
        {/* Phase dots */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {journey.map((j, i) => (
            <div
              key={i}
              onClick={() => setActivePhase(i)}
              style={{
                width: i === activePhase ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === activePhase ? j.accent : "#e2e8f0",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </nav>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1140,
          margin: "0 auto",
          padding: "64px 28px 96px",
        }}
      >
        {/* ── Page header ── */}
        <div
          style={{
            marginBottom: 64,
            animation: isVisible ? "cj-fadeUp 0.6s ease both" : "none",
            opacity: isVisible ? undefined : 0,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 50,
              background: "#fffbeb",
              border: "1px solid #fde68a",
              marginBottom: 20,
            }}
          >
            <Star size={12} style={{ color: "#d97706" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#d97706",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Learning Path
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.88,
              color: "#0f172a",
              marginBottom: 16,
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CP Journey
            </span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#64748b",
              maxWidth: 480,
              lineHeight: 1.75,
              fontWeight: 500,
            }}
          >
            From solving my first problem in 2022 to competing nationally and
            mentoring hundreds — a story of consistent growth.
          </p>
          <div
            style={{
              height: 2,
              marginTop: 32,
              background:
                "linear-gradient(90deg, #2563eb 0%, rgba(37,99,235,0.15) 40%, transparent 80%)",
            }}
          />
        </div>

        {/* ── Main layout: sidebar + detail ── */}
        <div
          className="cj-layout"
          style={{
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
            marginBottom: 72,
            animation: isVisible ? "cj-fadeUp 0.65s ease 0.2s both" : "none",
            opacity: isVisible ? undefined : 0,
          }}
        >
          {/* Sidebar */}
          <div
            className="cj-sidebar"
            style={{
              width: 260,
              flexShrink: 0,
              background: "#f8fafc",
              borderRadius: 24,
              padding: 14,
              border: "1.5px solid #f1f5f9",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#94a3b8",
                padding: "2px 8px 10px",
              }}
            >
              Timeline
            </p>
            {journey.map((j, i) => {
              const isAct = i === activePhase;
              return (
                <button
                  key={i}
                  className={`cj-phase-btn${isAct ? " active" : ""}`}
                  onClick={() => setActivePhase(i)}
                  style={{ borderColor: isAct ? j.border : "transparent" }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: isAct ? j.lightBg : "#fff",
                      border: `2px solid ${isAct ? j.border : "#f1f5f9"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                      fontSize: 18,
                    }}
                  >
                    {j.emoji}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: isAct ? j.accent : "#94a3b8",
                        marginBottom: 2,
                      }}
                    >
                      {j.phase}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: isAct ? "#0f172a" : "#64748b",
                        lineHeight: 1.2,
                      }}
                    >
                      {j.era}
                    </p>
                  </div>
                  {isAct && (
                    <div
                      style={{
                        marginLeft: "auto",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: j.accent,
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            key={activePhase}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              animation: "cj-popIn 0.38s ease both",
            }}
          >
            {/* Phase header card */}
            <div
              style={{
                background: selected.lightBg,
                borderRadius: 24,
                padding: "32px 36px",
                border: `1.5px solid ${selected.border}`,
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 42, lineHeight: 1 }}>
                  {selected.emoji}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: selected.accent,
                      marginBottom: 5,
                    }}
                  >
                    {selected.phase} · {selected.era}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2.6rem",
                      letterSpacing: "0.04em",
                      color: "#0f172a",
                      lineHeight: 0.95,
                      margin: 0,
                    }}
                  >
                    {selected.title}
                  </h2>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "5rem",
                    color: `${selected.accent}22`,
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {String(activePhase + 1).padStart(2, "0")}
                </div>
              </div>
              <div
                style={{
                  height: 1.5,
                  background: `linear-gradient(90deg, ${selected.accent}66, transparent)`,
                }}
              />
            </div>

            {/* Achievements */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 10,
              }}
            >
              {selected.achievements.map((ach, i) => (
                <div
                  key={i}
                  className="cj-achieve-row"
                  style={{
                    animation: `cj-slideIn 0.4s ease ${i * 0.07}s both`,
                  }}
                >
                  <CheckCircle2
                    size={17}
                    style={{
                      color: selected.accent,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#475569",
                      lineHeight: 1.55,
                    }}
                  >
                    {ach}
                  </span>
                </div>
              ))}
            </div>

            {/* Phase pill nav */}
            <div
              style={{
                display: "flex",
                gap: 8,
                paddingLeft: 4,
                alignItems: "center",
              }}
            >
              {journey.map((j, i) => (
                <div
                  key={i}
                  onClick={() => setActivePhase(i)}
                  style={{
                    width: i === activePhase ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === activePhase ? j.accent : "#e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                  }}
                />
              ))}
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#94a3b8",
                }}
              >
                Click a phase to explore
              </span>
            </div>
          </div>
        </div>

        {/* ── Summary section ── */}
        <div
          style={{
            animation: isVisible ? "cj-fadeUp 0.65s ease 0.5s both" : "none",
            opacity: isVisible ? undefined : 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.05em",
                color: "#0f172a",
                margin: 0,
              }}
            >
              What This Means
            </h3>
            <div
              style={{
                flex: 1,
                height: 1.5,
                background: "linear-gradient(90deg, #e2e8f0, transparent)",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 14,
            }}
          >
            {summary.map((s, i) => (
              <div
                key={i}
                className="cj-summary-card"
                style={{
                  border: `1.5px solid ${s.border}`,
                  background: s.lightBg,
                  animation: isVisible
                    ? `cj-fadeUp 0.5s ease ${0.55 + i * 0.07}s both`
                    : "none",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "#fff",
                    border: `1.5px solid ${s.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "#475569",
                    lineHeight: 1.7,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveJourney;
