import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "AI/ML Engineer",
    description: "Specializes in computer vision and deep learning for emotion recognition.",
    avatar: "🧑‍💻",
    socials: { github: "#", linkedin: "#" },
  },
  {
    name: "Team Member 2",
    role: "Frontend Developer",
    description: "Creates beautiful, responsive user interfaces with React and modern CSS.",
    avatar: "👩‍💻",
    socials: { github: "#", linkedin: "#" },
  },
  {
    name: "Team Member 3",
    role: "Backend Developer",
    description: "Builds scalable APIs and manages database architecture.",
    avatar: "🧑‍🔬",
    socials: { github: "#", linkedin: "#" },
  },
  {
    name: "Team Member 4",
    role: "UI/UX Designer",
    description: "Designs intuitive user experiences and compelling visual designs.",
    avatar: "👨‍🎨",
    socials: { github: "#", linkedin: "#" },
  },
];

const Team = () => {
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
            <h1 className="section-title mb-4">Meet the Team</h1>
            <p className="section-subtitle">
              The passionate minds behind MindFuse, built for Hackstrom 2025.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass text-center group"
              >
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform glow">
                  {member.avatar}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.description}</p>

                {/* Socials */}
                <div className="flex items-center justify-center gap-3">
                  <a href={member.socials.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hackathon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 glass rounded-full">
              <span className="text-2xl">🏆</span>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Built for</div>
                <div className="font-bold text-foreground">Hackstrom 2025</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
