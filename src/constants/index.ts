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
    title: 'Software Analyst',
    organization: 'Truein.Inc',
    period: 'Aug\'24 - April\'25',
    description: 'Software Quality Analyst maintaining Manual and Automated testing environments for Facial and Geospatial Attendance Management System for Contractual Workforce.',
    link: 'https://www.bmc.com'
  },  
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
    title: 'M.Tech in Internet of Things',
    organization: 'Veermata Jijabai Technological University, Mumbai',
    period: 'Present',
    description: '',
    link: 'https://www.vit.edu'
  },
  {
    title: 'B.Tech in Electronics and Telecommunication',
    organization: 'Vishwakarma Institute of Technology, Pune',
    period: 'July 2022 - July 2025',
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
    category: 'Hardware',
    period: 'Jan\'24 - Jun\'24',
    description: 'Developed a 4-inch aperture Newtonian Telescope with automated stellar tracking system. Achieved 0.1-degree rotation precision with 87% imaging accuracy. Won Best Project Award for Engineering Design and Innovation.',
  },
  {
    title: 'Affordable Small Radio Telescope (ASRT)',
    category: 'Communication',
    period: 'Jan\'24 - Jun\'24',
    description: 'Created an innovative radio telescope using DTH equipment for Ku-Band observations. Implemented super heterodyne receiver for solar activity monitoring.',
  },
  {
    title: 'RF Up/Down-Converter Design',
    category: 'DevOps',
    period: 'Jan\'24 - Jun\'24',
    description: 'Developed signal conversion systems using GNU Radio and SDRs, implementing comprehensive signal processing solutions.',
  },
  {
    title: 'Butterfly Classification System',
    category: 'Software',
    period: 'Jan\'24 - Jun\'24',
    description: 'Created a CNN-based classification system using ResNet50, achieving 94% accuracy in real-time butterfly identification in the Sahyadri region.',
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