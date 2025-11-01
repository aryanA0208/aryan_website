import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Lovely Professional University",
    period: "In Progress",
    status: "current",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Invertis University, Bareilly",
    period: "2022 - 2025",
    status: "completed",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey in computer science
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      {edu.status === "current" && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
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
