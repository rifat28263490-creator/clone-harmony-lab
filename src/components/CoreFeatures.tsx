import { Code, Cloud, Shield, Cpu } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import coreFeatureEllipse from "@/assets/coreFeature-bottom-left-Ellipse.svg";

const features = [
  { icon: Code, title: "Custom Development", desc: "Tailored software solutions built to meet your unique business needs." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure for seamless digital operations." },
  { icon: Shield, title: "Cybersecurity", desc: "Protect your digital assets with advanced security protocols." },
  { icon: Cpu, title: "AI Integration", desc: "Leverage artificial intelligence to automate and optimize processes." },
];

const CoreFeatures = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <img src={coreFeatureEllipse} alt="" className="absolute bottom-0 left-0 w-[400px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Core
            <br />
            <span className="text-secondary italic">Features</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            Comprehensive digital services to accelerate your business growth.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <div className="bg-card/60 backdrop-blur border border-border/40 rounded-xl p-6 hover:border-primary/60 transition-all group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CoreFeatures;
