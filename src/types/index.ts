export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  type: 'Hardware' | 'Software Ops' | 'Software Dev' | 'Data Science';
  skillset: string[];
  from: string;
  to: string;
  affiliation: string;
  link?: string;
  featured?: boolean;
}

export interface ProjectFilters {
  skills: string[];
  affiliation: string[];
  type: string[];
}

export interface Award {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  conference: string;
  venue: string;
  doi?: string;
}