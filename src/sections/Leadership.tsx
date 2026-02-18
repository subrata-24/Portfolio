import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import { Users, BookOpen, Award } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    { icon: "👨‍🎓", value: "150+", label: "Students Mentored" },
    { icon: "📈", value: "17→13", label: "National Rank Boost" },
    { icon: "🎯", value: "10+", label: "Events Organized" },
    { icon: "🧩", value: "15+", label: "Problems Created" },
  ];

  const roles = [
    {
      icon: Users,
      title: "CP Trainer",
      org: "PSTU",
      period: "Nov 2022 – Dec 2025",
      gradient: "from-blue-500 to-cyan-500",
      note: "Mentored 150+ students in DSA & CP. Improved national rank from 17th to 13th. Helped students secure ICPC regional spots.",
    },
    {
      icon: Award,
      title: "Vice President",
      org: "CSE Club, PSTU",
      period: "May 2025 – Dec 2025",
      gradient: "from-purple-500 to-pink-500",
      note: "Organized PSTU IUPC 2024 (South Zone). Led contests, hackathons, and technical workshops.",
    },
    {
      icon: BookOpen,
      title: "Problem Setter",
      org: "National High School Programming Contest(NHSPC)",
      period: "2025",
      gradient: "from-orange-500 to-red-500",
      note: "Designed 15+ algorithmic problems with test cases and editorials for the National High School Programming Contest.",
    },
  ];

  return (
    <section id="leadership" ref={sectionRef} className="py-20 bg-white">
      <Container>
        {/* Header */}
        <SectionTitle
          title="Leadership and Experience"
          subtitle="Mentoring, organizing, and building a thriving competitive
            programming community."
        />

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <div
                key={i}
                className={`group p-6 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div
                  className={`inline-flex p-3 bg-gradient-to-br ${role.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                  {role.title}
                </h3>
                <div
                  className={`text-sm font-semibold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent mb-0.5`}
                >
                  {role.org}
                </div>
                <div className="text-xs text-gray-400 mb-3">{role.period}</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {role.note}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Leadership;
