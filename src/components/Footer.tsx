import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-primary/20 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Brand */}
          <div>
            <div className="font-orbitron text-2xl font-bold gradient-text mb-2">
              SUBAM.AI
            </div>
            <p className="text-sm text-muted-foreground">
              Machine Learning Engineer & AI Innovator
            </p>
          </div>

          {/* Center: Made with love message */}
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-muted-foreground mb-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500 mx-1" />
              <span>by</span>
              <Code className="w-4 h-4 text-primary ml-1" />
            </div>
            <p className="text-xs text-muted-foreground">
              Powered by React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Right: Copyright */}
          <div className="text-right md:text-right text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Subam Prasad
            </p>
            <p className="text-xs text-muted-foreground">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom: Additional info */}
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <span>Based in India 🇮🇳</span>
            <span>•</span>
            <span>Available for Remote Work 🌍</span>
            <span>•</span>
            <span>Open to Collaborations 🤝</span>
          </div>
        </div>

        {/* Floating particles for visual effect */}
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full animate-floating"></div>
        <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-accent/30 rounded-full animate-floating" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;