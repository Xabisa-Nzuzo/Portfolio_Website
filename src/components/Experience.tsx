import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Capaciti',
      duration: 'Apr 2025 - Current',
      location: 'Gqeberha, South Africa',
      description: [
        'Led development of computer vision systems for autonomous vehicles, achieving 98% accuracy in object detection',
        'Architected and deployed scalable ML pipelines processing 10M+ data points daily using AWS and Kubernetes',
        'Mentored junior developers and established ML best practices across the organization',
        'Collaborated with product teams to define AI strategy and roadmap for next-generation products'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Kubernetes', 'Docker'],
      achievements: [
        'Reduced model inference time by 60% through optimization techniques',
        'Published 3 research papers on computer vision applications',
        'Led team of 6 engineers in successful project delivery'
      ]
    },
    {
      title: 'Junior ML Engineer',
      company: 'Transnet SOC Ltd',
      duration: 'Aug 2022 - Mar 2025',
      location: 'Gqeberha, South Africa',
      description: [
        'Developed NLP models for sentiment analysis and text classification with 92% accuracy',
        'Built end-to-end ML workflows using MLflow and Apache Airflow for automated model training',
        'Implemented A/B testing framework for ML model performance evaluation',
        'Created data visualization dashboards using Plotly and Streamlit for business stakeholders'
      ],
      technologies: ['Python', 'Scikit-learn', 'Keras', 'PostgreSQL', 'Apache Airflow', 'MLflow'],
      achievements: [
        'Improved customer satisfaction scores by 25% through sentiment analysis insights',
        'Automated 80% of manual data processing tasks',
        'Received "Innovation Award" for outstanding contributions'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupTech Solutions',
      duration: 'Jan 2021 -Jul 2022',
      location: 'Cape Town, South Africa',
      description: [
        'Built responsive web applications using React, Node.js, and MongoDB',
        'Integrated third-party APIs and payment systems for e-commerce platforms',
        'Implemented CI/CD pipelines and automated testing frameworks',
        'Collaborated with UX designers to create intuitive user interfaces'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'Jest'],
      achievements: [
        'Launched 3 successful web applications with 10K+ active users',
        'Improved application performance by 40% through optimization',
        'Contributed to 200% increase in user engagement'
      ]
    }
  ];

  const education = [
    {
      degree: 'Advanced Diploma ',
      school: 'Nelson Mandela University',
      duration: '2017 - 2019',
      focus: 'Artificial Intelligence & Machine Learning',
      achievements: ['GPA: 3.9/4.0', 'Research Assistant in AI Lab', 'Published 2 conference papers']
    },
    {
      degree: 'National Diploma',
      school: 'Nelson Mandela University',
      duration: '2013 - 2017',
      focus: 'Software Engineering & Data Structures',
      achievements: ['Magna Cum Laude', 'Dean\'s List (6 semesters)', 'President of CS Club']
    }
  ];

  const certifications = [
    'AWS Certified Machine Learning - Specialty',
    'Google Cloud Professional ML Engineer',
    'TensorFlow Developer Certificate',
    'Deep Learning Specialization (Coursera)',
    'MLOps Engineer Certification'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven track record of delivering impactful AI solutions and leading technical teams
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities</h5>
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-md text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.school}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{edu.duration}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">Focus: {edu.focus}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                        <Award className="w-3 h-3 text-yellow-500 mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white">
              <h4 className="text-lg font-bold mb-4">Career Highlights</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  <span>Led teams of up to 3 engineers</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3" />
                  <span>3+ industry certifications</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>3+ years in AI/ML engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;