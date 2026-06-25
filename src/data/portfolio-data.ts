// =============================================================================
// PORTFOLIO DATA
// =============================================================================

export const personalInfo = {
  name: "Dhanush Pujari",
  firstName: "Dhanush",
  title: "AI Engineer & Software Developer",
  tagline: "Building Intelligent Systems That Solve Real-World Problems",
  subtitle: "AI/ML Engineer · Full-Stack Developer",
  email: "dhanushpujariwork@gmail.com",
  phone: "+91 9030348946",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/dhanush-pujari-37173021a/",
  github: "https://github.com/dhanu31003", // Updated GitHub profile link
  resumeUrl: "/Resume.pdf", // Add the resume.pdf to public folder to link here
  profileImage: "/rounded_profile.png",
  profileImageFull: "/profile.png",
};

export const aboutData = {
  paragraphs: [
    "I am an AI Engineer and Full-Stack Developer with a deep passion for building intelligent systems that solve real-world problems. Currently pursuing my B.Tech in Artificial Intelligence at Mahindra University, I bridge the gap between complex machine learning models and intuitive user applications.",
    "My expertise spans developing generative AI platforms, orchestrating semantic search engines using vector databases, and engineering robust full-stack applications. From optimizing GPU-accelerated video pipelines to developing real-time virtual try-on technology, I thrive on tackling challenging technical problems.",
    "Whether it's training predictive models for algorithmic trading, creating real-time emotional support chatbots, or building immersive AR/VR experiences, I am driven by the impact of deploying production-ready software.",
  ],
  highlights: [
    { label: "Core Projects", value: "6+" },
    { label: "AI/ML Models", value: "10+" },
    { label: "Internships", value: "3" },
    { label: "Graduation", value: "2025" },
  ],
};

export const skillCategories = [
  {
    name: "Machine Learning & AI",
    icon: "Brain",
    color: "#8b5cf6",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "XGBoost", level: 85 },
      { name: "Hugging Face Transformers", level: 88 },
      { name: "NLP", level: 85 },
      { name: "RAG", level: 90 },
      { name: "Qdrant Vector Database", level: 85 },
      { name: "Stable Diffusion", level: 80 },
    ],
  },
  {
    name: "Data & Computer Vision",
    icon: "Eye",
    color: "#ec4899",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "OpenCV", level: 85 },
      { name: "FFmpeg", level: 80 },
      { name: "Data Preprocessing", level: 90 },
      { name: "Feature Engineering", level: 88 },
    ],
  },
  {
    name: "Programming Languages",
    icon: "Code",
    color: "#06b6d4",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    name: "Web & Backend",
    icon: "Server",
    color: "#10b981",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "React", level: 88 },
      { name: "React Three Fiber", level: 75 },
      { name: "Streamlit", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
];

export const allSkillNames = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => s.name)
);

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  type: "work" | "education" | "leadership";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "AR/VR Developer Intern",
    organization: "Snapchat",
    duration: "March 2025 – July 2025",
    type: "work",
    description:
      "Contributed to the development of an indoor navigation API for Snapchat Spectacles using Augmented Reality.",
    achievements: [
      "Assisted in improving spatial mapping algorithms and user experience for real-time navigation.",
      "Conducted testing and validation of AR navigation features to improve performance and accuracy.",
    ],
    technologies: ["Augmented Reality", "Spatial Mapping", "Snapchat Spectacles"],
  },
  {
    id: "exp-2",
    title: "Machine Learning Intern",
    organization: "Corizo",
    duration: "Sept 2023 – Nov 2023",
    type: "work",
    description:
      "Worked on predictive modeling and data analysis for financial and consumer datasets.",
    achievements: [
      "Performed data analysis on historical stock market datasets and trained baseline machine learning models.",
      "Developed classification models for wine quality prediction and evaluation.",
    ],
    technologies: ["Machine Learning", "Data Analysis", "Classification Models"],
  },
  {
    id: "exp-3",
    title: "App Developer",
    organization: "HNWI Food Mart",
    duration: "April 2021 – Aug 2021",
    type: "work",
    description:
      "Designed and developed a mobile application based on business and user requirements.",
    achievements: [
      "Conducted UX research, user testing, and UI/UX design improvements.",
      "Collaborated on feature planning and application optimization.",
    ],
    technologies: ["App Development", "UX Research", "UI/UX Design"],
  },
  {
    id: "edu-1",
    title: "Bachelor of Technology in Artificial Intelligence",
    organization: "Mahindra University",
    duration: "Graduating: Aug 2025",
    type: "education",
    description:
      "Pursuing a specialized B.Tech degree focused on Artificial Intelligence and its applications.",
    achievements: [
      "Developing foundational and advanced skills in Machine Learning, Computer Vision, and NLP.",
      "Actively building full-stack AI applications and participating in hackathons.",
    ],
    technologies: ["AI", "Machine Learning", "Computer Science"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  challenges: string;
  outcomes: string;
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AI Semantic Media Search Engine",
    subtitle: "Vector Embeddings & RAG",
    description:
      "A semantic search engine utilizing vector embeddings to retrieve media through natural language queries.",
    longDescription:
      "Built a highly efficient semantic search engine using vector embeddings and Qdrant to retrieve media based on natural language queries. Optimized data ingestion pipelines to handle large volumes of data securely and efficiently.",
    category: "AI/ML",
    technologies: ["Python", "PyTorch", "Hugging Face", "Qdrant", "Streamlit"],
    features: [
      "Natural language media retrieval via vector embeddings",
      "Optimized data ingestion pipeline (216+ records/second)",
      "Streamlit UI for interactive querying",
    ],
    challenges:
      "Resolved concurrency and memory bottlenecks between Streamlit and PyTorch deployments during high-throughput ingestion.",
    outcomes:
      "Achieved high-speed ingestion (216+ records/sec) while preventing memory bottlenecks in deployment.",
    featured: true,
  },
  {
    id: "proj-2",
    title: "AutoClip-ML",
    subtitle: "GPU-Accelerated Video Highlight Pipeline",
    description:
      "An NLP-driven pipeline that automatically extracts high-retention video highlights and generates vertical short-form content.",
    longDescription:
      "Developed an automated NLP-driven pipeline utilizing DistilBERT and OpenAI Whisper to process long-form videos and extract high-retention highlights. The system automatically reformats videos into vertical short-form content with dynamic subtitles using FFmpeg.",
    category: "AI/ML",
    technologies: ["PyTorch", "OpenAI Whisper", "DistilBERT", "FFmpeg", "Pandas"],
    features: [
      "Automated extraction of high-retention highlights",
      "Dynamic subtitle generation with OpenAI Whisper",
      "Automated vertical format cropping via FFmpeg",
      "Optimized for local GPU execution",
    ],
    challenges:
      "Managed strict GPU memory constraints for efficient local execution while running multiple intensive ML models concurrently.",
    outcomes:
      "Successfully automated the creation of vertical short-form content from long videos with highly accurate subtitles and framing.",
    featured: true,
  },
  {
    id: "proj-3",
    title: "End-to-End Algorithmic Trading Signal Predictor",
    subtitle: "Quantitative Prediction Platform",
    description:
      "A quantitative prediction platform for Nifty 50 market forecasting using XGBoost and engineered financial indicators.",
    longDescription:
      "Developed a robust quantitative trading signal predictor for the Nifty 50 index. The project involved deep feature engineering of financial indicators, addressing class imbalance, and deploying the model through a FastAPI and React stack.",
    category: "Data/Backend",
    technologies: ["XGBoost", "Pandas", "yFinance", "Scikit-Learn", "FastAPI", "React"],
    features: [
      "Market forecasting using XGBoost",
      "Engineered financial indicators",
      "Class imbalance handling",
      "Full-stack deployment (React + FastAPI)",
    ],
    challenges:
      "Addressing severe class imbalance in market data and engineering robust financial features that maintain predictive power out-of-sample.",
    outcomes:
      "Achieved 53.54% out-of-sample directional accuracy and a 24.77% cumulative backtested return.",
    featured: true,
  },
  {
    id: "proj-4",
    title: "AI Architectural Style Studio",
    subtitle: "Stable Diffusion Generative Platform",
    description:
      "A generative AI platform for transforming architectural models into photorealistic renders using Stable Diffusion.",
    longDescription:
      "Built a generative AI platform that transforms basic architectural models into stunning, photorealistic renders. Integrated ControlNet and OpenCV to ensure structural accuracy is strictly preserved during the image generation process.",
    category: "AI/ML",
    technologies: ["Stable Diffusion", "ControlNet", "OpenCV", "FastAPI", "React Three Fiber"],
    features: [
      "Photorealistic render generation from basic models",
      "Structural accuracy preservation using ControlNet & OpenCV",
      "Immersive 3D web interface via React Three Fiber",
      "Optimized inference for consumer-grade GPUs",
    ],
    challenges:
      "Optimizing heavy generative AI inference pipelines to run smoothly on consumer-grade GPU hardware without sacrificing render quality.",
    outcomes:
      "Delivered a seamless tool that vastly accelerates the architectural visualization process while keeping compute requirements accessible.",
    featured: true,
  },
  {
    id: "proj-5",
    title: "BodySync",
    subtitle: "Real-Time Virtual Try-On Application",
    description:
      "A virtual try-on platform using computer vision and generative AI techniques for realistic clothing visualization.",
    longDescription:
      "Developing a state-of-the-art virtual try-on platform that leverages advanced computer vision and generative AI. The application enables users to visualize clothing on themselves realistically in real-time.",
    category: "AI/CV",
    technologies: ["Computer Vision", "Generative AI", "Python", "React"],
    features: [
      "Realistic clothing visualization",
      "Real-time processing capabilities",
      "Integration of advanced computer vision techniques",
    ],
    challenges:
      "Ensuring real-time performance while maintaining high visual fidelity and accurate clothing physics/draping.",
    outcomes:
      "Currently in development, demonstrating strong potential for transforming e-commerce fashion retail.",
    featured: false,
  },
  {
    id: "proj-6",
    title: "AI-Powered Emotional Support Chatbot",
    subtitle: "Real-Time Speech Interaction",
    description:
      "A real-time emotional support chatbot using OpenAI Realtime APIs with speech-to-speech interaction.",
    longDescription:
      "Developed a responsive and empathetic emotional support chatbot that utilizes OpenAI's Realtime APIs. The system features seamless speech-to-speech interaction and provides sentiment-aware responses to support users.",
    category: "AI/NLP",
    technologies: ["OpenAI API", "Speech-to-Speech", "NLP", "Python", "Node.js"],
    features: [
      "Real-time speech-to-speech interaction",
      "Sentiment-aware empathetic responses",
      "Low-latency voice processing",
    ],
    challenges:
      "Handling real-time audio streams with low latency while accurately parsing emotional sentiment to generate appropriate empathetic responses.",
    outcomes:
      "Successfully built a functional emotional support companion demonstrating the capabilities of modern real-time voice AI.",
    featured: false,
  },
];

export const projectCategories = ["All", "AI/ML", "Data/Backend", "AI/CV", "AI/NLP"];

export const publications: { title: string; venue: string; date: string; link?: string; abstract: string; }[] = [];

export interface Leadership {
  title: string;
  organization: string;
  duration: string;
  description: string;
  icon: string;
}

export const leadership: Leadership[] = [
  {
    title: "Head",
    organization: "8Counts Dance Club – Mahindra University",
    duration: "2023 – 2024",
    description:
      "Led university dance club activities, orchestrated event planning, and managed team coordination for major performances.",
    icon: "Users",
  },
  {
    title: "Top Participant",
    organization: "HULT Prize",
    duration: "Award",
    description:
      "Recognized as a top participant in the HULT Prize, demonstrating innovation and entrepreneurial thinking.",
    icon: "Trophy",
  },
  {
    title: "Winner",
    organization: "Battle of the Beats",
    duration: "Award",
    description:
      "Secured 1st place in the Battle of the Beats competition.",
    icon: "Award",
  },
  {
    title: "1st Place",
    organization: "Francophone Competition",
    duration: "Award",
    description:
      "Achieved 1st place in the university-wide Francophone Competition.",
    icon: "Medal",
  },
];

export const certifications: { title: string; issuer: string; date: string; icon: string; }[] = [];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
