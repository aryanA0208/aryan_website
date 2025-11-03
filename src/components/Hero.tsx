import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/aryan_pro.png";
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
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>
              
              {/* Image container with enhanced styling */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl ring-8 ring-primary/10 hover:ring-primary/30 hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Aryan Pratap Singh - Full Stack Developer" 
                  className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700" 
                  loading="eager"
                />
                {/* Gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-bounce-subtle"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};