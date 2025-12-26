import { Head } from '@inertiajs/react';
import Header from '@/sites/shares/Header';
import Footer from '@/sites/shares/Footer';
import Hero from '@/sites/unique/hero/Hero';
import Services from '@/sites/unique/service/Service';
import Timeline from '@/sites/unique/timeline/Timeline';

export default function Welcome() {
    return (
        <>
            <Head title="EcoLaundry" />

            {/* Site Header */}
            <Header />
            
            {/* Main Content Area - Add your page content here */}
            <main className="min-h-screen">
                {/* Your page content goes here */}
                <Hero />
                <Services />
                <Timeline />
            </main>
            {/* Site Footer */}
            <Footer />
        </>
    );
}