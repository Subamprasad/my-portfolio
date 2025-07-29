import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, MessageCircle, Bot, Terminal, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chat With Khushi Ex-girlfriend",
      icon: MessageCircle,
      description: "Fun, expressive AI chat simulating conversations with 'Khushi'",
      fullDescription: "An innovative AI chatbot that simulates conversations with a virtual character named Khushi. Features natural language processing, personality modeling, and engaging conversational experiences.",
      technologies: ['Node.js', 'Gemini Flash API', 'JavaScript', 'Express', 'AI Chat'],
      features: [
        "Natural conversation flow",
        "Personality-based responses",
        "Real-time chat interface",
        "Emotion recognition"
      ],
      liveDemo: "https://stunning-dragon-e2b019.netlify.app/",
      github: "https://github.com/Subamprasad/-Chat-With-Khushi-Ex-girlfriend",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "GENAI1: AI Landing Page & Chatbox",
      icon: Bot,
      description: "AI-powered animated landing page with integrated Gemini Chat",
      fullDescription: "A sophisticated landing page featuring AI-powered animations and an integrated chatbot using Google's Gemini API. Showcases modern web development with AI integration.",
      technologies: ['React', 'Gemini API', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        "Animated AI-powered landing page",
        "Integrated Gemini chatbot",
        "Responsive design",
        "Real-time AI responses"
      ],
      liveDemo: " https://lustrous-genie-713a9b.netlify.app/",
      github: "https://github.com/Subamprasad/GEN-AI",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "DSA Terminal AI Chatbot",
      icon: Terminal,
      description: "Terminal-style strict DSA bot with Gemini API integration",
      fullDescription: "A terminal-themed chatbot specifically designed for Data Structures and Algorithms learning. Provides strict, educational responses for coding problems and algorithmic concepts.",
      technologies: ['Python', 'Gemini API', 'Terminal UI', 'DSA Algorithms', 'CLI'],
      features: [
        "Terminal-style interface",
        "DSA problem solving",
        "Code execution examples",
        "Algorithm explanations"
      ],
      liveDemo: " https://astonishing-faloodeh-e24544.netlify.app/",
      github: "https://github.com/Subamprasad/DSA-Instructor-AI",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Smart Multi-Tool AI Agent",
      icon: Zap,
      description: "CLI app with crypto tools, translation, Pomodoro timer, and more",
      fullDescription: "A comprehensive command-line application featuring multiple AI-powered tools including cryptocurrency tracking, language translation, productivity features, and various utilities.",
      technologies: ['Python', 'CLI', 'API Integration', 'Crypto APIs', 'Translation APIs'],
      features: [
        "Cryptocurrency tracking",
        "Multi-language translation",
        "Pomodoro timer",
        "AI-powered utilities"
      ],
      liveDemo: "shimmering-babka-c8bae6.netlify.app",
      github: "https://github.com/Subamprasad/Smart-Multi-Tool-AI-Agent",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of AI-powered applications and machine learning solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass-card glow-border group hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center">
                      <project.icon className="w-8 h-8 text-white mr-3" />
                      <h3 className="text-xl font-orbitron font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {project.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card glow-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                Want to See More?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for additional projects and contributions to the AI/ML community.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/80 text-primary-foreground px-8"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;