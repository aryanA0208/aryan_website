import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Award } from "lucide-react";
import certSkillforge from "@/assets/cert-skillforge.png";
import certOctanet from "@/assets/cert-octanet.png";
import certWebranger from "@/assets/cert-webranger.png";
import certPywar from "@/assets/cert-pywar.png";
import certSofteng from "@/assets/cert-softeng.png";
import certIot from "@/assets/cert-iot.jpg";

const certifications = [
  {
    title: "Internship Completion - SkillForge",
    description:
      "Completed Web Development internship from 15-06-2024 to 15-08-2024. Demonstrated dedication, hard work, and intelligence.",
    image: certSkillforge,
  },
  {
    title: "Web Development Internship - OctaNet",
    description:
      "2-month internship (1st May 2024 - 1st July 2024) demonstrating exceptional dedication, enthusiasm and professionalism.",
    image: certOctanet,
  },
  {
    title: "Participation in WEB-Ranger",
    description:
      "Certificate for participating in Web-Ranger, a Web Development Contest organized by Faculty of Computer Applications, Invertis University (19 March 2024).",
    image: certWebranger,
  },
  {
    title: "Participation in PY-WAR",
    description:
      "Certificate for participating in PY-WAR, a Python-based programming challenge organized by Invertis University (29 Feb 2024).",
    image: certPywar,
  },
  {
    title: "Software Engineering Quiz",
    description:
      "Certificate for participating in Software Engineering Quiz organized by Faculty of Computer Applications, Invertis University (21 Feb 2024).",
    image: certSofteng,
  },
  {
    title: "Introduction to IoT using ThingWorx",
    description:
      "Completed project-based training program on Introduction to IoT using ThingWorx by Dysmech Competency Services (10/01/2023 to 6/05/2023).",
    image: certIot,
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Professional certifications and achievements
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 flex flex-col animate-fade-in group border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6 flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold flex-1 group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary">
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
