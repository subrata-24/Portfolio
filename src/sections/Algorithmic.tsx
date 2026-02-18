import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    accent: "#2563eb",
    lightBg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: Trophy,
    value: "3×",
    label: "ICPC Finalist",
    sub: "2023, 2024 & 2025",
    accent: "#d97706",
    lightBg: "#fffbeb",
    border: "#fde68a",
  },
  {
    icon: Target,
    value: "1516",
    label: "Codeforces Specialist",
    sub: "Max Rating",
    accent: "#db2777",
    lightBg: "#fdf2f8",
    border: "#fbcfe8",
  },
  {
    icon: Award,
    value: "1812",
    label: "CodeChef 4★",
    sub: "Max Rating",
    accent: "#059669",
    lightBg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    icon: TrendingUp,
    value: "1710",
    label: "LeetCode Max",
    sub: "Highest Rating",
    accent: "#ea580c",
    lightBg: "#fff7ed",
    border: "#fed7aa",
  },
  {
    icon: Zap,
    value: "150+",
    label: "Students Mentored",
    sub: "17th → 13th rank improvement",
    accent: "#7c3aed",
    lightBg: "#f5f3ff",
    border: "#ddd6fe",
  },
];

const contestHighlights = [
  {
    rank: "12th",
    event: "Uttara IUPC 2025",
    team: "PSTU_Salsabil",
    accent: "#d97706",
    lightBg: "#fffbeb",
    border: "#fde68a",
  },
  {
    rank: "44th",
    event: "BUET IUPC 2026",
    team: "PSTU_Nilkomol",
    accent: "#059669",
    lightBg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    rank: "44th",
    event: "CUET IUPC 2023",
    team: "PSTU_BinaryMindSet",
    accent: "#2563eb",
    lightBg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    rank: "Champion",
    event: "PSTU IUPC 2025",
    team: "Intra-university",
    accent: "#059669",
    lightBg: "#ecfdf5",
    border: "#a7f3d0",
  },
];

const Algorithmic = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

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

  return (
    <section
      id="achievements"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes alg-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes alg-pulse-light {
          0%,100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.1); }
        }

        .alg-stat-card {
          border-radius: 24px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
          cursor: default;
        }
        .alg-stat-card:hover {
          transform: translateY(-6px);
        }

        .alg-contest-card {
          border-radius: 20px;
          padding: 24px 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .alg-contest-card:hover {
          transform: translateY(-4px);
        }

        .alg-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.28s ease;
          letter-spacing: 0.03em;
          font-family: 'DM Sans', sans-serif;
        }
        .alg-cta-btn:hover { transform: translateY(-2px); }
        .alg-cta-btn:hover .alg-arrow { transform: translateX(4px); }
        .alg-arrow { transition: transform 0.25s ease; }
      `}</style>

      {/* Light decorative blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "0%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #eff6ff 0%, transparent 70%)",
            animation: "alg-pulse-light 12s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "-5%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f5f3ff 0%, transparent 70%)",
            animation: "alg-pulse-light 15s ease-in-out infinite 5s",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(99,102,241,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            marginBottom: 64,
            animation: isVisible ? "alg-fadeUp 0.65s ease both" : "none",
            opacity: isVisible ? undefined : 0,
          }}
        >
          <SectionTitle
            title="🎯 Algorithmic Excellence"
            subtitle="Competing nationally, mentoring hundreds, and building algorithmic foundations that power production-grade systems"
          />

          <div
            style={{
              height: 2,
              marginTop: 32,
              background:
                "linear-gradient(90deg, #2563eb 0%, rgba(37,99,235,0.15) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* ── Stats Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const isHov = hovered === i;
            return (
              <div
                key={i}
                className="alg-stat-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  animation: isVisible
                    ? `alg-fadeUp 0.55s ease ${i * 0.08}s both`
                    : "none",
                  opacity: isVisible ? undefined : 0,
                  background: isHov ? stat.lightBg : "#fafafa",
                  border: `1.5px solid ${isHov ? stat.border : "#f1f5f9"}`,
                  boxShadow: isHov
                    ? `0 20px 60px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)`
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Icon row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 14,
                        background: stat.lightBg,
                        border: `1.5px solid ${stat.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        transform: isHov
                          ? "scale(1.1) rotate(6deg)"
                          : "scale(1)",
                      }}
                    >
                      <Icon size={20} style={{ color: stat.accent }} />
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: stat.accent,
                        background: stat.lightBg,
                        padding: "3px 10px",
                        borderRadius: 50,
                        border: `1px solid ${stat.border}`,
                      }}
                    >
                      Verified
                    </span>
                  </div>

                  {/* Value */}
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "3.2rem",
                      letterSpacing: "0.02em",
                      lineHeight: 1,
                      color: stat.accent,
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>

                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#0f172a",
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}
                  >
                    {stat.sub}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${stat.accent}, transparent)`,
                    transform: isHov ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s ease",
                    borderRadius: "0 0 24px 24px",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Contest Highlights ── */}
        <div
          style={{
            animation: isVisible ? "alg-fadeUp 0.65s ease 0.55s both" : "none",
            opacity: isVisible ? undefined : 0,
            marginBottom: 56,
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
              Notable Contest Rankings
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
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            {contestHighlights.map((c, i) => (
              <div
                key={i}
                className="alg-contest-card"
                style={{
                  animation: isVisible
                    ? `alg-fadeUp 0.5s ease ${0.6 + i * 0.1}s both`
                    : "none",
                  background: c.lightBg,
                  border: `1.5px solid ${c.border}`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2.4rem",
                    letterSpacing: "0.04em",
                    color: c.accent,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {c.rank}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 4,
                  }}
                >
                  {c.event}
                </p>
                <p style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>
                  {c.team}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            animation: isVisible ? "alg-fadeUp 0.65s ease 0.75s both" : "none",
            opacity: isVisible ? undefined : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            padding: "32px 40px",
            borderRadius: 24,
            background: "#f8faff",
            border: "1.5px solid #e0e7ff",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.04em",
                color: "#0f172a",
                margin: 0,
              }}
            >
              See the Complete Journey
            </h3>
          </div>
          <button
            className="alg-cta-btn"
            onClick={() => navigate("/competitive-journey")}
            style={{
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(79,70,229,0.25)",
            }}
          >
            View My Journey
            <ArrowRight size={17} className="alg-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Algorithmic;
