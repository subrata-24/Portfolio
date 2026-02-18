import { useEffect, useState, useRef } from "react";
import Container from "../components/Container";
import { Trophy, Code, Award, Users, Target } from "lucide-react";

const AchievementStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      icon: Trophy,
      label: "🏆 ICPC Finalist",
      value: "3×",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Code,
      label: "💡 Problems Cracked",
      value: "2500+",
      color: "from-blue-600 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Target,
      label: "⚡ Codeforces Specialist",
      value: "1800+",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200"
    },
    {
      icon: Award,
      label: "👑 PSTU Champion",
      value: "2025",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: Users,
      label: "✏️ Contest Setter",
      value: "NHSPC",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-8 sm:py-10 md:py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200/50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e5e7eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Container>
        <div className="relative">
          
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-bold text-gray-700 uppercase tracking-wider">
              <span className="w-4 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></span>
              <span>✨ Highlights & Wins</span>
              <span className="w-4 sm:w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></span>
            </h3>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group relative ${achievement.bgColor} ${achievement.borderColor} border-2 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:shadow-lg hover:shadow-gray-400/20 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                  
                  <div className="relative flex flex-col items-center text-center gap-2 sm:gap-3">
                    
                    {/* Icon */}
                    <div className={`relative p-2 sm:p-3 bg-gradient-to-br ${achievement.color} rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                      
                      {/* Icon Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-lg sm:rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                    </div>

                    {/* Value */}
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-br ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.value}
                    </div>

                    {/* Label */}
                    <div className="text-xs sm:text-xs md:text-sm font-semibold text-gray-700 leading-tight">
                      {achievement.label}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-br ${achievement.color} rounded-full opacity-50`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-gray-700">🏅 12th — Uttara IUPC 2025</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-gray-700">⭐ CodeChef 4★ • 1814 Max</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-gray-700">🎯 LeetCode 1710 Max</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AchievementStrip;