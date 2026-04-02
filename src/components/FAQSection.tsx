import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/AnimatedSection";

const faqs = [
  { q: "What does your custom web development process look like?", a: "Our process begins with a thorough discovery phase where we understand your business goals, target audience, and technical requirements. We then move through planning, design, development, testing, and deployment phases with regular check-ins and iterative feedback loops to ensure the final product exceeds expectations." },
  { q: "Can I see examples of your previous work?", a: "Absolutely! Visit our Case Studies section to explore our portfolio of successfully delivered projects across various industries including fintech, healthcare, e-commerce, and more." },
  { q: "Do you maintain or support websites and apps?", a: "Yes, we offer comprehensive maintenance and support packages that include bug fixes, security updates, performance optimization, and feature enhancements." },
  { q: "What is the typical timeline for a web development project?", a: "Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our planning phase." },
  { q: "Can I request changes or updates to my existing website?", a: "Of course! We welcome enhancement requests and can work on improving your existing website or application with new features, better performance, or updated designs." },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently <span className="text-secondary italic">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Everything you need to know about our services, projects, and processes.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-secondary/50 rounded-xl px-5 bg-secondary/5 data-[state=open]:bg-secondary">
                <AccordionTrigger className="text-left text-sm md:text-base text-foreground hover:no-underline data-[state=open]:text-secondary-foreground font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground data-[state=open]:text-secondary-foreground/70">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
