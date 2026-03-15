import { Link } from "react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../components/ui/button";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Play className="w-4 h-4" />
            <span className="text-sm">Creative Studio</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
            Bringing Your <span className="text-primary">Brand Vision</span> to{" "}
            <span className="text-accent">Life</span>
          </h1>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
            We create compelling marketing strategies, memorable branding, stunning designs,
            and engaging video content that connects with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-project">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[200px]">
                Start a Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What We Do</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Full-service creative solutions to elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Marketing Strategies",
                description: "Data-driven approaches to reach and engage your target audience effectively.",
              },
              {
                title: "Branding",
                description: "Distinctive brand identities that resonate and leave lasting impressions.",
              },
              {
                title: "Graphic Design",
                description: "Visual storytelling through thoughtful, impactful design solutions.",
              },
              {
                title: "Video Production",
                description: "Cinematic content that captures attention and drives results.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent mb-6"></div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-white/90 mb-10">
            Let's collaborate and bring your vision to life. Start your project today.
          </p>
          <Link to="/start-project">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
