import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Globe, BarChart3, Brain, MessageSquare, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Consulting",
      description: "Custom ML solutions tailored to your business needs. From data analysis to model deployment, I help transform your data into actionable insights.",
      features: [
        "Predictive modeling",
        "Data preprocessing",
        "Model optimization",
        "Performance analysis"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications using cutting-edge technologies. Specializing in React, TypeScript, and full-stack development.",
      features: [
        "React & TypeScript",
        "Responsive design",
        "API integration",
        "Performance optimization"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      description: "Transform complex data into clear, actionable insights with advanced analytics and stunning visualizations.",
      features: [
        "Statistical analysis",
        "Interactive dashboards",
        "Data storytelling",
        "Business intelligence"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Bot,
      title: "Agentic AI Projects",
      description: "Cutting-edge autonomous AI systems that can reason, plan, and execute complex tasks with minimal human intervention.",
      features: [
        "Autonomous agents",
        "Multi-agent systems",
        "Reasoning capabilities",
        "Task automation"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI solutions using state-of-the-art language models and natural language processing.",
      features: [
        "LLM integration",
        "Custom personalities",
        "Multi-platform support",
        "Context awareness"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Custom AI Applications",
      description: "End-to-end AI application development from concept to deployment, tailored to your specific requirements.",
      features: [
        "Custom algorithms",
        "Scalable architecture",
        "Cloud deployment",
        "Ongoing support"
      ],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Services & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI and development solutions to help you leverage the power of machine learning and modern technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card glow-border group hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <service.icon className="w-12 h-12 text-white mx-auto mb-3" />
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Floating particles for visual effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-floating"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground group-hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20">
          <Card className="glass-card glow-border max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-accent p-8 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-3xl font-orbitron font-bold mb-4">
                    Ready to Transform Your Ideas into Reality?
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    Let's collaborate to build innovative AI solutions that drive your business forward.
                    From concept to deployment, I'll guide you through every step of the process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 font-semibold"
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Start Your Project
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      onClick={() => {
                        const element = document.querySelector('#projects');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      View My Work
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;