import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { AlertTriangle, Target, CheckCircle, Lightbulb } from "lucide-react";

const About = () => {
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
            <h1 className="section-title mb-4">About MindFuse</h1>
            <p className="section-subtitle">
              Understanding emotions is the first step to building a more empathetic world.
            </p>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Human emotions are complex and often go unnoticed in digital interactions. In remote education, 
                  teachers can't see student frustration. In telehealth, therapists miss crucial emotional cues. 
                  HR teams struggle to fairly evaluate candidates without in-person meetings. The lack of emotional 
                  insight in digital spaces creates barriers to effective communication and understanding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Why Emotion Detection Matters</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Emotions drive human behavior, decision-making, and well-being. By understanding emotions in real-time:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Educators can adapt teaching methods to student emotional states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mental health professionals can track emotional patterns for better treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Organizations can create more empathetic and supportive environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Researchers can gather valuable data on human behavior and responses</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MindFuse leverages cutting-edge AI and computer vision to analyze facial expressions in real-time. 
                  Using advanced neural networks trained on millions of facial expressions, our platform can detect 
                  six primary emotions with high accuracy. The system provides instant feedback, historical analytics, 
                  and exportable reports – all through a simple webcam interface. Privacy-focused and designed for 
                  accessibility, MindFuse makes emotion intelligence available to everyone.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Use Cases Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Real-World Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Online Education",
                  description: "Track student engagement and emotional responses during virtual classes.",
                },
                {
                  title: "Mental Healthcare",
                  description: "Monitor patient emotions during therapy sessions for better treatment outcomes.",
                },
                {
                  title: "HR & Recruitment",
                  description: "Gain insights into candidate emotions during video interviews.",
                },
                {
                  title: "User Research",
                  description: "Understand user emotional responses to products and interfaces.",
                },
                {
                  title: "Customer Service",
                  description: "Detect customer frustration to improve support experiences.",
                },
                {
                  title: "Academic Research",
                  description: "Collect emotion data for psychology and behavioral studies.",
                },
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
