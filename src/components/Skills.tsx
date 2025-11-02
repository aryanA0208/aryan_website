import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and programming languages I work with
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-4 transition-transform hover:scale-125 duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Additional Expertise</h3>
              </div>
              <p className="text-muted-foreground">
                Beyond core programming languages, I have experience with modern web
                development frameworks, version control systems, responsive design
                principles, and RESTful API integration. I'm constantly expanding my
                skill set to stay current with industry best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
