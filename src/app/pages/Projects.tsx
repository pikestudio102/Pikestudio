import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding",
    description: "Complete brand overhaul for a tech startup",
    imageQuery: "modern brand design studio",
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    category: "Marketing",
    description: "Multi-channel marketing strategy and execution",
    imageQuery: "marketing campaign creative",
  },
  {
    id: 3,
    title: "Corporate Video Series",
    category: "Video Production",
    description: "Engaging video content for internal communications",
    imageQuery: "video production studio",
  },
  {
    id: 4,
    title: "E-commerce Design",
    category: "Graphic Design",
    description: "User-centered design for online retail experience",
    imageQuery: "ecommerce website design",
  },
  {
    id: 5,
    title: "Social Media Strategy",
    category: "Marketing",
    description: "Content strategy and management across platforms",
    imageQuery: "social media content creation",
  },
  {
    id: 6,
    title: "Brand Guidelines",
    category: "Branding",
    description: "Comprehensive visual identity system",
    imageQuery: "brand guidelines design",
  },
  {
    id: 7,
    title: "Explainer Video",
    category: "Video Production",
    description: "Animated explainer for SaaS product",
    imageQuery: "animated explainer video",
  },
  {
    id: 8,
    title: "Package Design",
    category: "Graphic Design",
    description: "Eye-catching packaging for consumer goods",
    imageQuery: "product packaging design",
  },
];

const categories = ["All", "Branding", "Marketing", "Graphic Design", "Video Production"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Our Projects</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Explore our portfolio of creative work across branding, marketing, design, and video production
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground/70 hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${encodeURIComponent(project.imageQuery)}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
                  {project.category}
                </div>
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-foreground/60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground/60">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
