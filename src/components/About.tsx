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
 //   {
//    icon: Users,
//    title: 'Collaborative Leader',
  //    description: 'Led cross-functional teams of 5+ developers and data scientists in delivering complex AI projects on time.'
//    },
    {
      icon: TrendingUp,
      title: 'Continuous Learner',
      description: 'Constantly evolving with the latest technologies, completed Data Science Bootcamp, certified in SAP Developer Associate (Database Administrator - SAP HANA & Integration Developer), '
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforming complex data into intelligent solutions that drive business value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">My Journey</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                My passion for Data Analytics began during my first IT-related job, 
                where I was fascinated by the potential of machines to learn and adapt. This curiosity 
                led me to pursue specialized training in machine learning and deep learning technologies.
              </p>
              <p>
                Over the past 4 years, I've had the privilege of working on diverse AI projects, 
                from computer vision systems that assist medical professionals in diagnosis to 
                natural language processing platforms that analyze sentiment at scale. Each project 
                has reinforced my belief that AI should be accessible, ethical, and beneficial to society.
              </p>
              <p>
                Currently, I'm focused on advancing my expertise in MLOps, responsible AI, and 
                emerging technologies like generative AI. My goal is to bridge the gap between 
                cutting-edge research and practical applications that solve real-world challenges.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Career Objective</h4>
              <p className="text-slate-700">
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
                <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal Branding Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Personal Branding Statement</h3>
          <p className="text-blue-100 text-lg max-w-4xl mx-auto leading-relaxed">
            "I am a results-driven AI/ML engineer who combines deep technical expertise with 
            strategic thinking to deliver intelligent solutions that transform businesses. 
            My unique blend of full-stack development skills and machine learning knowledge 
            enables me to build end-to-end AI systems that are both powerful and practical."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;