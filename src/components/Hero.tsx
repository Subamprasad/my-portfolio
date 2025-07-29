import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Machine Learning Engineer',
    'AI Enthusiast',
    'Agentic AI Explorer',
    'Data Science Innovator'
  ];

  useEffect(() => {
    const type = () => {
      const current = titles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timeout = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 stars-bg opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-primary/50 glow-border animate-pulse-glow overflow-hidden">
            <img 
              src={profilePhoto} 
              alt="Subam Prasad - Machine Learning Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">SUBAM</span>
          <br />
          <span className="neon-text">PRASAD</span>
        </h1>

        {/* Animated title */}
        <div className="h-20 mb-8">
          <p className="text-xl md:text-2xl text-primary font-medium animate-slide-in-left">
            {currentText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right">
          Transforming data into intelligent solutions with cutting-edge machine learning 
          and artificial intelligence technologies.
        </p>

        {/* CTA Button */}
        <Button 
          onClick={scrollToProjects}
          className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-lg rounded-full glow-border transition-all duration-300 hover:scale-105"
        >
          Explore My Work
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-floating">
          <ChevronDown className="w-8 h-8 text-primary opacity-60" />
        </div>
      </div>

      {/* Rotating geometric shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-primary/30 rotate-45 animate-rotate opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-accent/30 animate-rotate opacity-20" style={{ animationDirection: 'reverse' }}></div>
    </section>
  );
};

export default Hero;