import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50/50"
    >
      <Container>
        <div className="mb-8">
          <SectionTitle title="👤 About Me" />
        </div>

        {/* Main Content - Single Paragraph */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
            I'm Subrata Biswas, a Computer Science graduate from Patuakhali
            Science and Technology University, with a strong foundation in
            problem-solving, data structures, and algorithms. I'm deeply
            involved in competitive programming, having participated in ICPC and
            multiple IUPCs and solved over 2500 problems across various
            platforms. Alongside that, I have hands-on experience in full-stack
            development using React.js, Node.js, Express.js, MongoDB, MySQL, and
            Socket.IO. I've built real-world applications like MealMate and
            MockMaster, featuring real-time systems, secure authentication, and
            scalable backend architecture. I'm passionate about building
            efficient systems and continuously growing as an engineer.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
