import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import topLeftEllipse from "@/assets/top-left-Ellipse.svg";
import topRightEllipse from "@/assets/top-right-Ellipse.svg";
import topTopEllipse from "@/assets/top-top-Ellipse.svg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Decorative ellipses */}
      <img src={topLeftEllipse} alt="" className="absolute top-0 left-0 w-[500px] opacity-60 pointer-events-none" />
      <img src={topRightEllipse} alt="" className="absolute top-20 right-0 w-[400px] opacity-50 pointer-events-none" />
      <img src={topTopEllipse} alt="" className="absolute -top-10 left-1/3 w-[300px] opacity-40 pointer-events-none" />

      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
        >
          We Build Future-Ready
          <br />
          <span className="text-secondary">Digital Products</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base md:text-lg"
        >
          Elevate your business with cutting-edge technology and expert solutions.
          We deliver innovative digital experiences that drive growth and engagement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 }}
        >
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-3 text-base font-semibold">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
