import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        dark 
          ? 'bg-gray-900 text-white' 
          : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
      } ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className={`text-lg md:text-xl ${
              dark 
                ? 'text-gray-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;