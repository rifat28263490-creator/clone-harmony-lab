import { Smartphone, Globe, PenTool, BarChart3, Database, Headphones } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications." },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications and sites." },
  { icon: PenTool, title: "UI/UX Design", desc: "User-centered design that delights and converts." },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven marketing strategies for growth." },
  { icon: Database, title: "Backend Development", desc: "Robust server-side architecture and APIs." },
  { icon: Headphones, title: "IT Consulting", desc: "Expert technology guidance for your business." },
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-secondary italic">Services</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Comprehensive digital services tailored to your business needs.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <div className="bg-card/40 border border-border/30 rounded-xl p-6 hover:border-l-4 hover:border-l-secondary transition-all group cursor-pointer hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="flex justify-center mt-8 gap-2">
          <span className="w-3 h-3 rounded-full bg-secondary" />
          <span className="w-3 h-3 rounded-full bg-muted" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
