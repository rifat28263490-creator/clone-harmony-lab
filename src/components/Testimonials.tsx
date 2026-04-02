import { Star } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Stellar team! Transformed our digital presence completely. Highly recommended for any business.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateLab",
    text: "The innovative solutions and attention to detail set them apart. A true technology partner.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Founder, DesignHub",
    text: "They've consistently delivered high-quality work within deadlines. Outstanding collaboration.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Testimonials</h2>
          <p className="text-muted-foreground mt-3">
            5.0/5.0 — Featured reviews by our satisfied clients.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className={`rounded-xl p-6 border hover:-translate-y-1 transition-transform duration-300 ${i === 1 ? "bg-secondary text-secondary-foreground border-secondary" : "bg-card/40 border-border/30 text-foreground"}`}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 fill-current ${i === 1 ? "text-secondary-foreground" : "text-secondary"}`} />
                  ))}
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${i === 1 ? "text-secondary-foreground/90" : "text-muted-foreground"}`}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className={`text-xs ${i === 1 ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>{t.role}</p>
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
