import { CheckCircle } from "lucide-react";
import { SlideInLeft, SlideInRight, AnimatedSection } from "@/components/AnimatedSection";

const reasons = [
  { title: "CUSTOM SOFTWARE DEVELOPMENT", desc: "Tailored solutions that perfectly fit your business workflows." },
  { title: "AI & MACHINE LEARNING", desc: "Intelligent automation and predictive analytics." },
  { title: "BLOCKCHAIN INTEGRATION", desc: "Secure and transparent decentralized solutions." },
  { title: "24/7 SUPPORT & MAINTENANCE", desc: "Round-the-clock technical support and system maintenance." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why <span className="text-secondary italic">Choose Us</span>
          </h2>
          <p className="text-muted-foreground mt-3">What makes us the best partner for your success.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <SlideInLeft>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[450px]">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" alt="Team working" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </SlideInLeft>

          {/* Right - Features */}
          <SlideInRight delay={0.15}>
            <div className="space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-start gap-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-5 border border-primary/20 hover:-translate-y-1 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-foreground font-semibold text-sm tracking-wide">{r.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
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
