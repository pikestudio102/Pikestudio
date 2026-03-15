import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { TrendingUp, Palette, Layers, Video, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Marketing Strategies",
    description: "Data-driven marketing approaches that deliver measurable results and sustainable growth for your business.",
    features: [
      "Market Research & Analysis",
      "Customer Segmentation",
      "Multi-Channel Campaign Planning",
      "Performance Analytics & Optimization",
      "Content Marketing Strategy",
      "Social Media Strategy",
    ],
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Build a distinctive brand identity that resonates with your audience and stands out in the marketplace.",
    features: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Brand Guidelines Development",
      "Brand Voice & Messaging",
      "Rebranding & Refresh",
      "Brand Asset Creation",
    ],
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "Stunning visual designs that communicate your message effectively and leave a lasting impression.",
    features: [
      "Print & Digital Design",
      "Marketing Collateral",
      "Packaging Design",
      "Infographics & Data Visualization",
      "Presentation Design",
      "UI/UX Design",
    ],
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video content that captures attention, tells your story, and drives engagement.",
    features: [
      "Commercial & Promotional Videos",
      "Brand Storytelling",
      "Animated Explainer Videos",
      "Social Media Video Content",
      "Corporate & Event Videos",
      "Post-Production & Editing",
    ],
  },
];

export function Services() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Comprehensive creative solutions to help your brand thrive in today's competitive landscape.
            From strategy to execution, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl mb-4">{service.title}</h2>
                    <p className="text-lg text-foreground/60 mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-primary/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/90 mb-10">
            Ready to elevate your brand? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
          <Link to="/start-project">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
