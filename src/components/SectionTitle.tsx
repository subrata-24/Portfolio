type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = true }: Props) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {/* Decorative Line */}
      <div className="flex items-center justify-center mt-6 space-x-2">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-indigo-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;