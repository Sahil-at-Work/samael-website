import Section from './Section';
import { EXPERIENCE } from '../constants';
import Button from './Button';
import { ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="A journey of continuous growth and achievement"
    >
      <div className="max-w-3xl mx-auto">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 group">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 group-last:h-6"></div>
            <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-white"></div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <span className="text-sm text-blue-600 font-medium">{item.period}</span>
              </div>
              <p className="text-lg text-blue-600 mb-2">{item.organization}</p>
              <p className="text-gray-600 mb-4">{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="inline-flex items-center">
                    Visit Website <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;