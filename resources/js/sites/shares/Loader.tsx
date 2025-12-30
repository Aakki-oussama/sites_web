import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[9999] bg-light dark:bg-dark-bg flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Brand Mark using Brand Blue */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
          className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center mb-6 animate-liquid shadow-2xl shadow-brand/30"
        >
          <span className="text-light font-black text-4xl">E</span>
        </motion.div>

        {/* Brand Name using Brand Blue and Highlight Cyan */}
        <div className="flex overflow-hidden">
          {"EcoLaundry".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: 0.1 + index * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              className={`text-3xl font-black tracking-tighter ${
                index < 3 ? 'text-brand' : 'text-highlight'
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Line Track using Brand transparency */}
        <motion.div 
          className="mt-8 h-[2px] bg-brand/10 dark:bg-highlight/10 w-48 relative overflow-hidden rounded-full"
        >
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ 
              left: "100%",
              transition: { 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "easeInOut" 
              }
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-brand dark:via-highlight to-transparent"
          />
        </motion.div>

        {/* Brand Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-[10px] font-bold text-brand/40 dark:text-highlight/40 uppercase tracking-[0.3em]"
        >
          Meknès • Maroc
        </motion.p>
      </div>

      {/* Decorative Brand Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand/10 dark:border-highlight/5 rounded-full animate-ping pointer-events-none" />
    </motion.div>
  );
}
