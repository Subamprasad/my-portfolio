import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-3xl font-orbitron font-bold">Education</h3>
            </div>

            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/30"></div>
                  
                  {/* Education Item */}
                  <div className="relative">
                    <div className="absolute left-4 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="ml-12">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          <Calendar className="w-3 h-3 mr-1" />
                          2019 - 2023
                        </Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          <MapPin className="w-3 h-3 mr-1" />
                          Siliguri, West Bengal
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-orbitron font-bold text-primary mb-2">
                        Bachelor of Technology
                      </h4>
                      <p className="text-lg font-semibold mb-2">Information Technology</p>
                      <p className="text-muted-foreground mb-4">
                        Siliguri Institute of Technology
                      </p>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Award className="w-4 h-4 mr-2 text-accent" />
                          Strong foundation in Computer Science fundamentals
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Award className="w-4 h-4 mr-2 text-accent" />
                          Specialized coursework in Data Structures, Algorithms, and AI
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Award className="w-4 h-4 mr-2 text-accent" />
                          Final year project on Machine Learning applications
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-3xl font-orbitron font-bold">Experience</h3>
            </div>

            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-accent/30"></div>
                  
                  {/* Experience Item */}
                  <div className="relative">
                    <div className="absolute left-4 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse-glow"></div>
                    <div className="ml-12">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          <Calendar className="w-3 h-3 mr-1" />
                          Apr 2025 - Jul 2025
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          <MapPin className="w-3 h-3 mr-1" />
                          Remote
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-orbitron font-bold text-accent mb-2">
                        Machine Learning Intern
                      </h4>
                      <p className="text-lg font-semibold mb-4 text-primary">
                        Unified Mentor Pvt. Ltd
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <p className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Applied ML algorithms on real-world datasets to solve business problems
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Collaborated with mentors and team members on multiple projects
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Delivered predictive models using Python, Scikit-learn, and Pandas
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Gained hands-on experience in data preprocessing and model optimization
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis', 'ML Algorithms'].map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-accent/10 text-accent border-accent/20 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Experience or Certifications */}
            <Card className="glass-card glow-border mt-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-orbitron font-bold text-primary mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Recent Achievements
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium text-sm">Agentic AI Project Completion</p>
                      <p className="text-xs text-muted-foreground">Completed hands-on project in cutting-edge Agentic AI field</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium text-sm">Industry Networking</p>
                      <p className="text-xs text-muted-foreground">Actively connecting with startups and AI experts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium text-sm">Open Source Contributions</p>
                      <p className="text-xs text-muted-foreground">Multiple AI/ML projects on GitHub</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;