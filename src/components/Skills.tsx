import { Card, CardContent } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗄️" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Technologies and programming languages I work with
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer animate-scale-in group border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-6 w-6 text-primary animate-pulse" style={{ animationDuration: '2s' }} />
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
