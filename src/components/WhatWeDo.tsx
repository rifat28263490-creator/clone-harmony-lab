import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideInLeft, SlideInRight } from "@/components/AnimatedSection";

const WhatWeDo = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <SlideInLeft>
            <div className="relative flex gap-4 items-start">
              <div className="flex flex-col gap-4">
                <div className="w-4 h-4 rounded-full bg-muted" />
                <div className="w-4 h-4 rounded-full bg-secondary" />
              </div>
              <div className="flex gap-4">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-primary/20 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop" alt="Coding" className="w-full h-full object-cover" />
                </div>
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-primary/20 overflow-hidden mt-8">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop" alt="Development" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Right - Content */}
          <SlideInRight delay={0.15}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What <span className="text-secondary italic">We Do</span>
              </h2>
              <p className="text-lg text-primary font-medium mb-2">Custom Software Development Solutions</p>
              <p className="text-muted-foreground mb-6">
                We build future-ready digital products and experiences that drive business growth.
                Our expert team delivers cutting-edge solutions tailored to your unique needs.
              </p>

              <div className="space-y-3 mb-8">
                {["End-to-end product development", "Agile methodology & iterative delivery", "Scalable & maintainable architecture"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8">
                Learn More
              </Button>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
