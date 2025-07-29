import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_PUBLIC_KEY = 'McyBb-K1l4vCHoh0R';
  const EMAILJS_SERVICE_ID = 'service_mdue27b';
  const EMAILJS_TEMPLATE_ID = 'template_nbcmxz2';

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'subamprasad4311@gmail.com',
      href: 'mailto:subamprasad4311@gmail.com',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9749387***',
      href: 'tel:+919749387***',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com',
      gradient: 'from-gray-700 to-gray-900'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'subamprasad4311@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!"
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your AI ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-orbitron font-bold">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply chat about the latest developments in AI and machine learning. 
                  Feel free to reach out through any of the channels below.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                      <div className="flex items-center p-4 rounded-lg bg-secondary/20 border border-primary/10 hover:border-primary/30 transition-all duration-300 group-hover:scale-105">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} mr-4`}>
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary group-hover:text-primary/80 transition-colors">
                            {contact.label}
                          </h4>
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-orbitron font-bold mb-6 text-center">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-orbitron font-bold text-primary mb-1">24h</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-2xl font-orbitron font-bold text-accent mb-1">100%</div>
                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-orbitron font-bold text-primary mb-1">15+</div>
                    <div className="text-xs text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-2xl font-orbitron font-bold text-accent mb-1">3+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-orbitron font-bold">Send a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glow-border bg-background/50 border-primary/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glow-border bg-background/50 border-primary/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or how I can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glow-border bg-background/50 border-primary/20 focus:border-primary/50 text-foreground placeholder:text-muted-foreground resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-6 text-lg font-semibold glow-border transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    I typically respond within 24 hours. Your information will be kept confidential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <Card className="glass-card glow-border max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                Ready to Start Your AI Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you need machine learning consulting, custom AI development, or just want to explore possibilities, I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/80 text-primary-foreground px-8"
                  onClick={() => window.open('mailto:subamprasad4311@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me Directly
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;