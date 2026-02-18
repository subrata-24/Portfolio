export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  github?: string;
  liveDemo?: string;
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
    other?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "mockmaster",
    title: "MockMaster",
    description:
      "AI-powered mock interview platform that helps you ace technical and behavioral interviews with real-time feedback.",
    fullDescription:
      "MockMaster is a full-stack AI-powered mock interview platform designed to help job seekers prepare for technical and behavioral interviews. It provides a realistic interview experience with instant AI feedback, performance scoring, and personalized improvement tips. Users can practice with role-specific questions, track their progress over time, and get detailed analysis on their answers.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
    category: "AI / SaaS",
    github: "https://github.com/subrata-24/MockMaster",
    liveDemo: "https://mockmaster-1.onrender.com/",
    features: [
      "AI-driven question generation tailored to job roles",
      "Real-time answer evaluation and scoring",
      "Detailed feedback with improvement suggestions",
      "Progress tracking across multiple sessions",
      "Support for technical and behavioral interview types",
      "Clean, distraction-free interview environment",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "Vite"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      other: ["Google Gemini API", "JWT Auth"],
    },
  },
  {
    id: "mealmate",
    title: "MealMate",
    description:
      "Smart meal planning and recipe discovery app that tailors suggestions based on your preferences and available ingredients.",
    fullDescription:
      "MealMate is a full-stack recipe and meal planning application that simplifies daily cooking decisions. It allows users to discover recipes based on available ingredients, dietary preferences, and nutritional goals. The app features a weekly meal planner, automated grocery list generation, and a curated recipe database. With a clean and intuitive interface, it makes healthy eating effortless and enjoyable.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=80",
    category: "Lifestyle",
    github: "https://github.com/subrata-24/MealMate",
    liveDemo: "https://mealmate-1-yza8.onrender.com/",
    features: [
      "Recipe discovery based on available ingredients",
      "Weekly meal planner with drag-and-drop support",
      "Automatic grocery list generation",
      "Dietary filters (vegan, gluten-free, keto, etc.)",
      "Nutritional info per recipe",
      "Save and organize favorite recipes",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      other: ["Spoonacular API", "JWT Auth"],
    },
  },
  {
    id: "job-portal",
    title: "Job Portal",
    description:
      "A full-featured job board connecting recruiters and candidates with powerful search, filtering, and application management.",
    fullDescription:
      "Job Portal is a comprehensive full-stack job board platform built to connect employers and job seekers efficiently. Recruiters can post detailed job listings, manage applications, and filter candidates. Job seekers can browse opportunities, apply directly, track their applications, and get matched to relevant roles. The platform features role-based authentication, a clean dashboard for both user types, and a powerful search engine with advanced filters.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
    category: "Full-Stack",
    github: "https://github.com/subrata-24/Job-Portal",
    features: [
      "Role-based auth for recruiters and candidates",
      "Post, edit, and manage job listings",
      "Advanced search with filters (location, salary, type)",
      "Application tracking for both parties",
      "Resume upload and profile management",
      "Real-time application status updates",
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "Redux Toolkit"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      other: ["Cloudinary", "JWT Auth", "Multer"],
    },
  },
];
