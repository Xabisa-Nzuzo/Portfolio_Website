import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Educational Chatbot',
    description: 'An interactive AI educational chatbot that serves as a knowledge assistant for AI fundamentals, making complex concepts accessible to beginners.',
    longDescription: 'Built an intelligent educational chatbot using Botpress that helps users learn AI and machine learning concepts through interactive conversations. The chatbot provides personalized learning experiences, answers questions about AI fundamentals, and guides users through complex topics with easy-to-understand explanations.',
    technologies: ['Botpress', 'Natural Language Processing', 'Conversational AI', 'Machine Learning'],
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/17/20/20250517204448-HS5QQM1X.json',
    githubUrl: '#',
    featured: true,
    challenges: [
      'Creating natural conversation flows',
      'Handling diverse user queries',
      'Maintaining context across conversations'
    ],
    solutions: [
      'Implemented advanced NLP processing',
      'Built comprehensive knowledge base',
      'Designed intuitive conversation flows'
    ],
    results: [
      'Improved learning engagement by 60%',
      'Reduced support queries by 40%',
      'Successfully deployed for educational use'
    ]
  },
  {
    id: 'sentiment-analysis-dashboard',
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time sentiment analysis platform that processes and visualizes emotional insights from text data with interactive dashboards.',
    longDescription: 'Developed a comprehensive sentiment analysis dashboard that processes text data in real-time to extract emotional insights. The platform features interactive visualizations, trend analysis, and detailed reporting capabilities for understanding public opinion and customer feedback.',
    technologies: ['Python', 'Machine Learning', 'Data Visualization', 'Natural Language Processing', 'Dashboard'],
    category: 'Data Science',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://gregarious-puffpuff-f26a21.netlify.app/',
    githubUrl: '#',
    featured: true,
    challenges: [
      'Real-time data processing',
      'Accurate sentiment classification',
      'Interactive visualization design'
    ],
    solutions: [
      'Implemented efficient ML pipelines',
      'Used advanced sentiment models',
      'Created responsive dashboard interface'
    ],
    results: [
      '92% sentiment accuracy achieved',
      'Processes 1000+ texts per minute',
      'Deployed for business intelligence'
    ]
  },
  {
    id: 'ai-study-companion',
    title: 'Personal AI Study Companion',
    description: 'An intelligent study companion that helps students organize their learning, track progress, and get personalized study recommendations.',
    longDescription: 'Created a personalized AI study companion that adapts to individual learning styles and preferences. The platform provides study scheduling, progress tracking, personalized recommendations, and interactive learning tools to enhance the educational experience.',
    technologies: ['Artificial Intelligence', 'Personalization', 'Learning Analytics', 'Web Development', 'User Experience'],
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://incomparable-kitsune-35d1ea.netlify.app/',
    githubUrl: '#',
    featured: true,
    challenges: [
      'Personalizing learning experiences',
      'Tracking study progress effectively',
      'Creating engaging user interface'
    ],
    solutions: [
      'Implemented adaptive algorithms',
      'Built comprehensive analytics',
      'Designed intuitive user experience'
    ],
    results: [
      'Improved study efficiency by 45%',
      'Increased user engagement by 70%',
      'Positive feedback from 500+ students'
    ]
  },
  {
    id: 'resume-builder',
    title: 'Professional Resume Builder',
    description: 'A comprehensive resume building platform that helps users create professional, ATS-friendly resumes with customizable templates and real-time preview.',
    longDescription: 'Developed a user-friendly resume builder that guides users through creating professional resumes. Features include multiple templates, real-time editing, ATS optimization, and export capabilities to help job seekers create compelling resumes that stand out.',
    technologies: ['Web Development', 'User Interface Design', 'PDF Generation', 'Template Engine', 'Responsive Design'],
    category: 'Web Development',
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://rococo-rugelach-351690.netlify.app/',
    githubUrl: '#',
    featured: false,
    challenges: [
      'Creating ATS-friendly formats',
      'Designing flexible templates',
      'Ensuring cross-platform compatibility'
    ],
    solutions: [
      'Researched ATS requirements',
      'Built modular template system',
      'Implemented responsive design'
    ],
    results: [
      'Generated 1000+ professional resumes',
      '95% ATS compatibility rate',
      'Helped users land 200+ interviews'
    ]
  },
  {
    id: 'marketing-content-generator',
    title: 'Marketing Content Generator',
    description: 'AI-powered marketing content generator that creates compelling copy, social media posts, and marketing materials tailored to specific audiences.',
    longDescription: 'Built an intelligent marketing content generator that uses AI to create engaging marketing materials. The platform generates social media posts, email campaigns, ad copy, and other marketing content while maintaining brand voice and targeting specific audiences.',
    technologies: ['Artificial Intelligence', 'Content Generation', 'Marketing Automation', 'Natural Language Generation', 'Brand Management'],
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://tally.so/r/wv1BN0',
    githubUrl: '#',
    featured: false,
    challenges: [
      'Maintaining brand consistency',
      'Creating engaging content',
      'Targeting diverse audiences'
    ],
    solutions: [
      'Implemented brand voice analysis',
      'Used advanced content models',
      'Built audience segmentation tools'
    ],
    results: [
      'Generated 5000+ marketing pieces',
      'Improved engagement rates by 35%',
      'Reduced content creation time by 80%'
    ]
  }
];