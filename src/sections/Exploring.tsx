import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import { Rocket, Server, Cloud, Brain, GitBranch, Lock } from "lucide-react";

const Exploring = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const topics = [
    {
      emoji: "🌐",
      icon: Server,
      title: "Distributed Systems",
      description: "Microservices, message queues, and distributed databases that power the internet",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      emoji: "📈",
      icon: Cloud,
      title: "Scalability Patterns",
      description: "Horizontal scaling, caching strategies, and intelligent load balancing",
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      emoji: "🏗️",
      icon: GitBranch,
      title: "System Architecture",
      description: "Event-driven systems and clean architecture principles that last",
      gradient: "from-teal-600 to-emerald-600"
    },
    {
      emoji: "🔐",
      icon: Lock,
      title: "Security Best Practices",
      description: "Authentication patterns and secure API design that protects users",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      emoji: "🤖",
      icon: Brain,
      title: "AI Integration",
      description: "LLM APIs and AI-powered features that enhance user experience",
      gradient: "from-green-600 to-blue-600"
    },
    {
      emoji: "🚀",
      icon: Rocket,
      title: "DevOps & CI/CD",
      description: "Docker, Kubernetes, and automated pipelines for seamless deployment",
      gradient: "from-blue-600 to-cyan-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 rounded-full mb-3 sm:mb-4">
            <Rocket className="w-3 sm:w-4 h-3 sm:h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold text-blue-600">🧠 Continuous Learning</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Currently
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Exploring
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Always diving deeper into advanced concepts. I'm passionate about staying on the cutting edge of software engineering and building systems that scale.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-xl sm:rounded-2xl -z-10 blur-lg`}></div>

                {/* Emoji */}
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {topic.emoji}
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`flex-shrink-0 p-2 sm:p-2.5 bg-gradient-to-br ${topic.gradient} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                    {topic.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
                  {topic.description}
                </p>

                {/* Progress Indicator */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-1 h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${topic.gradient} rounded-full animate-pulse`} style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">In Progress</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-10 sm:mt-12 md:mt-14 lg:mt-16 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            🌟 Love open-source and continuous learning? Check out my<span className="font-bold"> </span>
            <a href="https://github.com/subrata-24" target="_blank" rel="noopener noreferrer" className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:underline">
              GitHub
            </a>
            <span className="font-bold"> </span>for projects and contributions.
          </p>
        </div>

      </Container>
    </section>
  );
};

export default Exploring;