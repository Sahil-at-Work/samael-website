import Section from './Section';
import { PROJECTS } from '../constants';
import { Radio, GitBranch, Code } from 'lucide-react';

const ProjectsSection = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Hardware':
        return <Radio className="w-6 h-6" />;
      case 'DevOps':
        return <GitBranch className="w-6 h-6" />;
      case 'Software':
        return <Code className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Innovative solutions across hardware and software domains"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-400">
                {getIcon(project.category)}
              </span>
              <span className="text-sm font-medium text-blue-400">{project.category}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-blue-400 mb-3">{project.period}</p>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;