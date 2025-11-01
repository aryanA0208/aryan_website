import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get to know more about my background and journey
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Origin</h3>
              <p className="text-muted-foreground">
                From Shahjahanpur, Uttar Pradesh
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                BCA from Invertis University
                <br />
                Currently pursuing MCA at LPU
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Goal</h3>
              <p className="text-muted-foreground">
                Contribute to innovative IT projects while growing professionally
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate developer from Shahjahanpur, Uttar Pradesh, with a strong
              foundation in computer applications. After completing my Bachelor of
              Computer Application (BCA) at Invertis University, I'm currently pursuing
              my Master of Computer Application (MCA) at Lovely Professional University.
              <br />
              <br />
              I thrive on creating innovative digital solutions and enjoy working in team
              environments where I can both learn and contribute. My passion lies in
              exploring new technologies, keeping up with industry trends, and tackling
              complex problems through creative problem-solving. I'm constantly learning
              and evolving my skills to stay at the forefront of web development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
