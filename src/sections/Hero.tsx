import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Container from "../components/Container";
import profile from "../assets/profile.png";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "👨‍💻 Software Engineer",
    "🏆 3× ICPC Regionalist",
    "⚡ Problem Solver",
    "🚀 Building Cool Stuff",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentIndex = loopNum % titles.length;
      const fullText = titles[currentIndex];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // ✅ Correct Framer Motion Variant Pattern
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    }),
  };

  const stats = [
    {
      value: "2500+",
      label: "Algorithms Solved",
      gradient: "from-cyan-400 to-blue-500",
      glow: "hover:shadow-cyan-500/20",
      border: "hover:border-cyan-500/40",
    },
    {
      value: "3×",
      label: "ICPC Dhaka Regionalist",
      gradient: "from-amber-400 to-orange-500",
      glow: "hover:shadow-amber-500/20",
      border: "hover:border-amber-500/40",
    },
    {
      value: "150+",
      label: "Students Mentored",
      gradient: "from-emerald-400 to-teal-500",
      glow: "hover:shadow-emerald-500/20",
      border: "hover:border-emerald-500/40",
    },
  ];

  const socials = [
    {
      icon: Github,
      href: "https://github.com/subrata-24",
      label: "GitHub",
      hoverColor: "hover:border-gray-400/50 hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/subrata-biswas-9a0469296/",
      label: "LinkedIn",
      hoverColor: "hover:border-blue-500/50 hover:text-blue-400",
    },
    {
      icon: Mail,
      href: "mailto:subrata17@cse.pstu.ac.bd",
      label: "Email",
      hoverColor: "hover:border-red-500/50 hover:text-red-400",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07070f]">
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 z-10">
            {/* Name */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-6xl font-extrabold tracking-tight leading-none">
                <span className="text-white">Subrata</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  Biswas
                </span>
              </h1>

              {/* Typewriter */}
              <div className="h-10 flex items-center mt-4">
                <h2 className="text-xl font-semibold text-gray-300">
                  {text}
                  <span className="animate-pulse text-cyan-400">|</span>
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={0.35}
              initial="hidden"
              animate="visible"
              className="text-gray-400 leading-relaxed max-w-xl"
            >
              I love building{" "}
              <span className="font-semibold text-white">scalable systems</span>{" "}
              and{" "}
              <span className="font-semibold text-cyan-400">
                real-time applications
              </span>{" "}
              that solve real problems.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={0.45}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-white/5 rounded-2xl p-4 border border-white/10 ${stat.border} hover:shadow-lg ${stat.glow} transition-all`}
                >
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              custom={0.6}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              {socials.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 ${hoverColor} transition-all`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <img
                src={profile}
                alt="Subrata Biswas"
                className="w-80 aspect-square object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
