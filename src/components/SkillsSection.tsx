import Section from './Section';
import { Code2, Database, Radio, Shield, Telescope, Terminal } from 'lucide-react';

const SKILLS = [
  {
    category: 'Electronics & Communication',
    skills: ['RF Systems', 'Signal Processing', 'Embedded Systems', 'PCB Design'],
    icon: <Radio className="w-6 h-6" />,
  },
  {
    category: 'Software Development',
    skills: ['Python', 'JavaScript/TypeScript', 'React', 'Node.js'],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    category: 'DevOps & Infrastructure',
    skills: ['Docker', 'Linux Administration', 'CI/CD', 'Network Security'],
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    category: 'Database & Backend',
    skills: ['SQL', 'MongoDB', 'API Design', 'System Architecture'],
    icon: <Database className="w-6 h-6" />,
  },
  {
    category: 'Cybersecurity',
    skills: ['Penetration Testing', 'Security Analysis', 'Network Protocols', 'Encryption'],
    icon: <Shield className="w-6 h-6" />,
  },
  {
    category: 'Astronomy',
    skills: ['Telescope Design', 'Radio Astronomy', 'Data Analysis', 'Astrophotography'],
    icon: <Telescope className="w-6 h-6" />,
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
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-400">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;