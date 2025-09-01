import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 flex flex-col items-center space-y-6 relative">
      {/* Copyright */}
      <p className="text-base md:text-lg font-medium text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Geeta Solanki. All rights reserved.
      </p>

      {/* Back to Top Button */}
      {/* <a
        href="#hero"
        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
        aria-label="Back to Top"
      >
        <ArrowUp size={22} />
      </a> */}
    </footer>
  );
};
