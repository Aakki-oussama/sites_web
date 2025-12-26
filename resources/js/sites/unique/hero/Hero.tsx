import { motion } from 'framer-motion';
import { CheckCircle2, Truck } from 'lucide-react';
import { HERO_FEATURES } from '@/sites/unique/hero/constants';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-light dark:bg-dark-bg">
      {/* Dynamic Brand Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -z-10 asymmetric-clip" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-highlight/10 rounded-full blur-xl lg:blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ willChange: 'transform' }}
          >
            {/* Semantic Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-light/80 dark:bg-dark-bg/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brand/10 mb-6"
              role="status"
              aria-label="Service Premium disponible à Meknès"
            >
              <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-brand dark:text-slate-300 font-bold text-sm uppercase tracking-widest">
                Service Premium à Meknès
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-brand leading-[1.1] mb-8">
            Service de blanchisserie, <br />
              <span className="text-brand dark:text-white">au kilo.</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg leading-relaxed font-medium">
               Lavage au kilo, soin professionnel du linge et livraison à domicile.
            Une solution simple, fiable et écologique pour des vêtements propres, frais et parfaitement entretenus.
              <span className="block mt-4 font-bold text-brand dark:text-highlight">À partir de 15 DH / kg</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="brand"
                size="site-md"
                aria-label="Bouton de commande - Fonctionnalité à venir"
              >
                Empty
              </Button>
              <Button 
                asChild
                variant="brand-outline"
                size="site-md"
              >
                <a href="#services">Nos Tarifs</a>
              </Button>
            </div>

            <ul className="mt-12 flex flex-wrap gap-6 items-center" aria-label="Avantages du service">
              {HERO_FEATURES.map((text) => (
                <li key={text} className="flex items-center gap-2 text-brand dark:text-slate-300 font-medium">
                  <CheckCircle2 size={18} className="text-highlight" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand/10 border-4 border-white/20">
              <img 
                src="/images/avif/hero.avif" 
                alt="Ecolaundry Meknes" 
                fetchPriority="high"
                className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Glass Card Overlay using Highlight border */}
            <article 
              className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-3xl shadow-xl max-w-xs border-highlight/30"
              aria-label="Service de collecte express disponible"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center text-white" aria-hidden="true">
                  <Truck aria-hidden="true" />
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs font-bold uppercase">Collecte Express</p>
                  <p className="text-brand dark:text-white font-extrabold text-xl">Disponible</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Nous arrivons chez vous en moins de 60 minutes à Meknès.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
