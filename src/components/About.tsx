import React from 'react';
import { Code2, Database, Smartphone, Globe, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Code2, name: 'Frontend Development', description: 'React, TypeScript, Tailwind CSS' },
    { icon: Database, name: 'Backend Development', description: 'Node.js, Python, PostgreSQL' },
    { icon: Smartphone, name: 'Mobile Development', description: 'React Native, Flutter' },
    { icon: Globe, name: 'Web Technologies', description: 'HTML5, CSS3, JavaScript ES6+' },
    { icon: Zap, name: 'Performance Optimization', description: 'Speed & UX improvements' },
    { icon: Users, name: 'Team Collaboration', description: 'Agile, Code Reviews, Mentoring' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with 5+ years of experience building 
            web applications and mobile solutions. I specialize in creating user-friendly, 
            scalable applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <skill.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
              </div>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My Development Journey
            </h3>
            <p className="text-lg mb-6 opacity-90">
              From startup environments to enterprise solutions, I've helped companies 
              transform their ideas into successful digital products. My experience spans 
              across fintech, e-commerce, and SaaS platforms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;