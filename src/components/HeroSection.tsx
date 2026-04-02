import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import topLeftEllipse from "@/assets/top-left-Ellipse.svg";
import topRightEllipse from "@/assets/top-right-Ellipse.svg";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const floatingIcons = [
  { icon: Code, x: "10%", y: "25%", delay: 0 },
  { icon: Layers, x: "85%", y: "30%", delay: 0.5 },
  { icon: Zap, x: "75%", y: "70%", delay: 1 },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Decorative ellipses */}
      <img src={topLeftEllipse} alt="" className="absolute top-0 left-0 w-[500px] opacity-40 pointer-events-none" />
      <img src={topRightEllipse} alt="" className="absolute top-20 right-0 w-[400px] opacity-30 pointer-events-none" />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 items-center justify-center"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon className="w-5 h-5 text-primary" />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10 px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary text-sm font-medium">We're Hiring — Join Our Team</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
          >
            We Build{" "}
            <span className="relative inline-block">
              <span className="text-secondary">Future-Ready</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            <br />
            Digital Products
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
          >
            Elevate your business with cutting-edge technology and expert solutions.
            We deliver innovative digital experiences that drive growth and engagement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium border-border/50 text-foreground hover:bg-foreground/5 transition-all duration-300">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="text-center p-4 rounded-2xl bg-foreground/5 backdrop-blur-sm border border-border/20"
              >
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
