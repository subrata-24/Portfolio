import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={() => navigate(`/projects/${project.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/projects/${project.id}`);
      }}
      tabIndex={0}
      role="button"
      className="group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col bg-white/3 border border-white/8 hover:border-cyan-500/30 backdrop-blur-sm transition-colors duration-300"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          boxShadow:
            "inset 0 0 40px rgba(34,211,238,0.05), 0 0 40px rgba(34,211,238,0.08)",
        }}
      />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] font-black px-3 py-1.5 rounded-full bg-black/60 text-white border border-white/15 backdrop-blur-md tracking-wider uppercase">
          {project.category}
        </span>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-white/15 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 backdrop-blur-md transition-colors duration-200"
            >
              <Github size={14} />
            </motion.a>
          )}
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              title="Live Demo"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-white/15 text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 backdrop-blur-md transition-colors duration-200"
            >
              <ExternalLink size={14} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base text-white leading-tight group-hover:text-cyan-300 transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowUpRight
            size={17}
            className="shrink-0 mt-0.5 text-cyan-500/50 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>

        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {allTechs.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/8 text-cyan-400 border border-cyan-500/15 hover:bg-cyan-500/15 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
          {allTechs.length > 5 && (
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/8 cursor-default">
              +{allTechs.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/60 transition-all duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
