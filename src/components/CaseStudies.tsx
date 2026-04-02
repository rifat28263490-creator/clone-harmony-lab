import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Case <span className="text-secondary italic">Studies</span>
          </h2>
          <p className="text-primary-foreground/70 mt-3">
            Explore our latest successful projects and client stories.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden relative group h-72">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-foreground font-bold text-lg">FinTech Platform</h3>
                <p className="text-muted-foreground text-sm">Complete digital banking solution</p>
              </div>
            </div>
          </ScaleIn>
          <AnimatedSection delay={0.2} className="flex flex-col justify-center">
            <h3 className="text-primary-foreground font-bold text-xl mb-3">FinTech Platform</h3>
            <p className="text-primary-foreground/70 text-sm mb-6">
              A comprehensive digital banking platform built with modern technologies,
              serving over 100,000 users with real-time transactions.
            </p>
            <Button variant="outline" className="w-fit rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              View Details <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
