import type { Reason } from '@/sites/unique/whyus/index';
import { ShieldCheck, Leaf, Clock, Zap } from 'lucide-react';

// Reasons data
export const REASONS: Reason[] = [
  {
    id: "01",
    title: "Expertise Artisanale",
    description: "Chaque fibre est traitée avec le plus grand soin par nos experts formés aux techniques de nettoyage les plus délicates.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "from-blue-500/20 to-brand/20",
    border: "group-hover:border-brand"
  },
  {
    id: "02",
    title: "Engagement Vert",
    description: "Nous utilisons exclusivement des solvants biodégradables et des procédés économes en eau pour un avenir plus propre.",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500"
  },
  {
    id: "03",
    title: "Ponctualité Absolue",
    description: "Un service de ramassage et de livraison qui respecte scrupuleusement votre emploi du temps, 7j/7 à Meknès.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-highlight/20 to-blue-400/20",
    border: "group-hover:border-highlight"
  },
  {
    id: "04",
    title: "Technologie Pro",
    description: "Nos machines de dernière génération garantissent un résultat impeccable sans agresser vos textiles précieux.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500"
  }
];

