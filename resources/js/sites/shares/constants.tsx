
import React from 'react';
import { WashingMachine, Droplets, Wind, Truck, Sparkles, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export const APP_NAME = "Ecolaundry";
export const LOCATION = "Meknès, Maroc";
export const WHATSAPP_NUMBER = "+212600000000"; // Placeholder
export const WHATSAPP_MESSAGE = "Bonjour Ecolaundry, je souhaite commander un service à Meknès.";

export const NAV_LINKS = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Processus", href: "#process" },
  { name: "Pourquoi Nous", href: "#why-us" }
];


export const ICONS: Record<string, React.ReactNode> = {
  WashingMachine: <WashingMachine size={24} />,
  Droplets: <Droplets size={24} />,
  Wind: <Wind size={24} />,
  Truck: <Truck size={24} />,
  Sparkles: <Sparkles size={24} />,
  MapPin: <MapPin size={24} />,
  Phone: <Phone size={24} />,
  Instagram: <Instagram size={24} />,
  Facebook: <Facebook size={24} />
};
