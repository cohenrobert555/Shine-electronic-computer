
export interface Service {
  id: string;
  title: string;
  category: 'Computer' | 'Electronic' | 'Security' | 'Conversion';
  description: string;
  features: string[];
  image: string;
  icon: string;
}

// Added Product interface to fix import error in components/ProductCard.tsx
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  featured?: boolean;
}

export enum AppRoute {
  HOME = 'home',
  SERVICES = 'services',
  CONTACT = 'contact'
}
