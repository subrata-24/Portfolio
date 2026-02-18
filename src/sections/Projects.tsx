import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-10 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f8f8ff 0%, #f0f0ff 40%, #fafafa 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #c7d2fe 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.5,
          animation: "blob 10s infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ddd6fe 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.4,
          animation: "blob 10s infinite 3s",
        }}
      />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              letterSpacing: "-0.02em",
              color: "#0f0f1a",
            }}
          >
            Apps I've Built
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              That Actually Matter
            </span>
          </h2>

          <p
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#6b7280" }}
          >
            Full-stack apps with real-time features, modern tech stacks, and
            genuine user value. Built to scale and delightful to use.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, i) => (
            <div
              key={project.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${i * 0.12 + 0.2}s`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "all 0.7s ease 0.7s",
          }}
        >
          <a
            href="https://github.com/subrata-24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all"
            style={{
              background: "#0f0f1a",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(15,15,26,0.25)",
            }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.08); }
          66% { transform: translate(-20px, 20px) scale(0.93); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
