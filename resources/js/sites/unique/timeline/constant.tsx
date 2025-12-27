import { Step, Metric } from '@/sites/unique/timeline/index';

// Timeline Process Steps
export const STEPS: Step[] = [
    {
      id: 1,
      title: "Commandez via WhatsApp",
      description: "Un simple message suffit pour planifier votre collecte.",
      iconName: "Phone"
    },
    {
      id: 2,
      title: "Collecte à Domicile",
      description: "Notre équipe se déplace chez vous à l'heure convenue.",
      iconName: "Truck"
    },
    {
      id: 3,
      title: "Nettoyage Premium",
      description: "Utilisation de produits écologiques pour protéger vos fibres.",
      iconName: "Sparkles"
    },
    {
      id: 4,
      title: "Livraison Fraîcheur",
      description: "Vos articles reviennent comme neufs en un temps record.",
      iconName: "Droplets"
    }
  ];

// Timeline Metrics/Trust Badges
export const METRICS: Metric[] = [
  { label: "Clients Heureux", value: "785+" },
  { label: "Linge Traité", value: "15T+" },
  { label: "Articles Express", value: "48h" },
  { label: "Satisfaction", value: "98%" },
];