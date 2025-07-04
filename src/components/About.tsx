import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on developing AI solutions that create meaningful impact in healthcare, education, and sustainability.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Successfully deployed ML models that improved efficiency by 40% and accuracy by 35% across multiple projects.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learner',
      description: 'Constantly evolving with the latest technologies, completed Data Science Bootcamp, certified in SAP Developer Associate (Database Administrator - SAP HANA & Integration Developer), '
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming complex data into intelligent solutions that drive business value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I am an emerging AI/ML engineer with a strong foundation in machine learning, natural language processing, and intelligent application development. My journey in artificial intelligence began with a fascination for how computers can understand and process human language, leading me to specialize in sentiment analysis, conversational AI, and automated decision-making systems.
              </p>
              <p>
               Through intensive bootcamp training and hands-on project development, I have cultivated expertise in Python, machine learning frameworks, and cloud-based AI services. My approach combines technical rigor with creative problem-solving, always focusing on delivering solutions that are both technically sound and user-friendly.
              </p>
              <p>
               I thrive in collaborative environments where I can contribute to innovative projects that push the boundaries of what's possible with artificial intelligence. My goal is to join a forward-thinking organization where I can apply my skills to real-world challenges while continuing to grow as a professional in this rapidly evolving field.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Career Objective</h4>
              <p className="text-gray-700 dark:text-gray-300">
                To lead AI initiatives in a forward-thinking organization where I can leverage my 
                technical expertise and leadership skills to develop innovative solutions that 
                drive business growth while maintaining ethical AI practices.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;