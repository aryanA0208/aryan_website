import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "SkillForge E-Learning Solutions Pvt Ltd",
    role: "Web Development Intern",
    period: "June 2024 - August 2024",
    description:
      "Successfully completed internship in Web Development, demonstrating dedication, hard work, and intelligence throughout the program.",
  },
  {
    company: "OctaNet Services Pvt. Ltd.",
    role: "Web Development Intern",
    period: "May 2024 - July 2024",
    description:
      "Demonstrated exceptional dedication, enthusiasm, and strong willingness to learn. Actively engaged in various projects and tasks, exhibiting remarkable skills and professionalism.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional internships and work experience
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-lg text-primary mt-1">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-4">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
