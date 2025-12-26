import { motion } from 'framer-motion';
import { SERVICES, SERVICE_IMAGES } from '@/sites/unique/service/Constant';
import { ICONS } from '@/sites/shares/constants';
import CategoryBadge from '@/sites/unique/service/CategoryBadge';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-light dark:bg-dark-bg transition-colors duration-500 overflow-hidden relative">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-brand/5 rounded-full blur-xl lg:blur-[100px] pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-xl lg:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-highlight" />
              <span className="text-highlight font-black text-xs uppercase tracking-[0.3em]">Excellence Operationnelle</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight">
              Soin Textile <br />
              <span className="text-highlight italic font-light">Haute Couture.</span>
            </h2>
          </motion.div>
          
          <div className="lg:max-w-md">
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
              Nous traitons chaque article comme une pièce d'exception. Notre processus combine technologie de pointe et savoir-faire artisanal à Meknès.
            </p>
          </div>
        </div>

        {/* New Modular Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:flex-row' : ''
              }`}
              aria-label={`Service: ${service.title}`}
            >
              {/* Image Section */}
              <div className={`relative overflow-hidden ${index === 0 ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-64'}`}>
                <img 
                  src={SERVICE_IMAGES[service.id]} 
                  alt={`Illustration du service ${service.title}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent" />
                <CategoryBadge category={service.category} />
              </div>

              {/* Content Section */}
              <div className={`p-10 flex flex-col justify-between ${index === 0 ? 'lg:w-1/2' : 'flex-1'}`}>
                <div>
                  <div 
                    className="w-14 h-14 bg-brand/5 dark:bg-highlight/10 rounded-2xl flex items-center justify-center text-brand dark:text-highlight mb-8 lg:group-hover:scale-110 lg:group-hover:bg-brand lg:group-hover:text-white transition-all duration-500"
                    aria-hidden="true"
                  >
                    {ICONS[service.iconName]}
                  </div>
                  <h3 className="text-3xl font-black text-brand dark:text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {service.price && (
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-col">
                      {service.price.prefix && (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{service.price.prefix}</span>
                      )}
                      <span className="text-xl font-black text-brand dark:text-highlight tracking-tighter">{service.price.amount} {service.price.unit}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[3rem] bg-brand text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/20 blur-lg lg:blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h4 className="text-3xl font-black mb-2">Vous avez un article volumineux ?</h4>
            <p className="text-white text-lg opacity-80">Couettes, tapis de luxe, ou rideaux — nous avons l'équipement adapté.</p>
          </div>
          <button 
            className="relative z-10 px-10 py-5 bg-highlight text-white rounded-2xl font-black text-lg hover:bg-white hover:text-brand transition-all shadow-xl shadow-black/20 shrink-0"
            aria-label="Demander un devis gratuit pour articles volumineux"
          >
            Demander un devis gratuit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
