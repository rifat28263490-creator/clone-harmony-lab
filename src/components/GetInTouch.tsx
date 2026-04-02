import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { AnimatedSection, ScaleIn } from "@/components/AnimatedSection";

const GetInTouch = () => {
  return (
    <>
      {/* Get In Touch */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">Get In Touch</h2>
            <div className="w-16 h-1 bg-secondary-foreground/30 mx-auto mt-3 mb-6 rounded-full" />
            <p className="text-secondary-foreground/70 max-w-lg mx-auto mb-8">
              Ready to start your next project? Contact us today and let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white/90 border-0 text-secondary-foreground rounded-full" />
              <Button className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 rounded-full px-8">
                Send
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Logo & Social */}
            <div>
              <div className="mb-4">
                <img src="/logo.svg" alt="Flavour" className="h-8" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">Building future-ready digital products.</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4 text-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"].map((l) => (
                  <a key={l} href="#" className="block text-muted-foreground text-sm hover:text-foreground hover:translate-x-1 transition-all duration-300">{l}</a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground text-sm mb-4">Subscribe for the latest updates and insights.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-muted border-border/50 rounded-full text-sm" />
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 text-sm">
                  Join
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-6 text-center">
            <p className="text-muted-foreground text-sm">© 2026 Flavour. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GetInTouch;
