import { ArrowDown } from 'lucide-react';
import Button from './Button';
import SocialLinks from './SocialLinks';
import ThreeBackground from './ThreeBackground';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 dark:from-blue-900 dark:via-blue-800 dark:to-gray-900 overflow-hidden"
    >
      <ThreeBackground />
      
      {/* Background effect */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-yellow-300 dark:bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-yellow-200 dark:bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-950 dark:text-white mb-6 animate-fadeIn">
            <span className="block">Samael Starshine</span>
            <TypewriterText />
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-yellow-950 dark:text-blue-100 mb-8 animate-fadeIn animation-delay-300">
            Transforming ideas into extraordinary digital experiences
            with passion, precision, and purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fadeIn animation-delay-500">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-950 text-yellow-950 hover:bg-yellow-100/50 dark:border-white dark:text-white dark:hover:bg-white/10"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <SocialLinks
            className="justify-center animate-fadeIn animation-delay-700"
            iconColor="currentColor"
          />
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-950 dark:text-white animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection