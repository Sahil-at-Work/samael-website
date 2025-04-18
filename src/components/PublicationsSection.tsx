import Section from './Section';
import { PUBLICATIONS } from '../constants';
import { BookOpen, ExternalLink } from 'lucide-react';

const PublicationsSection = () => {
  return (
    <Section
      id="publications"
      title="Publications & Patents"
      subtitle="Research contributions and intellectual property"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {PUBLICATIONS.map((pub, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-blue-600 dark:text-blue-400">
                <BookOpen size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pub.title}</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{pub.conference}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pub.venue}</p>
                {pub.doi && (
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View Publication <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PublicationsSection;