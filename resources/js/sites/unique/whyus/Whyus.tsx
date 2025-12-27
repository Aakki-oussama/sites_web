import { motion } from 'framer-motion';
import { Trophy, Heart } from 'lucide-react';
import { REASONS } from '@/sites/unique/whyus/constant';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 bg-light dark:bg-dark-bg transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/5 dark:bg-highlight/10 rounded-full border border-brand/10 dark:border-highlight/20 mb-8">
                <Trophy size={16} className="text-highlight" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand dark:text-slate-300">Leader à Meknès</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-[1.1] mb-8">
                L'excellence est dans le <br />
                <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">détail.</span>
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-12">
                Ecolaundry n'est pas qu'un pressing, c'est une promesse de longévité pour vos vêtements préférés.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                  <div className="text-3xl font-black text-brand dark:text-highlight mb-1">98%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Satisfaction</div>
                </div>
                <div className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm">
                  <div className="text-3xl font-black text-brand dark:text-highlight mb-1">15k+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Articles Traités</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {REASONS.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${reason.border} border-transparent`}
              >
                {/* Number Watermark */}
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 dark:text-white/5 select-none transition-colors group-hover:text-brand/10 dark:group-hover:text-highlight/10">
                  {reason.id}
                </div>

                {/* Icon Container with Gradient Glow */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-brand dark:text-highlight mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {reason.icon}
                </div>

                <h3 className="text-2xl font-black text-brand dark:text-white mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {reason.description}
                </p>

                {/* Bottom Decorative Bar */}
                <div className="mt-8 w-12 h-1 bg-slate-100 dark:bg-white/10 rounded-full group-hover:w-full group-hover:bg-highlight dark:group-hover:bg-highlight transition-all duration-700" />
              </motion.div>
            ))}

            {/* Specialized Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group sm:col-span-2 p-10 rounded-[2.5rem] bg-brand text-white flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Heart className="w-10 h-10 fill-white dark:group-hover:fill-brand" />
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2">Un service avec du cœur</h4>
                <p className="text-brand-light/80 font-medium opacity-80">
                  Parce que vos vêtements font partie de votre histoire, nous les traitons avec le respect qu'ils méritent.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
