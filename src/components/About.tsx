import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Database, Code, Zap, Users, Globe, Coffee, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    'Python', 'SQL', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 
    'Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis', 'Data Visualization', 
    'Agentic AI', 'LLMs', 'Natural Language Processing'
  ];

  const tools = [
    'Jupyter', 'Google Colab', 'VS Code', 'Git', 'Docker', 'AWS', 'Streamlit', 
    'FastAPI', 'Node.js', 'React', 'MongoDB', 'PostgreSQL'
  ];

  const languages = [
    'English', 'Hindi', 'Bhojpuri', 'Bengali'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Project Management', 'Research', 
    'Communication', 'Adaptability', 'Critical Thinking', 'Innovation'
  ];

  const hobbies = [
    { name: 'Football', icon: '⚽' },
    { name: 'MTB Cycling', icon: '🚴‍♂️' },
    { name: 'Tech Exploration', icon: '💻' },
    { name: 'AI Research', icon: '🤖' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio and Core Info */}
          <div className="space-y-8">
            {/* Bio */}
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-orbitron font-bold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Machine Learning Engineer with a B.Tech in Information Technology, 
                  backed by a solid foundation in data science and AI. Proficient in Python, SQL, and 
                  leading machine learning frameworks, I thrive on building predictive models and 
                  delivering end-to-end, data-driven solutions that drive real impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I'm diving deep into the exciting realm of Agentic AI — having recently 
                  completed a hands-on project in this innovative field. I'm actively connecting with 
                  startups and industry experts to exchange ideas, collaborate on cutting-edge initiatives, 
                  and explore new opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Coffee className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-orbitron font-bold">Interests & Hobbies</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg bg-secondary/20 border border-primary/10">
                      <span className="text-2xl mr-3">{hobby.icon}</span>
                      <span className="font-medium">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Skills and Tools */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Code className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-orbitron font-bold">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="glass-card glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-orbitron font-bold">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages & Soft Skills */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card glow-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-lg font-orbitron font-bold">Languages</h3>
                  </div>
                  <div className="space-y-2">
                    {languages.map((lang, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card glow-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-accent mr-2" />
                    <h3 className="text-lg font-orbitron font-bold">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {softSkills.slice(0, 4).map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-accent/10 text-accent border-accent/20 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats or Achievements */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: Trophy, label: 'Projects Completed', value: '15+' },
            { icon: Code, label: 'Lines of Code', value: '50K+' },
            { icon: Zap, label: 'ML Models Built', value: '25+' },
            { icon: Brain, label: 'AI Solutions', value: '10+' }
          ].map((stat, index) => (
            <Card key={index} className="glass-card glow-border text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-orbitron font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;