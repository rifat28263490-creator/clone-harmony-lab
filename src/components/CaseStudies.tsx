import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    title: "FinTech Platform",
    category: "Finance",
    desc: "A comprehensive digital banking platform built with modern technologies, serving over 100,000 users.",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    title: "HealthCare App",
    category: "Healthcare",
    desc: "Telemedicine platform connecting patients with doctors for virtual consultations and health monitoring.",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    title: "E-Commerce Suite",
    category: "Retail",
    desc: "Full-stack e-commerce solution with AI-powered recommendations and seamless checkout.",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-primary/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Case <span className="text-secondary italic">Studies</span>
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-lg mx-auto">
            Explore our latest successful projects and the impact we've delivered.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <StaggerItem key={i}>
              <div className="group relative bg-card/30 backdrop-blur border border-border/20 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="h-56 overflow-hidden relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">{p.category}</span>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-3.5 h-3.5 text-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-foreground font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Button variant="outline" className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-base">
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CaseStudies;
