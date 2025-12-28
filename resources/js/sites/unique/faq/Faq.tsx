import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import type { FAQ } from './index';
import { FAQS } from './constant';
import { CONTACT_INFO } from '@/sites/shares/constants';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 md:p-8 rounded-[2rem] flex items-center justify-between transition-all duration-300 ${
          isOpen 
            ? 'bg-brand-static text-white shadow-xl shadow-brand/20' 
            : 'bg-white dark:bg-white/5 text-brand dark:text-white border border-slate-100 dark:border-white/10 hover:border-highlight hover:shadow-lg'
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg md:text-xl font-black pr-8">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-white/20' : 'bg-brand/5 dark:bg-highlight/10'}`}>
          {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-8 text-slate-600 dark:text-slate-400 font-medium leading-relaxed bg-white/50 dark:bg-white/5 mt-2 rounded-[2rem] border border-slate-100 dark:border-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <section 
      id="faq" 
      className="py-16 bg-light dark:bg-dark-bg transition-colors duration-500 relative overflow-hidden"
      aria-label="Questions fréquemment posées"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 rounded-full border border-highlight/20 mb-8" role="status" aria-label="Badge FAQ">
                <HelpCircle size={16} className="text-highlight" aria-hidden="true" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-highlight">FAQ</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-brand dark:text-white leading-tight mb-8">
                Des questions? <br />
                <span className="text-highlight italic font-light underline decoration-highlight underline-offset-8">On y répond.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg lg:text-xl leading-relaxed mb-12">
                Tout ce que vous devez savoir sur nos services de blanchisserie premium à Meknès.
              </p>
              
              <div className="p-8 rounded-[2.5rem] bg-brand text-white shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black mb-4">Besoin d'aide immédiate?</h3>
                <p className="text-white/70 mb-8 font-medium">Notre support WhatsApp est ouvert 7j/7 pour vous assister.</p>
                <a 
                  href={CONTACT_INFO.whatsapp.url(CONTACT_INFO.whatsapp.number, CONTACT_INFO.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-white text-brand rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-highlight hover:text-white transition-all text-center"
                  aria-label="Ouvrir le chat WhatsApp"
                >
                  Ouvrir le chat
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            {FAQS.map((faq, index) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
