import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_h5g3dia",
        "template_ca1u4cc",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Aryan",
        },
        "Amz1Y3--EVSUd4WcA"
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg transition-transform hover:scale-110">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:assingh7800@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      assingh7800@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg transition-transform hover:scale-110">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Shahjahanpur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" asChild>
                    <a
                      href="https://github.com/aryanA0208"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" asChild>
                    <a
                      href="https://linkedin.com/in/aryan-pratap-singh-a7440224b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-slide-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className="transition-all focus:scale-[1.01]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                    className="transition-all focus:scale-[1.01]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    disabled={isSubmitting}
                    className="transition-all focus:scale-[1.01]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
