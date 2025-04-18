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
  category: string;
  period: string;
  description: string;
}

export interface Publication {
  title: string;
  conference: string;
  venue: string;
  doi?: string;
}