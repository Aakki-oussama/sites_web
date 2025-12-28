import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from './constant';
import { useTestimonialSlider } from './useTestimonialSlider';
import { CONTACT_INFO } from '@/sites/shares/constants';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 30 : -30,
    opacity: 0,
  })
};

export default function Testimonials() {
  const { activeIndex, direction, next, prev, goTo } = useTestimonialSlider({ 
    totalItems: TESTIMONIALS.length 
  });

  const current = TESTIMONIALS[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="py-16 bg-light dark:bg-dark-bg transition-colors duration-500 overflow-hidden relative"
      aria-label="Témoignages clients"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text and Map */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4" aria-label="Badge Confiance & Proximité">
                <span className="w-6 h-[2px] bg-highlight rounded-full" aria-hidden="true" />
                <span className="text-highlight font-black text-xs uppercase tracking-[0.3em]">Confiance & Proximité</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight mb-8">
                Ils nous font <br />
                <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">confiance à EcoLaundry.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed">
                Découvrez les avis de nos clients locaux et retrouvez-nous au cœur de la ville.
              </p>
            </motion.div>

            {/* Google Maps */}
            <div className="relative w-full overflow-hidden rounded-[2rem] shadow-xl aspect-video border border-slate-100 dark:border-white/10">
              <iframe
                src={CONTACT_INFO.googleMaps.embedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Localisation Ecolaundry - Ave Zitoune, Meknès"
                aria-label="Carte Google Maps montrant l'emplacement d'Ecolaundry à Ave Zitoune, Meknès"
              />
            </div>
          </div>

          {/* Right Side: Simple Testimonial Slider */}
          <div className="flex flex-col justify-center min-h-[400px]">
            <div className="relative h-full flex flex-col">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.2 },
                    x: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                  className="w-full"
                >
                  <div 
                    className="bg-white dark:bg-white/5 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative h-full"
                    role="article"
                    aria-label={`Témoignage de ${current.name}, ${current.role}`}
                  >
                    <Quote className="text-highlight/20 w-10 h-10 mb-6" aria-hidden="true" />
                    
                    <div className="flex items-center gap-1 mb-6" role="img" aria-label={`Note: ${current.rating} sur 5 étoiles`}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < current.rating ? "fill-highlight text-highlight" : "text-slate-200 dark:text-slate-700"} 
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 leading-snug mb-8 tracking-tight italic">
                      "{current.content}"
                    </blockquote>

                    <div className="border-t border-slate-200 dark:border-white/5 pt-6">
                      <h3 className="text-xl md:text-2xl font-black text-brand dark:text-white mb-2 leading-tight">{current.name}</h3>
                      <p className="text-slate-600 dark:text-slate-200 text-xs font-black uppercase tracking-widest">{current.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="mt-12 flex items-center justify-end">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand dark:hover:text-highlight hover:border-brand dark:hover:border-highlight transition-all"
                    aria-label="Témoignage précédent"
                  >
                    <ChevronLeft size={20} aria-hidden="true" />
                  </button>
                  <button 
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand dark:hover:text-highlight hover:border-brand dark:hover:border-highlight transition-all"
                    aria-label="Témoignage suivant"
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
