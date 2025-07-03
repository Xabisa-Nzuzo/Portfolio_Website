import React from 'react';
import { Code, Brain, Database, Cloud, Wrench, BarChart3 } from 'lucide-react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const categoryIcons = {
    'Programming': Code,
    'AI/ML': Brain,
    'Frameworks': Code,
    'Tools': Wrench,
    'Cloud': Cloud,
    'Databases': Database
  };

  const proficiencyColors = {
    'Beginner': 'bg-yellow-200 text-yellow-800',
    'Intermediate': 'bg-orange-200 text-orange-800',
    'Advanced': 'bg-green-200 text-green-800',
    'Expert': 'bg-blue-200 text-blue-800'
  };

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'Beginner': return 'w-1/4';
      case 'Intermediate': return 'w-1/2';
      case 'Advanced': return 'w-3/4';
      case 'Expert': return 'w-full';
      default: return 'w-1/4';
    }
  };

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across the full AI/ML development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            
            return (
              <div key={category} className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category}</h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-900">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            proficiencyColors[skill.proficiency]
                          }`}>
                            {skill.proficiency}
                          </span>
                          <span className="text-xs text-slate-500">{skill.years}y</span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className={`h-2 bg-blue-600 rounded-full transition-all duration-300 ${
                          getProficiencyWidth(skill.proficiency)
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;