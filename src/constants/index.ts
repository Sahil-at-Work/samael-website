import { NavItem, Service, SocialLink, TimelineItem, Project, Publication } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    platform: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/sahil-sawant-its-31aug', 
    icon: 'linkedin' 
  },
  { 
    platform: 'Github', 
    url: 'https://github.com/Sahil-at-Work', 
    icon: 'github' 
  },
  { 
    platform: 'Instagram', 
    url: 'https://www.instagram.com/sahil.a.sawant/', 
    icon: 'instagram' 
  },
  { 
    platform: 'Portfolio', 
    url: 'https://samael.vercel.app', 
    icon: 'pen-square' 
  },
  { 
    platform: 'ConceptusCelestia', 
    url: 'https://sites.google.com/view/conceptus-celestia/', 
    icon: 'globe' 
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Electronics & Communication',
    description: 'Specializing in RF systems, signal processing, and embedded systems development.',
    icon: 'radio',
    link: 'https://samael.vercel.app/electronics'
  },
  {
    title: 'DevOps Engineering',
    description: 'Implementing efficient CI/CD pipelines, infrastructure automation, and system optimization.',
    icon: 'git-branch',
    link: 'https://github.com/Sahil-at-Work'
  },
  {
    title: 'Cybersecurity',
    description: 'Providing security solutions and education through Silverback - The Knight.',
    icon: 'shield',
    link: 'https://sites.google.com/view/conceptus-celestia/cyber-security'
  },
  {
    title: 'Astronomy Research',
    description: 'Developing innovative telescope systems and conducting astronomical research.',
    icon: 'telescope',
    link: 'https://sites.google.com/view/conceptus-celestia/astronomy'
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Product Support',
    organization: 'BMC Software.Inc',
    period: 'Jan\'24 - Jun\'24',
    description: 'Technical Intern working on BMC Helix Intelligent Integrations, focusing on Docker Management, Linux, Operating Systems, and Database Administration.',
    link: 'https://www.bmc.com'
  },
  {
    title: 'Research Engineer',
    organization: 'IUCAA',
    period: 'July\'24 - Oct\'24',
    description: 'Worked on 3.5m Radio Telescope Control System, prepared educational models, and volunteered for various astronomy events including National Science Day.',
    link: 'https://www.iucaa.in'
  },
  {
    title: 'Summer Intern',
    organization: 'ISSAA (IUCAA)',
    period: 'April\'24 - May\'24',
    description: 'Selected for prestigious IUCAA Summer School, gained hands-on experience in astronomy and astrophysics research.',
    link: 'https://www.iucaa.in/issaa'
  },
  {
    title: 'Founder',
    organization: 'Silverback - The Knight',
    period: 'Oct\'23 - Present',
    description: 'Leading a cybersecurity education initiative, creating content about security trends and DevOps solutions.',
    link: 'https://sites.google.com/view/conceptus-celestia/'
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    title: 'B.Tech in Electronics and Telecommunication',
    organization: 'Vishwakarma Institute of Technology, Pune',
    period: 'Present',
    description: 'Maintaining a CGPA of 8.4. Former President of Antariksh (Astronomy Club). Focus on innovation and research in communications and AI.',
    link: 'https://www.vit.edu'
  },
  {
    title: 'Engineering Sciences and Humanities',
    organization: 'Vishwakarma Institute of Technology, Pune',
    period: 'January 2022 - June 2022',
    description: 'First-year foundation courses with outstanding academic performance. CGPA: 9.29',
    link: 'https://www.vit.edu'
  },
  {
    title: 'Higher Secondary Education (HSC)',
    organization: 'Maharashtra State Board',
    period: 'August 2019 - July 2021',
    description: 'Achieved 89.66% in Science stream with focus on Physics, Chemistry, and Mathematics.',
    link: 'https://mahahsscboard.in'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Automation of Optical Antenna',
    description: 'Developed a 4-inch aperture Newtonian Telescope with automated stellar tracking system. Achieved 0.1-degree rotation precision with 87% imaging accuracy. Won Best Project Award for Engineering Design and Innovation.',
    type: 'Hardware',
    skillset: ['Arduino', 'Stepper Motors', 'Optics', 'C++', 'Mechanical Design'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'Vishwakarma Institute of Technology',
    link: 'https://github.com/Sahil-at-Work',
    featured: true
  },
  {
    title: 'Affordable Small Radio Telescope (ASRT)',
    description: 'Created an innovative radio telescope using DTH equipment for Ku-Band observations. Implemented super heterodyne receiver for solar activity monitoring.',
    type: 'Hardware',
    skillset: ['RF Engineering', 'Signal Processing', 'GNU Radio', 'Python', 'Electronics'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'IUCAA',
    link: 'https://github.com/Sahil-at-Work',
    featured: true
  },
  {
    title: 'RF Up/Down-Converter Design',
    description: 'Developed signal conversion systems using GNU Radio and SDRs, implementing comprehensive signal processing solutions.',
    type: 'Software Ops',
    skillset: ['GNU Radio', 'SDR', 'Python', 'Signal Processing', 'Linux'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'Personal Project',
    link: 'https://github.com/Sahil-at-Work',
    featured: true
  },
  {
    title: 'Butterfly Classification System',
    description: 'Created a CNN-based classification system using ResNet50, achieving 94% accuracy in real-time butterfly identification in the Sahyadri region.',
    type: 'Data Science',
    skillset: ['Python', 'TensorFlow', 'CNN', 'Computer Vision', 'Machine Learning'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'Vishwakarma Institute of Technology',
    link: 'https://github.com/Sahil-at-Work',
    featured: true
  },
  {
    title: 'BMC Helix Integration Platform',
    description: 'Worked on Docker management and database administration for BMC Helix Intelligent Integrations platform.',
    type: 'Software Ops',
    skillset: ['Docker', 'Linux', 'Database Administration', 'DevOps', 'System Integration'],
    from: 'Jan 2024',
    to: 'Jun 2024',
    affiliation: 'BMC Software Inc',
    link: 'https://www.linkedin.com/in/sahil-sawant-its-31aug'
  },
  {
    title: 'Blink Controlled Wheelchair',
    description: 'Developed an assistive technology solution using eye-blink detection for wheelchair control.',
    type: 'Hardware',
    skillset: ['Computer Vision', 'Arduino', 'Python', 'OpenCV', 'Embedded Systems'],
    from: 'Sep 2022',
    to: 'Dec 2022',
    affiliation: 'DIAT Pune',
    link: 'https://github.com/Sahil-at-Work'
  },
  {
    title: 'Smart SOS Device',
    description: 'Created a safety device with GPS tracking and emergency alert system using IoT technologies.',
    type: 'Hardware',
    skillset: ['IoT', 'GPS', 'Arduino', 'GSM', 'Mobile App Development'],
    from: 'Mar 2023',
    to: 'Aug 2023',
    affiliation: 'Pimpri Chinchwad College of Engineering',
    link: 'https://doi.org/10.1109/ICCUBEA58933.2023.10392200'
  },
  {
    title: 'Portfolio Website',
    description: 'Developed a responsive portfolio website using React, TypeScript, and Three.js with dark/light mode support.',
    type: 'Software Dev',
    skillset: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Responsive Design'],
    from: 'Dec 2024',
    to: 'Present',
    affiliation: 'Personal Project',
    link: 'https://samael.vercel.app'
  },
  {
    title: 'Cybersecurity Blog Platform',
    description: 'Created educational content platform for cybersecurity awareness and DevOps best practices.',
    type: 'Software Dev',
    skillset: ['Content Management', 'Web Development', 'SEO', 'Technical Writing'],
    from: 'Oct 2023',
    to: 'Present',
    affiliation: 'Silverback - The Knight',
    link: 'https://sites.google.com/view/conceptus-celestia/'
  },
  {
    title: 'Astronomical Data Analysis',
    description: 'Analyzed radio telescope data for solar activity patterns using Python and statistical methods.',
    type: 'Data Science',
    skillset: ['Python', 'Data Analysis', 'Statistics', 'Matplotlib', 'NumPy'],
    from: 'Jul 2024',
    to: 'Oct 2024',
    affiliation: 'IUCAA',
    link: 'https://www.iucaa.in'
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Blink Controlled Wheelchair',
    conference: '7th International Conference on Data Management, Analytics and Innovation (ICDMAI-2023)',
    venue: 'Defence Institute of Advanced Technology (DIAT), Pune',
  },
  {
    title: 'Safety with Technology: a smart SOS Device',
    conference: '7th International Conference on Computing, Communication, Control, and Automation (ICCUBEA-2023)',
    venue: 'Pimpri Chinchwad College of Engineering',
    doi: 'https://doi.org/10.1109/ICCUBEA58933.2023.10392200',
  },
  {
    title: 'Affordable Small Radio Telescope (ASRT) for Solar Observation',
    conference: '15th International Conference on Computing Communication and Networking Technologies (ICCCNT)',
    venue: 'Indian Institute of Technology, Mohali',
    doi: 'https://doi.org/10.1109/ICCCNT61001.2024.10725882',
  },
];