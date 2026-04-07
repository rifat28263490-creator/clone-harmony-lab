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
    <section className="relative py-24 bg-background overflow-hidden">
      <img src={looperBg} alt="" className="absolute right-0 top-0 h-full opacity-20 pointer-events-none" />
      <img src={ellipse} alt="" className="absolute right-0 bottom-0 w-[350px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Working <span className="text-secondary italic">Process</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">The proven path from idea to launch</p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.12 }}
              className="group relative bg-card/30 backdrop-blur border border-border/30 rounded-2xl p-7 hover:border-secondary/30 transition-all hover:-translate-y-1 duration-300"
            >
              {/* Step number background */}
              <span className="absolute top-4 right-5 text-6xl font-black text-foreground/[0.03] group-hover:text-secondary/10 transition-colors duration-300">{s.num}</span>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-secondary text-xs font-bold tracking-wider">STEP {s.num}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
