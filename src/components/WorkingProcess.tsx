import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import looperBg from "@/assets/LooperBG-working-process-right.svg";
import ellipse from "@/assets/working-process-right-Ellipse.svg";

const steps = [
  { num: "01", title: "REQUIREMENTS ANALYSIS", desc: "We thoroughly analyze your business requirements to understand goals." },
  { num: "02", title: "DETAIL PLANNING", desc: "Creating a comprehensive roadmap and project plan for execution." },
  { num: "03", title: "DESIGN & IMPLEMENTATION", desc: "Bringing the vision to life with pixel-perfect design and clean code." },
  { num: "04", title: "TESTING & LAUNCH", desc: "Rigorous testing and seamless deployment of your product." },
];

const WorkingProcess = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <img src={looperBg} alt="" className="absolute right-0 top-0 h-full opacity-30 pointer-events-none" />
      <img src={ellipse} alt="" className="absolute right-0 bottom-0 w-[350px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Working <span className="text-secondary italic">Process</span>
          </h2>
          <p className="text-muted-foreground mt-3">The path that makes sense</p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto space-y-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.15 }}
              className="flex items-center gap-6 bg-primary/10 border border-primary/30 rounded-2xl px-6 py-5 hover:bg-primary/15 transition-all hover:-translate-y-1 duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold text-secondary shrink-0">{s.num}</span>
              <div>
                <h3 className="text-foreground font-semibold tracking-wide text-sm md:text-base">{s.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
