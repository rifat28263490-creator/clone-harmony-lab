import { Smartphone, Globe, PenTool, BarChart3, Database, Headphones, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile applications that users love.", color: "from-blue-500/20 to-blue-600/5" },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications built for performance.", color: "from-emerald-500/20 to-emerald-600/5" },
  { icon: PenTool, title: "UI/UX Design", desc: "User-centered design that delights, engages, and converts.", color: "from-pink-500/20 to-pink-600/5" },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven marketing strategies that accelerate growth.", color: "from-amber-500/20 to-amber-600/5" },
  { icon: Database, title: "Backend Development", desc: "Robust server-side architecture, APIs, and databases.", color: "from-violet-500/20 to-violet-600/5" },
  { icon: Headphones, title: "IT Consulting", desc: "Expert technology guidance to transform your business.", color: "from-cyan-500/20 to-cyan-600/5" },
];

const OurServices = () => {
  return (
    <section id="services" className="py-24 bg-primary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 block">What We Do Best</span>
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
              <div className="group relative bg-card/30 backdrop-blur border border-border/20 rounded-2xl p-7 hover:bg-card/60 transition-all cursor-pointer hover:-translate-y-2 duration-300 h-full overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center gap-2 text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4" />
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
