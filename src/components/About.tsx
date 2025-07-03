import React from 'react';
import { Cloud, Database, Code2, Globe, Zap, Activity } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Cloud, name: 'AWS Cloud', description: 'Elastic Beanstalk, EC2, RDS, S3, CloudWatch, SNS, serverless' },
    { icon: Activity, name: 'SaaS Platform Development', description: 'Healthcare IT solutions, scalable architectures' },
    { icon: Database, name: 'Backend Development', description: 'Java, Python, Scala, Ruby, Spring Boot' },
    { icon: Code2, name: 'Frontend Development', description: 'React, Angular, JavaScript, HTML, jQuery' },
    { icon: Zap, name: 'Data Processing & ETL', description: 'AWS Glue, large dataset handling' },
    { icon: Globe, name: 'API Integration', description: 'Salesforce, third-party healthcare systems' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack software developer with 8+ years of professional experience 
            specializing in AWS serverless architecture and SaaS healthcare technology. I recently 
            built an innovative application using algorithms to detect diseases in hospital patients, 
            improving patient care and hospital workflows through data-driven insights.
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
              From SaaS healthcare IT platforms to AWS serverless consulting, I've specialized 
              in building scalable solutions that improve patient care and streamline business 
              operations. My experience includes optimizing query performance, developing ETL 
              pipelines, and creating comprehensive management platforms for diverse industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">SaaS</div>
                <div className="text-sm opacity-80">Healthcare Specialist</div>
              </div>
              <div>
                <div className="text-3xl font-bold">AWS</div>
                <div className="text-sm opacity-80">Serverless Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;