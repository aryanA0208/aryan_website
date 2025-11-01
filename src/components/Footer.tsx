import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/20">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by
          Aryan Pratap Singh © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
