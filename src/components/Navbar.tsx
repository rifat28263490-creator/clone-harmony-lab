import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#home" className="flex items-center">
          <img src="/logo.svg" alt="Finixcode" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <Button className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6">
          Contact Us
        </Button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border/30 px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button className="w-full mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
