import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const interests = [
  {
    emoji: "🌐",
    title: "Distributed Systems",
    description: "Microservices, message queues, and systems that scale",
    accent: "#22d3ee",
    glow: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.25)",
  },
  {
    emoji: "⚡",
    title: "Real-Time Applications",
    description: "Live features with instant feedback and synchronization",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.25)",
  },
  {
    emoji: "🏗️",
    title: "System Architecture",
    description: "Event-driven systems and clean architecture principles",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.25)",
  },
  {
    emoji: "🔐",
    title: "Security Best Practices",
    description: "Authentication patterns and secure API design",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.25)",
  },
  {
    emoji: "🤖",
    title: "AI Integration",
    description: "LLM APIs and AI-powered features",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
  },
  {
    emoji: "🚀",
    title: "DevOps & CI/CD",
    description: "Docker, Kubernetes, and automated deployment pipelines",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.25)",
  },
];

const EnjoyBuilding = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#07070f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-700/5 rounded-full blur-[80px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle title="💡 What I'm Interested In" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {interests.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              whileHover={{ y: -5 }}
              style={{ transition: "box-shadow 0.3s" }}
              className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 overflow-hidden cursor-default"
            >
              {/* Hover glow bg */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 30% 40%, ${item.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1.5px ${item.border}` }}
              />

              <div className="relative z-10">
                {/* Emoji */}
                <motion.div
                  className="text-4xl mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.emoji}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-white mb-2 group-hover:transition-colors duration-200"
                  style={{ color: undefined }}
                >
                  <span
                    className="group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, #fff, ${item.accent})`,
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    {item.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-200">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EnjoyBuilding;
