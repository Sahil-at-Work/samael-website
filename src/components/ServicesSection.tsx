import Section from './Section';
import { Code, Layout, PenTool, TrendingUp } from 'lucide-react';
import { SERVICES } from '../constants';
import Button from './Button';

const ServicesSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={32} />;
      case 'layout':
        return <Layout size={32} />;
      case 'pen-tool':
        return <PenTool size={32} />;
      case 'trending-up':
        return <TrendingUp size={32} />;
      default:
        return null;
    }
  };

  return (
    <Section
      id="services"
      title="Services"
      subtitle="Expert solutions tailored to your needs"
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="text-blue-400 mb-4">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <a href={service.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="w-full text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;