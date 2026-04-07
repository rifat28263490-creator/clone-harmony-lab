import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Search, FileText, Paintbrush, Rocket } from "lucide-react";
import looperBg from "@/assets/LooperBG-working-process-right.svg";
import ellipse from "@/assets/working-process-right-Ellipse.svg";

const steps = [
  { num: "01", title: "Requirements Analysis", desc: "We thoroughly analyze your business requirements to understand goals and define the project scope.", icon: Search },
  { num: "02", title: "Detail Planning", desc: "Creating a comprehensive roadmap and project plan for flawless execution.", icon: FileText },
  { num: "03", title: "Design & Implementation", desc: "Bringing the vision to life with pixel-perfect design and clean, maintainable code.", icon: Paintbrush },
  { num: "04", title: "Testing & Launch", desc: "Rigorous testing and seamless deployment of your product to production.", icon: Rocket },
];

const WorkingProcess = () => {
  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <img src={looperBg} alt="" className="absolute right-0 top-0 h-full opacity-15 pointer-events-none" />
      <img src={ellipse} alt="" className="absolute right-0 bottom-0 w-[350px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Working <span className="text-secondary italic">Process</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">The proven path from idea to launch</p>
        </AnimatedSection>

        {/* Timeline layout */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.15 }}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center relative ${i > 0 ? "md:mt-8" : ""}`}
              >
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary items-center justify-center z-10">
                  <span className="text-secondary font-bold text-xs">{s.num}</span>
                </div>

                {/* Card - alternating sides */}
                <div className={`${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"} ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-7 hover:border-secondary/30 transition-all hover:-translate-y-1 duration-300">
                    <div className={`flex items-start gap-5 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all duration-300">
                        <s.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <span className="text-secondary text-xs font-bold tracking-wider block mb-1">STEP {s.num}</span>
                        <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty col for offset */}
                {i % 2 === 0 ? <div className="hidden md:block" /> : <div className="hidden md:block md:col-start-1 md:row-start-1" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
