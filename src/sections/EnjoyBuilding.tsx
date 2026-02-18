import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const EnjoyBuilding = () => {
  const interests = [
    {
      emoji: "🌐",
      title: "Distributed Systems",
      description: "Microservices, message queues, and systems that scale",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      emoji: "⚡",
      title: "Real-Time Applications",
      description: "Live features with instant feedback and synchronization",
      gradient: "from-cyan-600 to-teal-600",
    },
    {
      emoji: "🏗️",
      title: "System Architecture",
      description: "Event-driven systems and clean architecture principles",
      gradient: "from-teal-600 to-emerald-600",
    },
    {
      emoji: "🔐",
      title: "Security Best Practices",
      description: "Authentication patterns and secure API design",
      gradient: "from-emerald-600 to-green-600",
    },
    {
      emoji: "🤖",
      title: "AI Integration",
      description: "LLM APIs and AI-powered features",
      gradient: "from-green-600 to-blue-600",
    },
    {
      emoji: "🚀",
      title: "DevOps & CI/CD",
      description: "Docker, Kubernetes, and automated deployment pipelines",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle title="💡 What I'm Interested In" />

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {interests.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
              ></div>

              <div className="relative">
                {/* Emoji */}
                <div className="text-4xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {item.emoji}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EnjoyBuilding;
