export enum ServiceCategory {
  LAVAGE = "Lavage",
  SPECIALISE = "Spécialisé",
  REPASSAGE = "Repassage",
  LIVRAISON = "Livraison"
}

export interface ServicePrice {
  amount: string;
  unit: string;
  prefix?: string; // Ex: "À partir de"
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: ServicePrice;
  iconName: string;
  category: ServiceCategory;
}