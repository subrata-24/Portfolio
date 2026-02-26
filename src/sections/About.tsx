import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const highlights = [
    { label: "University", value: "PSTU — CSE", icon: "🎓" },
    { label: "Focus", value: "Full-Stack + CP", icon: "💡" },
    { label: "Problems Solved", value: "2500+", icon: "⚡" },
    { label: "ICPC", value: "3× Regionalist", icon: "🏆" },
  ];

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Socket.IO",
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-28 bg-[#07070f] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/5 rounded-full blur-[80px]" />
      </div>

      <Container>
        <SectionTitle title="👤 About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── Main Bio Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative group"
          >
            {/* Glow border on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative h-full bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/20 transition-all duration-300">
              {/* Quote mark accent */}
              <div className="absolute top-5 right-6 text-5xl text-cyan-500/10 font-serif select-none leading-none">
                "
              </div>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-justify hyphens-auto">
                I'm{" "}
                <span className="font-semibold text-white">Subrata Biswas</span>
                , a Computer Science graduate from{" "}
                <span className="text-cyan-400 font-medium">
                  Patuakhali Science and Technology University
                </span>
                , with a strong foundation in problem-solving, data structures,
                and algorithms. I'm deeply involved in competitive programming,
                having participated in{" "}
                <span className="font-semibold text-white">ICPC</span> and
                multiple IUPCs and solved over{" "}
                <span className="font-semibold text-cyan-400">
                  2500 problems
                </span>{" "}
                across various platforms.
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4 text-justify hyphens-auto">
                Alongside that, I have hands-on experience in full-stack
                development. I've built real-world applications like{" "}
                <span className="font-semibold text-white">MealMate</span> and{" "}
                <span className="font-semibold text-white">MockMaster</span>,
                featuring real-time systems, secure authentication, and scalable
                backend architecture. I'm passionate about building efficient
                systems and continuously growing as an engineer.
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/6">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/12 hover:border-cyan-500/40 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Highlights Grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + i * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.04, x: -3 }}
                className="group relative bg-white/3 border border-white/8 rounded-2xl p-4 hover:border-cyan-500/25 hover:bg-white/5 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {item.value}
                    </div>
                  </div>
                </div>
                {/* Side accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-gradient-to-b from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
