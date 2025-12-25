import React from 'react';
import { WashingMachine, Droplets, Wind, Truck, Sparkles, MapPin, Phone, Instagram, Facebook, MessageCircle, Mail, Clock } from 'lucide-react';

export const APP_NAME = "Ecolaundry";
export const LOCATION = "Meknès, Maroc";

// Contact Information
export const CONTACT_INFO = {
  address: {
    city: "Meknès, Maroc",
    district: "Ave Zitoune",
    full: "Ave Zitoune, Meknès 50000, Morocco"
  },
  phone: "+212664755026",
  email: "contact@ecolaundry.ma", // Update with your real email
  whatsapp: {
    number: "+212664755026",
    message: "Bonjour Ecolaundry, je souhaite commander un service à Meknès.",
    url: (number: string, message: string) => `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
  },
  social: {
    facebook: "https://www.facebook.com/ecolaundrymeknes/",
    instagram: "https://www.instagram.com/eco_laundry22/"
  },
  hours: {
    open: "9:00",
    close: "21:00",
    display: "9:00 - 21:00",
    days: "Lun-Dim (sauf Vendredi)"
  }
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Processus", href: "#process" },
  { name: "Pourquoi Nous", href: "#why-us" }
];

// Social Media Icons
export const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Facebook: <Facebook size={24} />,
  Instagram: <Instagram size={24} />,
  WhatsApp: <MessageCircle size={24} />
};

// Contact Icons
export const CONTACT_ICONS: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={24} />,
  Phone: <Phone size={24} />,
  Mail: <Mail size={24} />,
  WhatsApp: <MessageCircle size={24} />,
  Clock: <Clock size={24} />
};

// Service/Content Icons (for center sections)
export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  WashingMachine: <WashingMachine size={24} />,
  Droplets: <Droplets size={24} />,
  Wind: <Wind size={24} />,
  Truck: <Truck size={24} />,
  Sparkles: <Sparkles size={24} />
};

// All Icons (for backward compatibility)
export const ICONS: Record<string, React.ReactNode> = {
  ...SOCIAL_ICONS,
  ...CONTACT_ICONS,
  ...SERVICE_ICONS
};
