import { Head } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/sites/shares/Header';
import Footer from '@/sites/shares/Footer';
import Loader from '@/sites/shares/Loader';
import Hero from '@/sites/unique/hero/Hero';
import Services from '@/sites/unique/service/Service';
import Timeline from '@/sites/unique/timeline/Timeline';
import Whyus from '@/sites/unique/whyus/Whyus';
import Gallery from '@/sites/unique/galery/Galerie';
import Contact from '@/sites/unique/contact/Contacter';
import Testimonials from '@/sites/unique/testimonial/Testimonials';
import FAQ from '@/sites/unique/faq/Faq';
import { usePageLoader } from '@/hooks/usePageLoader';
import { SEO_INFO } from '@/sites/shares/constants';

export default function Welcome() {
    const isLoaderVisible = usePageLoader();

    return (
        <>
            {/* SEO Meta Tags - Centralized in constants.tsx for easy maintenance */}
            <Head title={SEO_INFO.default.title}>
                <meta name="description" content={SEO_INFO.default.description} />
                <meta name="keywords" content={SEO_INFO.default.keywords} />
            </Head>

            {/* Page Loader - Affiche au premier chargement */}
            <AnimatePresence>
                {isLoaderVisible && <Loader />}
            </AnimatePresence>

            {/* Contenu toujours rendu mais invisible pendant le loader pour éviter layout shift */}
            <div 
                style={{ 
                    opacity: isLoaderVisible ? 0 : 1, 
                    transition: 'opacity 0.3s ease-out',
                    pointerEvents: isLoaderVisible ? 'none' : 'auto'
                }}
            >
                {/* Site Header */}
                <Header />
                
                {/* Main Content Area - Add your page content here */}
                <main className="min-h-screen">
                    {/* Your page content goes here */}
                    <Hero />
                    <Services />
                    <Timeline />
                    <Whyus />
                    <Gallery />
                    <Contact />
                    <Testimonials />
                    <FAQ />
                </main>
                {/* Site Footer */}
                <Footer />
            </div>
        </>
    );
}