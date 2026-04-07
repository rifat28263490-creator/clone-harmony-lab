import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Zap, Sparkles } from "lucide-react";
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
  { icon: Code, x: "8%", y: "20%", delay: 0, size: "w-14 h-14" },
  { icon: Layers, x: "88%", y: "25%", delay: 0.5, size: "w-12 h-12" },
  { icon: Zap, x: "78%", y: "68%", delay: 1, size: "w-10 h-10" },
  { icon: Sparkles, x: "15%", y: "65%", delay: 1.5, size: "w-10 h-10" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Decorative ellipses */}
      <img src={topLeftEllipse} alt="" className="absolute top-0 left-0 w-[500px] opacity-30 pointer-events-none" />
      <img src={topRightEllipse} alt="" className="absolute top-20 right-0 w-[400px] opacity-20 pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex ${item.size} rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 items-center justify-center shadow-lg`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon className="w-5 h-5 text-secondary" />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">Building the Future of Digital</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] mb-6 tracking-tight"
          >
            We Build{" "}
            <span className="relative inline-block">
              <span className="text-secondary">Future-Ready</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-secondary/80 to-accent/60 rounded-full"
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
            className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
          >
            Elevate your business with cutting-edge technology and expert solutions.
            We deliver innovative digital experiences that drive growth and engagement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/35 hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="rounded-full px-10 py-6 text-base font-medium border-border/40 text-foreground hover:bg-foreground/5 hover:border-secondary/40 transition-all duration-300">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center p-5 rounded-2xl bg-card/30 backdrop-blur-md border border-border/20 hover:border-secondary/30 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
