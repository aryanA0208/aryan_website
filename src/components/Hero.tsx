import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/aryan-profile.jpg";
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="text-primary">Aryan Pratap Singh</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">Passionate about creating innovative digital solutions and building seamless web experiences.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/aryanA0208" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/aryan-pratap-singh-a7440224b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:assingh7800@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img src={profileImage} alt="Aryan Pratap Singh" className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};