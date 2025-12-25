import { Head } from '@inertiajs/react';
import Header from '@/sites/shares/Header';
import Footer from '@/sites/shares/Footer';
import Hero from '@/sites/unique/hero/Hero';

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
            </main>
            {/* Site Footer */}
            <Footer />
        </>
    );
}