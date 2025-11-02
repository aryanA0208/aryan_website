import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import projectNews from "@/assets/project-news.png";
import projectAmazon from "@/assets/project-amazon.png";
import projectTodo from "@/assets/project-todo.png";

const projects = [
  {
    title: "News Website",
    description:
      "A dynamic news aggregation platform featuring real-time updates, category filtering, and responsive design for seamless news consumption.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aryanA0208/nbc_news",
    image: projectNews,
  },
  {
    title: "Amazon Clone",
    description:
      "E-commerce platform clone replicating Amazon's core features including product listings, shopping cart, and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aryanA0208/Amazon-clone",
    image: projectAmazon,
  },
  {
    title: "To-Do List",
    description:
      "Intuitive task management application with create, edit, delete functionality and local storage for persistent data.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aryanA0208/To-Do-List",
    image: projectTodo,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Some of my recent work and personal projects
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 flex flex-col overflow-hidden animate-fade-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="pt-6 flex-1">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full group/btn hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
