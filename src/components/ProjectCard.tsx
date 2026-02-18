import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const allTechs: string[] = [];
  Object.values(project.techStack).forEach((arr) => {
    if (Array.isArray(arr)) allTechs.push(...arr);
  });

  return (
    <div
      className="project-card group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col"
      onClick={() => navigate(`/projects/${project.id}`)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/projects/${project.id}`);
      }}
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.8)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.92)",
            color: "#1a1a2e",
            letterSpacing: "0.04em",
            backdropFilter: "blur(8px)",
          }}
        >
          {project.category}
        </span>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
              onClick={(e) => e.stopPropagation()}
              title="GitHub"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                color: "#1a1a2e",
                transition: "all 0.2s ease",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <Github size={16} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
              onClick={(e) => e.stopPropagation()}
              title="Live Demo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                color: "#1a1a2e",
                transition: "all 0.2s ease",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-bold text-lg leading-tight"
            style={{ color: "#0f0f1a", fontFamily: "'Syne', sans-serif" }}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 mt-0.5 arrow-icon"
            style={{ color: "#6366f1", transition: "transform 0.3s ease" }}
          />
        </div>

        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "#6b7280" }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {allTechs.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "#f0f0ff",
                color: "#4f46e5",
                border: "1px solid #e0e0ff",
              }}
            >
              {tech}
            </span>
          ))}
          {allTechs.length > 5 && (
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "#f9fafb",
                color: "#9ca3af",
                border: "1px solid #e5e7eb",
              }}
            >
              +{allTechs.length - 5}
            </span>
          )}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.15), 0 8px 24px rgba(0,0,0,0.08) !important;
          border-color: rgba(99, 102, 241, 0.3) !important;
        }
        .project-card:hover img {
          transform: scale(1.06);
        }
        .project-card:hover .arrow-icon {
          transform: translate(2px, -2px);
        }
        .action-btn:hover {
          background: #4f46e5 !important;
          color: white !important;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
