import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const GetInTouch = () => {
  return (
    <>
      {/* Get In Touch CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary-foreground/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-secondary-foreground/5 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="text-secondary-foreground/50 text-sm font-semibold tracking-widest uppercase mb-3 block">Ready to Start?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">Let's Build Something Amazing</h2>
            <p className="text-secondary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Join 100+ companies that trust us with their digital transformation. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input placeholder="Enter your email address" className="bg-background/90 border-0 text-foreground rounded-full h-12 px-5" />
              <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 rounded-full px-8 h-12 font-semibold shadow-lg">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/20 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Logo & Info */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <img src="/logo.svg" alt="Finixcode" className="h-6" />
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Building future-ready digital products that drive growth and engagement.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-card/50 border border-border/20 flex items-center justify-center hover:bg-secondary/10 hover:border-secondary/30 hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4 text-muted-foreground hover:text-secondary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-bold mb-5">Quick Links</h4>
              <div className="space-y-3">
                {["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"].map((l) => (
                  <a key={l} href="#" className="block text-muted-foreground text-sm hover:text-secondary hover:translate-x-1 transition-all duration-300">{l}</a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-foreground font-bold mb-5">Services</h4>
              <div className="space-y-3">
                {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions", "AI Integration"].map((l) => (
                  <a key={l} href="#" className="block text-muted-foreground text-sm hover:text-secondary hover:translate-x-1 transition-all duration-300">{l}</a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-foreground font-bold mb-5">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">123 Tech Street, Silicon Valley, CA 94000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-muted-foreground text-sm">hello@finixcode.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Finixcode. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((l) => (
                <a key={l} href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GetInTouch;
