import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { 
  Code2, Database, Brain, Layout as LayoutIcon, Server, Cloud,
  ExternalLink
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: LayoutIcon,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React.js", description: "Component-based UI library" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "Framer Motion", description: "Smooth animations" },
      { name: "Recharts", description: "Data visualization" },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "from-primary to-glow-secondary",
    technologies: [
      { name: "face-api.js", description: "Face detection & recognition" },
      { name: "TensorFlow.js", description: "Browser-based ML" },
      { name: "CNN Model", description: "Emotion classification" },
      { name: "WebRTC", description: "Real-time video capture" },
    ],
  },
  {
    title: "Backend (Optional)",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "FastAPI", description: "High-performance Python API" },
      { name: "OpenCV", description: "Computer vision processing" },
      { name: "NumPy", description: "Numerical computing" },
      { name: "JWT Auth", description: "Secure authentication" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 to-amber-500",
    technologies: [
      { name: "MongoDB", description: "NoSQL document store" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Redis", description: "Session caching" },
    ],
  },
  {
    title: "Deployment",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Vercel", description: "Frontend hosting" },
      { name: "Render", description: "Backend deployment" },
      { name: "Railway", description: "Database hosting" },
    ],
  },
];

const TechStack = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="section-title mb-4">Tech Stack</h1>
            <p className="section-subtitle">
              Built with modern, battle-tested technologies for performance and reliability.
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {techCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.technologies.map((tech, j) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-foreground">{tech.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Reference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 card-glass max-w-2xl mx-auto text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Open Source Reference</h3>
            <p className="text-muted-foreground mb-6">
              Our emotion detection implementation is inspired by cutting-edge open-source projects.
            </p>
            <a
              href="https://github.com/susantabiswas/realtime-facial-emotion-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <ExternalLink className="w-4 h-4" />
              View Reference Repository
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TechStack;
