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
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications and achievements
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all hover:scale-[1.02] flex flex-col"
            >
              <CardContent className="pt-6 flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold flex-1">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
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
