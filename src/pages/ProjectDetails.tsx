import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  { accent: string; lightBg: string; border: string }
> = {
  "AI / SaaS": { accent: "#7c3aed", lightBg: "#f5f3ff", border: "#ddd6fe" },
  Lifestyle: { accent: "#059669", lightBg: "#ecfdf5", border: "#a7f3d0" },
  "Full-Stack": { accent: "#2563eb", lightBg: "#eff6ff", border: "#bfdbfe" },
};

const stackStyles: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  frontend: { color: "#4f46e5", bg: "#eff6ff", border: "#bfdbfe" },
  backend: { color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
  database: { color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  devops: { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
  other: { color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const project = projects.find((p) => p.id === id);
  const cat = project
    ? (categoryStyles[project.category] ?? {
        accent: "#64748b",
        lightBg: "#f8fafc",
        border: "#e2e8f0",
      })
    : { accent: "#64748b", lightBg: "#f8fafc", border: "#e2e8f0" };

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <h2
          style={{
            fontSize: "3rem",
            fontFamily: "'Bebas Neue', sans-serif",
            color: "#0f172a",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}
        >
          Project Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: 14,
            background: "#f1f5f9",
            border: "1.5px solid #e2e8f0",
            color: "#0f172a",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>
    );
  }

  const allTechs: string[] = [];
  Object.values(project.techStack).forEach((arr) => {
    if (Array.isArray(arr)) allTechs.push(...arr);
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#0f172a",
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        @keyframes pd-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pd-fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes pd-slideRight {
          from { transform: scaleX(0); } to { transform: scaleX(1); }
        }
        @keyframes pd-popIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes pd-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pd-pulse-light {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 0.7; transform: scale(1.08); }
        }

        .pd-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 50px;
          background: #f8fafc; border: 1.5px solid #e2e8f0;
          color: #64748b; font-size: 13px; font-weight: 700;
          cursor: pointer; transition: all 0.22s ease;
          font-family: 'DM Sans', sans-serif; letter-spacing: 0.02em;
        }
        .pd-back-btn:hover { background: #fff; color: #0f172a; border-color: #cbd5e1; box-shadow: 0 2px 10px rgba(0,0,0,0.07); }

        .pd-gh-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 50px;
          background: #0f172a; border: 1.5px solid #0f172a;
          color: #fff; font-size: 13px; font-weight: 700;
          text-decoration: none; cursor: pointer; transition: all 0.22s ease;
          font-family: 'DM Sans', sans-serif; letter-spacing: 0.02em;
        }
        .pd-gh-btn:hover { background: #1e293b; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.15); }

        .pd-live-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: 50px;
          color: #fff; font-size: 13px; font-weight: 700;
          text-decoration: none; cursor: pointer; transition: all 0.22s ease;
          font-family: 'DM Sans', sans-serif; letter-spacing: 0.02em;
          border: none;
        }
        .pd-live-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }

        .feat-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 16px; border-radius: 14px;
          background: #f8fafc; border: 1px solid #f1f5f9;
          transition: all 0.25s ease;
        }
        .feat-row:hover {
          background: #fff; border-color: #e2e8f0;
          transform: translateX(4px); box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }

        .tech-tag {
          display: inline-flex; align-items: center;
          padding: 5px 13px; border-radius: 50px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.04em; border: 1.5px solid transparent;
          transition: all 0.2s ease; cursor: default;
        }
        .tech-tag:hover { transform: translateY(-2px) scale(1.05); }

        .glass-card {
          background: #f8fafc; border: 1.5px solid #f1f5f9; border-radius: 24px;
        }
        .glass-card:hover { border-color: #e2e8f0; }

        .stat-box {
          display: flex; flex-direction: column; align-items: center;
          padding: 20px 28px; border-radius: 20px;
          background: #fff; border: 1.5px solid #f1f5f9;
          min-width: 100px; transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .stat-box:hover { border-color: #e2e8f0; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.07); }
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
            top: "-15%",
            left: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${cat.lightBg} 0%, transparent 60%)`,
            animation: "pd-pulse-light 10s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f5f3ff 0%, transparent 60%)",
            animation: "pd-pulse-light 14s ease-in-out infinite 4s",
            filter: "blur(40px)",
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
          animation: loaded ? "pd-fadeIn 0.5s ease" : "none",
        }}
      >
        <button className="pd-back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={15} /> Back
        </button>
        <span
          style={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          {project.title}
        </span>
        <div style={{ display: "flex", gap: 10 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-gh-btn"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="pd-live-btn"
              style={{
                background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}cc)`,
                boxShadow: `0 4px 16px ${cat.lightBg}`,
              }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </nav>

      {/* ── Hero Header ── */}
      <header
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 32px 0",
        }}
      >
        {/* Category pill */}
        <div
          style={{
            marginBottom: 28,
            animation: loaded ? "pd-fadeUp 0.55s ease 0.1s both" : "none",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 50,
              fontSize: 10,
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: cat.accent,
              background: cat.lightBg,
              border: `1.5px solid ${cat.border}`,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: cat.accent,
                display: "inline-block",
              }}
            />
            {project.category}
          </span>
        </div>

        {/* Giant title */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(4rem, 11vw, 9rem)",
            lineHeight: 0.88,
            letterSpacing: "0.025em",
            color: "#0f172a",
            marginBottom: 32,
            animation: loaded ? "pd-fadeUp 0.65s ease 0.2s both" : "none",
          }}
        >
          {project.title}
        </h1>

        {/* Accent bar */}
        <div
          style={{
            height: 2.5,
            marginBottom: 36,
            background: `linear-gradient(90deg, ${cat.accent} 0%, ${cat.lightBg} 50%, transparent 100%)`,
            transformOrigin: "left",
            animation: loaded
              ? "pd-slideRight 0.9s cubic-bezier(0.23,1,0.32,1) 0.5s both"
              : "none",
          }}
        />

        {/* Description + Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            alignItems: "flex-start",
            marginBottom: 64,
            animation: loaded ? "pd-fadeUp 0.6s ease 0.55s both" : "none",
          }}
        >
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.8,
              color: "#64748b",
              maxWidth: 560,
              flex: "1 1 280px",
              fontWeight: 500,
            }}
          >
            {project.fullDescription}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              flex: "0 0 auto",
            }}
          >
            <div className="stat-box">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 34,
                  color: cat.accent,
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                {project.features.length}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: 6,
                }}
              >
                Features
              </span>
            </div>
            <div className="stat-box">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 34,
                  color: cat.accent,
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                {allTechs.length}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: 6,
                }}
              >
                Technologies
              </span>
            </div>
            {project.liveDemo && (
              <div className="stat-box">
                <Zap size={26} style={{ color: cat.accent }} />
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: 6,
                  }}
                >
                  Live
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── Hero Image ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto 80px",
          padding: "0 32px",
          animation: loaded ? "pd-fadeUp 0.75s ease 0.7s both" : "none",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: `0 32px 80px rgba(0,0,0,0.12), 0 4px 24px rgba(0,0,0,0.06)`,
            border: "1.5px solid #f1f5f9",
          }}
        >
          {!imgLoaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                background:
                  "linear-gradient(90deg, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%)",
                backgroundSize: "200% 100%",
                animation: "pd-shimmer 1.5s infinite",
              }}
            />
          )}
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImgLoaded(true)}
            style={{
              width: "100%",
              height: "clamp(260px, 42vw, 500px)",
              objectFit: "cover",
              display: "block",
              transition: "opacity 0.6s ease",
              opacity: imgLoaded ? 1 : 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.5) 100%)",
            }}
          />

          {/* Image action buttons */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              display: "flex",
              gap: 10,
            }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 16px",
                  borderRadius: 50,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  color: "#0f172a",
                  fontSize: 12,
                  fontWeight: 800,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <Github size={14} /> Source
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "9px 16px",
                  borderRadius: 50,
                  background: cat.accent,
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 800,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 32px 80px",
        }}
      >
        {/* Features */}
        {project.features.length > 0 && (
          <section
            style={{
              marginBottom: 56,
              animation: loaded ? "pd-fadeUp 0.65s ease 0.85s both" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 13,
                  background: cat.lightBg,
                  border: `1.5px solid ${cat.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={18} style={{ color: cat.accent }} />
              </div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.2rem",
                  letterSpacing: "0.05em",
                  color: "#0f172a",
                  margin: 0,
                }}
              >
                Core Features
              </h2>
              <div
                style={{
                  flex: 1,
                  height: 1.5,
                  background: "linear-gradient(90deg, #e2e8f0, transparent)",
                  marginLeft: 8,
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 10,
              }}
            >
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="feat-row"
                  style={{
                    animation: loaded
                      ? `pd-fadeUp 0.5s ease ${0.9 + i * 0.07}s both`
                      : "none",
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 8,
                      background: cat.lightBg,
                      border: `1.5px solid ${cat.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: cat.accent,
                        display: "block",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "#475569",
                      fontWeight: 500,
                    }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <section
            style={{
              marginBottom: 64,
              animation: loaded ? "pd-fadeUp 0.65s ease 1.05s both" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 13,
                  background: "#eff6ff",
                  border: "1.5px solid #bfdbfe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Layers size={18} style={{ color: "#2563eb" }} />
              </div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.2rem",
                  letterSpacing: "0.05em",
                  color: "#0f172a",
                  margin: 0,
                }}
              >
                Tech Stack
              </h2>
              <div
                style={{
                  flex: 1,
                  height: 1.5,
                  background: "linear-gradient(90deg, #e2e8f0, transparent)",
                  marginLeft: 8,
                }}
              />
            </div>

            <div className="glass-card" style={{ padding: "28px 32px" }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {Object.entries(project.techStack).map(([key, techs]) =>
                  techs && techs.length > 0 ? (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 18,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 900,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: stackStyles[key]?.color ?? "#64748b",
                          minWidth: 70,
                          textAlign: "right",
                        }}
                      >
                        {key}
                      </span>
                      <div
                        style={{
                          width: 1,
                          height: 18,
                          background: "#e2e8f0",
                          flexShrink: 0,
                        }}
                      />
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                      >
                        {techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className="tech-tag"
                            style={{
                              color: stackStyles[key]?.color ?? "#64748b",
                              background: stackStyles[key]?.bg ?? "#f8fafc",
                              borderColor:
                                stackStyles[key]?.border ?? "#e2e8f0",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section
          style={{
            animation: loaded ? "pd-fadeUp 0.65s ease 1.15s both" : "none",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              padding: "48px 48px",
              background: cat.lightBg,
              border: `1.5px solid ${cat.border}`,
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            }}
          >
            {/* BG decoration */}
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
                  top: "-50%",
                  right: "-5%",
                  width: 400,
                  height: 400,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 32,
              }}
            >
              <div style={{ flex: "1 1 280px" }}>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 900,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: cat.accent,
                    marginBottom: 14,
                  }}
                >
                  Ready to Explore
                </p>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.2rem, 5vw, 4rem)",
                    letterSpacing: "0.04em",
                    color: "#0f172a",
                    lineHeight: 0.92,
                    marginBottom: 14,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    maxWidth: 360,
                    lineHeight: 1.75,
                    fontWeight: 500,
                  }}
                >
                  Explore the codebase or see it running live — crafted with
                  attention to detail.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  minWidth: 190,
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "14px 24px",
                      borderRadius: 16,
                      background: "#0f172a",
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      letterSpacing: "0.03em",
                    }}
                  >
                    <Github size={16} /> View Source Code
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "14px 24px",
                      borderRadius: 16,
                      background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}cc)`,
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.25s ease",
                      letterSpacing: "0.03em",
                      boxShadow: `0 8px 32px ${cat.border}`,
                    }}
                  >
                    <ExternalLink size={16} /> Open Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetails;
