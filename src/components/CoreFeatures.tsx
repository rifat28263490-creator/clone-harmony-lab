import { Code, Cloud, Shield, Cpu, ArrowUpRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import coreFeatureEllipse from "@/assets/coreFeature-bottom-left-Ellipse.svg";

const features = [
  { icon: Code, title: "Custom Development", desc: "Tailored software solutions built to meet your unique business needs and drive real results.", num: "01" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure for seamless digital operations and global reach.", num: "02" },
  { icon: Shield, title: "Cybersecurity", desc: "Protect your digital assets with advanced security protocols and threat detection.", num: "03" },
  { icon: Cpu, title: "AI Integration", desc: "Leverage artificial intelligence to automate and optimize your business processes.", num: "04" },
];

const CoreFeatures = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <img src={coreFeatureEllipse} alt="" className="absolute bottom-0 left-0 w-[400px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left heading */}
          <AnimatedSection className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Core
              <br />
              <span className="text-secondary italic">Features</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Comprehensive digital services to accelerate your business growth and keep you ahead of competition.
            </p>
            <div className="w-20 h-1 bg-secondary/50 rounded-full mt-6" />
          </AnimatedSection>

          {/* Right cards */}
          <StaggerContainer className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <div className="group relative bg-card/40 backdrop-blur border border-border/30 rounded-2xl p-7 hover:border-secondary/40 transition-all hover:-translate-y-2 duration-300 cursor-pointer h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-secondary/20 group-hover:to-secondary/5 transition-all duration-300">
                      <f.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <span className="text-muted-foreground/30 text-3xl font-bold">{f.num}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex items-center gap-1 text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
