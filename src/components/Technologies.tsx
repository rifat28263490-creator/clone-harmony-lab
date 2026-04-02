import { useState } from "react";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";

const tabs = ["All", "Mobile", "Frontend", "Backend", "Cloud", "DevOps/Others"];

const techData: Record<string, { name: string; color: string }[]> = {
  Frontend: [
    { name: "React", color: "#61DAFB" },
    { name: "Angular", color: "#DD0031" },
    { name: "Vue.js", color: "#4FC08D" },
    { name: "Swift", color: "#FA7343" },
    { name: ".NET", color: "#512BD4" },
    { name: "Flutter", color: "#02569B" },
  ],
  Backend: [
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Java", color: "#ED8B00" },
    { name: "Go", color: "#00ADD8" },
    { name: "Ruby", color: "#CC342D" },
    { name: "PHP", color: "#777BB4" },
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
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {displayed.map((tech, i) => (
            <ScaleIn key={`${active}-${i}`} delay={i * 0.06}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold" style={{ color: tech.color }}>
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="text-secondary-foreground text-xs font-medium">{tech.name}</span>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
