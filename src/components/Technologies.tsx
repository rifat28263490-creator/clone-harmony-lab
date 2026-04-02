import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const tabs = ["All", "Mobile", "Frontend", "Backend", "Cloud", "DevOps/Others"];

const techData: Record<string, { name: string; color: string; initial: string }[]> = {
  Frontend: [
    { name: "React", color: "#61DAFB", initial: "R" },
    { name: "Angular", color: "#DD0031", initial: "A" },
    { name: "Vue.js", color: "#4FC08D", initial: "V" },
    { name: "Swift", color: "#FA7343", initial: "S" },
    { name: ".NET", color: "#512BD4", initial: "·" },
    { name: "Flutter", color: "#02569B", initial: "F" },
  ],
  Backend: [
    { name: "Node.js", color: "#339933", initial: "N" },
    { name: "Python", color: "#3776AB", initial: "P" },
    { name: "Java", color: "#ED8B00", initial: "J" },
    { name: "Go", color: "#00ADD8", initial: "G" },
    { name: "Ruby", color: "#CC342D", initial: "R" },
    { name: "PHP", color: "#777BB4", initial: "P" },
  ],
  Mobile: [
    { name: "React Native", color: "#61DAFB", initial: "R" },
    { name: "Flutter", color: "#02569B", initial: "F" },
    { name: "Swift", color: "#FA7343", initial: "S" },
    { name: "Kotlin", color: "#7F52FF", initial: "K" },
  ],
  Cloud: [
    { name: "AWS", color: "#FF9900", initial: "A" },
    { name: "Azure", color: "#0078D4", initial: "A" },
    { name: "GCP", color: "#4285F4", initial: "G" },
    { name: "Docker", color: "#2496ED", initial: "D" },
  ],
  "DevOps/Others": [
    { name: "Jenkins", color: "#D24939", initial: "J" },
    { name: "Terraform", color: "#7B42BC", initial: "T" },
    { name: "Kubernetes", color: "#326CE5", initial: "K" },
    { name: "Git", color: "#F05032", initial: "G" },
  ],
};

const allTechs = [...(techData.Frontend || []), ...(techData.Backend || [])];

const Technologies = () => {
  const [active, setActive] = useState("All");

  const displayed = active === "All" ? allTechs : techData[active] || allTechs;

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
            Technologies <span className="italic">We Work With</span>
          </h2>
          <p className="text-secondary-foreground/70 mt-3 max-w-lg mx-auto">
            We use modern technologies and frameworks to build robust, scalable applications.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === t
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20 border border-secondary-foreground/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl mx-auto"
          >
            {displayed.map((tech, i) => (
              <motion.div
                key={`${active}-${tech.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-background/90 flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 border border-border/10">
                  <span className="text-3xl font-bold" style={{ color: tech.color }}>
                    {tech.initial}
                  </span>
                </div>
                <span className="text-secondary-foreground text-xs font-semibold tracking-wide">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Technologies;
