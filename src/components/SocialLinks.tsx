import { 
  Instagram, 
  Linkedin, 
  PenSquare, 
  Globe,
  Github,
  Twitter,
  Youtube,
  Mail
} from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const SocialLinks = ({ 
  className = '', 
  iconSize = 20,
  iconColor = 'currentColor'
}: SocialLinksProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'linkedin':
        return <Linkedin size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'pen-square':
        return <PenSquare size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'globe':
        return <Globe size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'github':
        return <Github size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'twitter':
        return <Twitter size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'youtube':
        return <Youtube size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      case 'mail':
        return <Mail size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <Globe size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          aria-label={link.platform}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;