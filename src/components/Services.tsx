import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Layout,
  Server,
  Database,
  Smartphone,
  Puzzle,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development with modern frameworks and best practices.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Creating responsive, user-friendly interfaces with attention to design and usability.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs with scalable architecture.",
  },
  {
    icon: Puzzle,
    title: "REST API Integration",
    description:
      "Seamless integration of third-party services and custom API development.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Efficient database design, optimization, and management for data-driven applications.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          What I can do for you
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:scale-105 group"
              >
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
