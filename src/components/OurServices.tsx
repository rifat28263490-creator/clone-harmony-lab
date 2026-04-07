import { Smartphone, Globe, PenTool, BarChart3, Database, Headphones, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications that users love." },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications built for performance." },
  { icon: PenTool, title: "UI/UX Design", desc: "User-centered design that delights, engages, and converts." },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven marketing strategies that accelerate growth." },
  { icon: Database, title: "Backend Development", desc: "Robust server-side architecture, APIs, and databases." },
  { icon: Headphones, title: "IT Consulting", desc: "Expert technology guidance to transform your business." },
];

const OurServices = () => {
  return (
    <section id="services" className="py-28 bg-primary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4 block">What We Do Best</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-secondary italic">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            End-to-end digital services designed to take your business from idea to impact.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <div className="group relative bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/60 transition-all cursor-pointer hover:-translate-y-2 duration-300 h-full overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary/60 to-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Ghost number */}
                <span className="absolute top-4 right-5 text-7xl font-black text-foreground/[0.02] group-hover:text-secondary/5 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all duration-300">
                    <s.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex items-center gap-2 text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default OurServices;
