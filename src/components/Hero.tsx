import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/aryan-profile.jpg";
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>Aryan Pratap Singh</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>Passionate about creating innovative digital solutions and building seamless web experiences.</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50" asChild>
                <a href="/Aryan_Resume.pdf" download="Aryan_Resume.pdf">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-primary">
                <a href="https://github.com/aryanA0208" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-primary">
                <a href="https://linkedin.com/in/aryan-pratap-singh-a7440224b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 hover:rotate-6 transition-all duration-300 hover:text-primary">
                <a href="mailto:assingh7800@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="relative hover:scale-105 transition-transform duration-500">
                <img src={profileImage} alt="Aryan Pratap Singh" className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};