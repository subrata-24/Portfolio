import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-cyan-50/30"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl bg-indigo-200/40 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl bg-cyan-200/30 opacity-40 pointer-events-none"></div>

      <Container className="relative z-10">
        <SectionTitle
          title="🚀 Projects I've Built"
          subtitle="Full-stack applications with real-time features, modern tech stacks, and genuine user value"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/subrata-24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-gray-900/30 hover:scale-105 transition-all"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
