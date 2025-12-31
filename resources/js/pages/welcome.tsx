import { useMemo, type CSSProperties } from 'react';
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
import { SEO_CONFIG, generateStructuredData } from '@/sites/shares/seo';

export default function Welcome() {
    const isLoaderVisible = usePageLoader();
    
    // Mémoriser les données structurées pour éviter le recalcul à chaque render
    const structuredData = useMemo(() => generateStructuredData(), []);
    
    // Mémoriser les styles pour éviter de recréer l'objet à chaque render
    const contentStyle = useMemo<CSSProperties>(
        () => ({
            opacity: isLoaderVisible ? 0 : 1,
            transition: 'opacity 0.3s ease-out',
            pointerEvents: isLoaderVisible ? 'none' : 'auto',
        }),
        [isLoaderVisible]
    );

    return (
        <>
            {/* SEO Meta Tags */}
            <Head title={SEO_INFO.default.title}>
                <meta name="description" content={SEO_INFO.default.description} />
                <meta name="keywords" content={SEO_INFO.default.keywords} />

                {/* Canonical URL */}
                <link rel="canonical" href={SEO_CONFIG.canonicalUrl} />

                {/* Open Graph Tags */}
                <meta property="og:type" content={SEO_CONFIG.openGraph.type} />
                <meta property="og:locale" content={SEO_CONFIG.openGraph.locale} />
                <meta property="og:site_name" content={SEO_CONFIG.openGraph.siteName} />
                <meta property="og:title" content={SEO_CONFIG.openGraph.title} />
                <meta property="og:description" content={SEO_CONFIG.openGraph.description} />
                <meta property="og:url" content={SEO_CONFIG.openGraph.url} />
                <meta property="og:image" content={SEO_CONFIG.openGraph.image} />
                <meta property="og:image:alt" content={SEO_CONFIG.openGraph.imageAlt} />
                <meta property="og:image:width" content={SEO_CONFIG.openGraph.imageWidth} />
                <meta property="og:image:height" content={SEO_CONFIG.openGraph.imageHeight} />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>

            {/* Page Loader - Affiche au premier chargement */}
            <AnimatePresence>
                {isLoaderVisible && <Loader />}
            </AnimatePresence>

            {/* Contenu toujours rendu mais invisible pendant le loader pour éviter layout shift */}
            <div style={contentStyle}>
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