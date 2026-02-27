import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Container from "../components/Container";
import profile from "../assets/profile.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

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
      const i = loopNum % titles.length;
      const fullText = titles[i];
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
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay,
      },
    },
  });

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
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Orbs */}
        <div className="absolute top-16 left-16 w-[28rem] h-[28rem] bg-cyan-600/10 rounded-full filter blur-[80px] animate-blob" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-700/10 rounded-full filter blur-[70px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-indigo-700/10 rounded-full filter blur-[60px] animate-blob animation-delay-4000" />

        {/* Radial spotlight */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center py-16 md:py-24">
          {/* ── Left Content ── */}
          <div className="space-y-8 z-10">
            {/* Name */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-4">
                <span className="text-white">Subrata</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  Biswas
                </span>
              </h1>

              {/* Typewriter */}
              <div className="h-10 sm:h-12 flex items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">
                  {text}
                  <span className="animate-pulse text-cyan-400">|</span>
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl"
            >
              I love building{" "}
              <span className="font-semibold text-white">scalable systems</span>{" "}
              and{" "}
              <span className="font-semibold text-cyan-400">
                real-time applications
              </span>{" "}
              that actually solve real problems. Passionate about clean code,{" "}
              <span className="font-semibold text-white">
                competitive programming
              </span>
              , and mentoring the next generation of developers.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-white/3 backdrop-blur-sm rounded-2xl p-4 border border-white/8 ${stat.border} hover:shadow-lg ${stat.glow} transition-all duration-300 cursor-pointer`}
                >
                  <div
                    className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative">Check Out My Work</span>
                <ArrowDown className="relative w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden px-7 py-3.5 rounded-xl font-semibold border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 text-white transition-all text-sm text-center"
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
                <span className="relative">Get My Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                Let's connect
              </span>
              <div className="w-8 h-px bg-gray-700" />
              {socials.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl border border-white/8 bg-white/4 text-gray-400 transition-all duration-200 ${hoverColor} hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right – Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute -inset-3 rounded-2xl border border-cyan-500/15 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-3xl border border-blue-500/8 animate-spin-slow-reverse" />

              {/* Glow halo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-indigo-600/15 rounded-3xl blur-2xl" />

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60 bg-gradient-to-br from-gray-900 to-slate-900 p-1"
              >
                <img
                  src={profile}
                  alt="Subrata Biswas"
                  className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto aspect-square object-cover rounded-xl"
                />
                {/* Overlay sheen */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#07070f]/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-cyan-500/60" />
        </motion.div>
      </motion.div>

      {/* ── Custom CSS ── */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 24s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
