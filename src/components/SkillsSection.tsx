import Section from './Section';
import { Code2, Database, Radio, Shield, Telescope, Terminal } from 'lucide-react';

const SKILLS = [
  {
    category: 'Data Science & Analytics',
    skills: [
      'Data Analysis',
      'Big Data Analytics',
      'Machine Learning',
      'Deep Learning (DNN)',
      'Artificial Intelligence',
      'Signal Processing',
      'Image Processing',
      'Python'
    ],
    icon: <Database className="w-6 h-6" />,
  },
  {
    category: 'DevOps & Cloud Infrastructure',
    skills: [
      'DevOps on AWS',
      'Cloud Computing',
      'Docker',
      'Kubernetes',
      'Linux & System Administration',
      'Shell Scripting / Bash',
      'CI/CD',
      'Server & Network Operations',
      'Secure Shell (SSH)',
      'SQL',
      'API Design',
      'System Architecture'
    ],
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    category: 'Software Development & Engineering',
    skills: [
      'Software Development',
      'Software Systems Engineering',
      'Software Testing',
      'Software Security',
      'Web Development',
      'Javascript',
      'Node.js',
      'Next.js',
      'Tailwind CSS',
      'Git',
      'Python',
      'Flask',
      'Django',
      'JAVA',
      'C,C++'
    ],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    category: 'Astronomy & Research',
    skills: [
      'Astrophysics',
      'Observational & Radio Astronomy',
      'Research Data Handling',
      'Scientific Computing',
      'Automated Systems',
      'Research Assistant Experience'
    ],
    icon: <Telescope className="w-6 h-6" />,
  },
  {
    category: 'Electronics & Embedded Systems',
    skills: [
      'Electronics & Digital Electronics',
      'Embedded Systems (Raspberry Pi / Arduino)',
      'Internet of Things (IoT)',
      'Electronic Hardware Systems',
      'Signal & Telecommunication Systems',
      'RF Systems',
      'PCB Design'
    ],
    icon: <Radio className="w-6 h-6" />,
  },
  {
    category: 'Management & Leadership',
    skills: [
      'Project Management',
      'Strategic Planning',
      'Risk Management',
      'Business Analysis',
      'Organizational Development',
      'Teamwork & Collaboration',
      'Leadership & Content Development'
    ],
    icon: <Shield className="w-6 h-6" />,
  },
];

const SkillsSection = () => {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Comprehensive expertise across multiple domains"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-400">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.category}</h3>
            </div>

            {/* Chip-style curved skill buttons */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 border border-gray-600
                             hover:bg-blue-500 hover:text-white hover:border-blue-500
                             transition-all text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
