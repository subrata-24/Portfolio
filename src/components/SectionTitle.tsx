import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = true }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-400">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="text-base text-gray-400 max-w-2xl mx-auto mt-3 leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative Line */}
      <div
        className={`flex items-center mt-6 space-x-2 ${centered ? "justify-center" : ""}`}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-12 h-[2px] bg-gradient-to-r from-transparent to-cyan-500 rounded-full origin-right"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.45,
            type: "spring",
            stiffness: 300,
          }}
          className="w-2.5 h-2.5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-500 rounded-full origin-left"
        />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
