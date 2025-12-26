import { ServiceItem, ServiceCategory } from '@/sites/unique/service/index';

// Service Images
export const SERVICE_IMAGES: Record<string, string> = {
  'lavage-sechage': '/images/avif/lavages-au-kg.avif',
  'nettoyage-tapis': '/images/avif/tapis.avif',
  'chaussures-rideaux': '/images/avif/chaussures-rideaux.avif',
  'repassage': '/images/avif/repassage.avif',
  'livraison': '/images/avif/Ecoloundry-Laivraison.avif'
};

export const SERVICES: ServiceItem[] = [
    {
      id: "lavage-sechage",
      title: "Lavage & Séchage",
      description: "Nettoyage quotidien haute performance. Vos vêtements sont frais, pliés et prêts à porter.",
      price: {
        prefix: "À partir de",
        amount: "15",
        unit: "DH/kg"
      },
      iconName: "WashingMachine",
      category: ServiceCategory.LAVAGE
    },
    {
      id: "nettoyage-tapis",
      title: "Tapis & Couettes",
      description: "Traitement spécial pour vos textiles lourds. Hygiène profonde garantie.",
      iconName: "Sparkles",
      category: ServiceCategory.SPECIALISE
    },
    {
      id: "chaussures-rideaux",
      title: "Chaussures & Rideaux",
      description: "Restauration de l'éclat de vos accessoires et textiles d'intérieur.",
      iconName: "Droplets",
      category: ServiceCategory.SPECIALISE
    },
    {
      id: "repassage",
      title: "Repassage Professionnel",
      description: "Finition impeccable pour vos chemises et costumes.",
      iconName: "Wind",
      category: ServiceCategory.REPASSAGE
    },
    {
      id: "livraison",
      title: "Livraison Express",
      description: "Nous récupérons et livrons à votre porte partout à Meknès.",
      iconName: "Truck",
      category: ServiceCategory.LIVRAISON
    }
  ];