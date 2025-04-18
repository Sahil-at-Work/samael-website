import { useState, useEffect } from 'react';

const ROLES = [
  'Software Developer',
  'Computer Scholar',
  'Telecommunication Engineer'
];

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1000;
    
    if (!isDeleting && text === currentRole) {
      // Pause before starting to delete
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }
    
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentRole.slice(0, prev.length + 1);
      });
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);
  
  return (
    <span className="block text-2xl sm:text-3xl md:text-4xl font-light mt-2 text-yellow-950 dark:text-blue-200">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;