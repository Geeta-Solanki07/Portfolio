// src/components/ContactSection.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset(); // clear form
      } else {
        toast({
          title: "❌ Error",
          description: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 text-base md:text-lg max-w-3xl mx-auto">
          Let's connect! I'm always open to discussing new opportunities,
          collaborations, or just having a chat about technology and development.
        </p>

        {/* Grid: Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Contact Info */}
          <div className="bg-card p-8 rounded-xl shadow-md flex flex-col text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex flex-col items-center mb-10 justify-center p-10">
              <div className="p-4 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-medium text-lg md:text-xl">Email</h4>
              <a
                href="mailto:geetasolankli9244@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-base md:text-lg"
              >
                geetasolankli9244@gmail.com
              </a>
            </div>

            {/* Connect With Me */}
            <div>
              <h4 className="font-medium text-lg md:text-xl mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-8 justify-center text-3xl">
                <a
                  href="https://www.linkedin.com/in/geeta-solanki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Geeta-Solanki07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl shadow-md flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 md:py-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base md:text-lg"
                  placeholder="Geeta Solanki..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 md:py-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base md:text-lg"
                  placeholder="geetasolankli9244@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 md:py-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base md:text-lg"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-base md:text-lg mt-4"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
