import { CheckCircle, Code, Brain, Link, Headphones } from "lucide-react";
import { SlideInLeft, SlideInRight, AnimatedSection } from "@/components/AnimatedSection";

const reasons = [
  { icon: Code, title: "Custom Software Development", desc: "Tailored solutions that perfectly fit your business workflows." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent automation and predictive analytics for smarter decisions." },
  { icon: Link, title: "Blockchain Integration", desc: "Secure and transparent decentralized solutions for modern business." },
  { icon: Headphones, title: "24/7 Support & Maintenance", desc: "Round-the-clock technical support and system maintenance." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 block">Our Strengths</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Why <span className="text-secondary italic">Choose Us</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">What makes us the best partner for your digital success.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <SlideInLeft>
            <div className="relative rounded-3xl overflow-hidden h-80 lg:h-[480px] shadow-2xl shadow-primary/10">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" alt="Team working" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="flex-1 bg-card/60 backdrop-blur-lg rounded-xl p-4 border border-border/20">
                  <p className="text-secondary font-bold text-2xl">98%</p>
                  <p className="text-foreground/70 text-xs">Client Retention</p>
                </div>
                <div className="flex-1 bg-card/60 backdrop-blur-lg rounded-xl p-4 border border-border/20">
                  <p className="text-secondary font-bold text-2xl">150+</p>
                  <p className="text-foreground/70 text-xs">Projects Done</p>
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Right - Features */}
          <SlideInRight delay={0.15}>
            <div className="space-y-5">
              {reasons.map((r, i) => (
                <div key={i} className="group flex items-start gap-5 bg-card/30 backdrop-blur border border-border/20 rounded-2xl p-6 hover:border-secondary/30 hover:bg-card/50 transition-all hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                    <r.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-base mb-1">{r.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
