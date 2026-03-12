// src/types/index.ts

export interface DemoFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  companyWebsite?: string;
  phoneNumber?: string;
  industry?: string;
  companySize?: string;
  message?: string;
}

export interface ApiResponse<T = void> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface Lead extends DemoFormData {
  id: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'DEMO_SCHEDULED' | 'CLOSED';
  source?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface Industry {
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  stat: string;
  statLabel: string;
}

export interface SolutionModule {
  name: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
}
