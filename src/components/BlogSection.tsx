import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "AI & Tech",
    title: "The Future of AI in Software Development",
    desc: "How artificial intelligence is transforming the way we build and ship software at scale.",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    date: "March 10, 2026",
    readTime: "4 min read",
    category: "Cloud",
    title: "Building Scalable Cloud Architecture",
    desc: "Best practices for designing cloud-native applications that handle millions of users.",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    date: "March 5, 2026",
    readTime: "3 min read",
    category: "Design",
    title: "UI/UX Trends to Watch in 2026",
    desc: "Emerging design patterns and user experience innovations shaping the digital world.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3 block">Latest News</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            From Our <span className="text-secondary italic">Blog</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Insights, tutorials, and updates from our engineering team.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b, i) => (
            <StaggerItem key={i}>
              <div className="group bg-card/30 backdrop-blur border border-border/20 rounded-2xl overflow-hidden cursor-pointer hover:border-secondary/30 transition-all hover:-translate-y-2 duration-300 h-full flex flex-col">
                <div className="h-52 overflow-hidden relative">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">{b.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                    <span>{b.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{b.readTime}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-secondary transition-colors duration-300">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{b.desc}</p>
                  <div className="flex items-center gap-1 text-secondary text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
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
