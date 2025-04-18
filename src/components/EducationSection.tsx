import Section from './Section';
import { EDUCATION } from '../constants';
import Button from './Button';
import { ExternalLink } from 'lucide-react';

const EducationSection = () => {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Building a strong foundation through continuous learning"
      dark
    >
      <div className="max-w-3xl mx-auto">
        {EDUCATION.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 group">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-400 group-last:h-6"></div>
            <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-blue-400 bg-gray-900"></div>
            
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <span className="text-sm text-blue-400 font-medium">{item.period}</span>
              </div>
              <p className="text-lg text-blue-400 mb-2">{item.organization}</p>
              <p className="text-gray-400 mb-4">{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="inline-flex items-center text-white border-white hover:bg-white/10">
                    Visit Institution <ExternalLink size={16} className="ml-2" />
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

export default EducationSection;