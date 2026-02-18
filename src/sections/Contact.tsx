import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "subrata17@cse.pstu.ac.bd",
      href: "mailto:subrata17@cse.pstu.ac.bd",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/subrata-24",
      href: "https://github.com/subrata-24",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/subrata-biswas",
      href: "https://linkedin.com/in/subrata-biswas-9a0469296/",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Patuakhali, Bangladesh",
      href: "#",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50"
    >
      <Container>
        <SectionTitle title="💬 Get In Touch" />

        {/* Contact Methods - One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <a
                key={index}
                href={method.href}
                target={method.href !== "#" ? "_blank" : undefined}
                rel={method.href !== "#" ? "noopener noreferrer" : undefined}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-2.5 sm:p-3 bg-linear-to-br ${method.gradient} rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>

                  {/* Title */}
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">
                    {method.title}
                  </p>

                  {/* Value */}
                  <p className="text-sm sm:text-base font-bold text-gray-900 mb-3">
                    {method.value}
                  </p>

                  {/* Connect Button */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-cyan-700 transition-all">
                    Connect <Send size={14} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
