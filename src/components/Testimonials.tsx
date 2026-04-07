import { Star, Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Stellar team! They transformed our digital presence completely. The attention to detail and commitment to quality is unmatched. Highly recommended!",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    text: "The innovative solutions and technical expertise set them apart from any agency we've worked with. A true technology partner for the long term.",
    rating: 5,
    avatar: "M",
  },
  {
    name: "Emily Davis",
    role: "Founder, DesignHub",
    text: "They've consistently delivered high-quality work within deadlines. The collaboration was seamless and results exceeded our expectations.",
    rating: 5,
    avatar: "E",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-primary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4 block">Client Feedback</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What Our Clients <span className="text-secondary italic">Say</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            5.0/5.0 — Trusted by businesses worldwide
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-2 duration-300 h-full flex flex-col overflow-hidden ${
                i === 1
                  ? "bg-secondary text-secondary-foreground border-secondary shadow-2xl shadow-secondary/20 scale-[1.03]"
                  : "bg-card/30 backdrop-blur-sm border-border/20 text-foreground hover:border-secondary/30"
              }`}>
                {/* Decorative */}
                {i === 1 && <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />}

                <Quote className={`w-8 h-8 mb-5 ${i === 1 ? "text-secondary-foreground/20" : "text-secondary/20"}`} />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 fill-current ${i === 1 ? "text-secondary-foreground" : "text-secondary"}`} />
                  ))}
                </div>

                <p className={`text-sm leading-relaxed flex-1 mb-6 ${i === 1 ? "text-secondary-foreground/90" : "text-muted-foreground"}`}>
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-current/10">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${
                    i === 1
                      ? "bg-secondary-foreground/20 text-secondary-foreground"
                      : "bg-secondary/15 text-secondary"
                  }`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className={`text-xs ${i === 1 ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>{t.role}</p>
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

export default Testimonials;
