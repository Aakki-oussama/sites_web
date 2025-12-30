import { useState, useEffect } from 'react';

/**
 * Hook pour afficher le Loader à chaque chargement de la page
 * 
 * Le Loader s'affiche à chaque fois que la page se charge
 * et se cache automatiquement après le chargement (durée minimale garantie).
 * 
 * @param duration - Durée d'affichage minimale du loader (en ms, défaut: 2000ms)
 * @returns isVisible - Boolean indiquant si le loader doit être visible
 * 
 * @example
 * ```tsx
 * const isLoaderVisible = usePageLoader();
 * 
 * return (
 *   <>
 *     {isLoaderVisible && <Loader />}
 *     <MainContent />
 *   </>
 * );
 * ```
 */
export function usePageLoader(duration: number = 1500) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Temps de début pour garantir une durée minimale
    const startTime = Date.now();

    // Fonction pour masquer le loader
    const hideLoader = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, duration - elapsed);
      
      setTimeout(() => {
        setIsVisible(false);
      }, remaining);
    };

    // Attendre que la page soit chargée
    if (document.readyState === 'complete') {
      // Page déjà chargée, mais on garantit la durée minimale
      hideLoader();
    } else {
      // Attendre le chargement complet
      window.addEventListener('load', hideLoader, { once: true });
    }

    // Nettoyage
    return () => {
      window.removeEventListener('load', hideLoader);
    };
  }, [duration]);

  return isVisible;
}

