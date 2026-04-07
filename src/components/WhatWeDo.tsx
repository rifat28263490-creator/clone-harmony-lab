import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideInLeft, SlideInRight } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const features = [
  "End-to-end product development",
  "Agile methodology & iterative delivery",
  "Scalable & maintainable architecture",
  "Dedicated project management",
];

const WhatWeDo = () => {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 bg-secondary/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <SlideInLeft>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop"
                  alt="Coding"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:right-6 bg-card/90 backdrop-blur-xl border border-border/30 rounded-2xl p-5 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold text-lg">5+</span>
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-sm">Years</p>
                    <p className="text-muted-foreground text-xs">of Experience</p>
                  </div>
                </div>
              </motion.div>
              {/* Small accent image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-4 -left-4 w-28 h-28 rounded-2xl overflow-hidden border-4 border-background shadow-xl hidden md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop"
                  alt="Development"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right - Content */}
          <SlideInRight delay={0.15}>
            <div>
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                What <span className="text-secondary italic">We Do</span>
              </h2>
              <p className="text-lg text-secondary font-medium mb-3">Custom Software Development Solutions</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We build future-ready digital products and experiences that drive business growth.
                Our expert team delivers cutting-edge solutions tailored to your unique needs.
              </p>

              <div className="space-y-4 mb-10">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-7 h-7 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 group-hover:bg-secondary/25 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
