import { useEffect, useState } from "react";
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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-stone-50 via-gray-50 to-slate-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        {/* Floating Orbs - More Natural */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-slate-200 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-normal filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-stone-200 rounded-full mix-blend-normal filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center py-10 md:py-20">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 flex gap-3 sm:gap-4 md:gap-6 flex-wrap">
                <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">
                  Subrata
                </span>
                <span className="bg-gradient-to-r from-slate-700 via-gray-700 to-slate-600 bg-clip-text text-transparent">
                  Biswas
                </span>
              </h1>

              {/* Typewriter Effect */}
              <div className="h-10 sm:h-12 flex items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
                  {text}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
              I love building{" "}
              <span className="font-semibold text-gray-900">
                scalable systems
              </span>{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                real-time applications
              </span>{" "}
              that actually solve real problems. Passionate about clean code,{" "}
              <span className="font-semibold text-gray-900">
                competitive programming
              </span>
              , and mentoring the next generation of developers.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200/60 hover:shadow-lg hover:shadow-blue-500/15 transition-all hover:scale-105 hover:border-blue-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  2500+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Algorithms Solved
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200/60 hover:shadow-lg hover:shadow-amber-500/15 transition-all hover:scale-105 hover:border-amber-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  3×
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  ICPC Dhaka Regionalist
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-200/60 hover:shadow-lg hover:shadow-emerald-500/15 transition-all hover:scale-105 hover:border-emerald-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Students Mentored
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl sm:rounded-2xl font-semibold shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2 text-sm sm:text-base"
              >
                <span>Check Out My Work</span>
                <ArrowDown className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-100 to-gray-50 border-2 border-gray-300 text-gray-900 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base text-center"
              >
                Get My Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-4">
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                Let's connect:
              </span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/subrata-24",
                  label: "GitHub",
                  color: "hover:text-gray-900",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/subrata-biswas-9a0469296/",
                  label: "LinkedIn",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Mail,
                  href: "mailto:subrata17@cse.pstu.ac.bd",
                  label: "Email",
                  color: "hover:text-red-500",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`group p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-500/20 transition-all hover:scale-110 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative image-entrance">
              {/* Ambient Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-slate-200/40 via-gray-100/30 to-stone-200/40 rounded-2xl sm:rounded-[2rem] blur-2xl opacity-60"></div>

              {/* Image Container */}
              <div className="relative perspective-container">
                {/* Main Image with Entrance Animation */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-gradient-to-br from-gray-50 to-stone-100 p-1">
                  <img
                    src={profile}
                    alt="Subrata Biswas"
                    className="w-64 sm:w-80 md:w-96 lg:w-96 h-auto aspect-square object-cover rounded-lg sm:rounded-xl transform transition-all duration-700 hover:scale-105"
                  />

                  {/* Subtle Border Accent */}
                  <div className="absolute inset-0 rounded-2xl border border-white/60 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-1 sm:space-y-2">
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            ✨ Scroll down to see more
          </span>
          <ArrowDown className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
        </div>
      </div>

      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
        
        /* Image Entrance Animations */
        .image-entrance {
          animation: imageSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes imageSlideIn {
          0% {
            opacity: 0;
            transform: translateX(60px) rotateY(-15deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
        
        .perspective-container {
          perspective: 1000px;
        }
        
        .perspective-container > div {
          animation: imageReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes imageReveal {
          0% {
            opacity: 0;
            transform: rotateY(25deg) scale(0.9);
            filter: blur(8px);
          }
          50% {
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: rotateY(0deg) scale(1);
            filter: blur(0px);
          }
        }
        
        .perspective-container img {
          animation: imageFadeIn 1.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes imageFadeIn {
          0% {
            opacity: 0;
            filter: grayscale(100%) brightness(0.5);
          }
          60% {
            filter: grayscale(50%) brightness(0.8);
          }
          100% {
            opacity: 1;
            filter: grayscale(0%) brightness(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
