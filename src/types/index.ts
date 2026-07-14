export interface Property {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  city: string;
  area: string;
  type: PropertyType;
  status: 'For Sale' | 'For Lease' | 'For Rent';
  image: string;
  description: string;
  features: string[];
  agent: Agent;
  roi: string;
  isVerified: boolean;
  isFeatured: boolean;
  bedrooms?: number;
  bathrooms?: number;
  yearBuilt: number;
  tags: string[];
}

export type PropertyType =
  | 'Office Space'
  | 'Retail Shop'
  | 'Warehouse'
  | 'Commercial Land'
  | 'Industrial'
  | 'Co-working Space';

export interface Agent {
  name: string;
  avatar: string;
  phone: string;
  rating: number;
  deals: number;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  review: string;
  rating: number;
  investmentType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Statistic {
  label: string;
  value: string;
  suffix: string;
  icon: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface InvestmentOpportunity {
  id: string;
  city: string;
  region: string;
  roi: string;
  growth: string;
  properties: number;
  image: string;
  trend: 'up' | 'down';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
