import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop",
    date: "March 15, 2026",
    title: "The Future of AI in Software Development",
    desc: "How artificial intelligence is transforming the way we build software.",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    date: "March 10, 2026",
    title: "Building Scalable Cloud Architecture",
    desc: "Best practices for designing cloud-native applications.",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    date: "March 5, 2026",
    title: "UI/UX Trends to Watch in 2026",
    desc: "Emerging design patterns and user experience innovations.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Blog <span className="text-secondary italic">Title</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Insights, tutorials, and updates from our engineering team.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <StaggerItem key={i}>
              <div className="bg-card/40 border border-border/30 rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all hover:-translate-y-2 duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-secondary text-xs font-medium">{b.date}</span>
                  <h3 className="text-foreground font-semibold mt-2 mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm">{b.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default BlogSection;
