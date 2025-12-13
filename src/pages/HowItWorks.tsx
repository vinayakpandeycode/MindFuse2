import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Camera, ScanFace, Brain, BarChart3, FileDown, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Camera Access",
    description: "Grant webcam permission for real-time video capture. Your privacy is our priority – all processing happens locally.",
  },
  {
    icon: ScanFace,
    title: "Face Detection",
    description: "Our AI instantly detects faces in the video stream using advanced computer vision algorithms.",
  },
  {
    icon: Brain,
    title: "Emotion Classification",
    description: "A trained neural network analyzes facial features to classify emotions into 6 categories.",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "View real-time emotion data visualized through interactive charts and graphs.",
  },
  {
    icon: FileDown,
    title: "Generate Reports",
    description: "Export detailed emotion analysis reports in PDF format for documentation and sharing.",
  },
];

const HowItWorks = () => {
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
            <h1 className="section-title mb-4">How It Works</h1>
            <p className="section-subtitle">
              From webcam to insights in milliseconds. Here's the magic behind MindFuse.
            </p>
          </motion.div>

          {/* Flow Diagram */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />

              {/* Steps */}
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Icon */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center glow">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 card-glass">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-primary font-bold">Step {i + 1}</span>
                        {i < steps.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 card-glass max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Technical Pipeline</h2>
            <div className="bg-secondary rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
{`┌─────────────────────────────────────────────────────────────────┐
│                        USER'S DEVICE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────┐    ┌──────────────┐    ┌─────────────────────┐   │
│   │  Webcam  │───▶│   React.js   │───▶│  face-api.js (ML)   │   │
│   │  Stream  │    │   Frontend   │    │  TensorFlow.js      │   │
│   └──────────┘    └──────────────┘    └──────────┬──────────┘   │
│                                                   │              │
│                         ┌─────────────────────────▼────────────┐ │
│                         │           Emotion Output             │ │
│                         │  Happy | Sad | Angry | Fear |        │ │
│                         │  Surprise | Neutral                  │ │
│                         └─────────────────────────┬────────────┘ │
│                                                   │              │
│   ┌──────────────────────────────────────────────▼────────────┐ │
│   │                    Dashboard Display                       │ │
│   │  📊 Real-time Charts  📈 Emotion Timeline  📥 PDF Export  │ │
│   └────────────────────────────────────────────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </motion.div>

          {/* Emotions Detected */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Emotions We Detect</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Happy", color: "bg-emotion-happy", emoji: "😊" },
                { name: "Sad", color: "bg-emotion-sad", emoji: "😢" },
                { name: "Angry", color: "bg-emotion-angry", emoji: "😠" },
                { name: "Fear", color: "bg-emotion-fear", emoji: "😨" },
                { name: "Surprise", color: "bg-emotion-surprise", emoji: "😲" },
                { name: "Neutral", color: "bg-emotion-neutral", emoji: "😐" },
              ].map((emotion, i) => (
                <motion.div
                  key={emotion.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-glass text-center"
                >
                  <div className="text-4xl mb-2">{emotion.emoji}</div>
                  <div className={`inline-block w-3 h-3 rounded-full ${emotion.color} mb-2`} />
                  <div className="text-sm font-medium text-foreground">{emotion.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
