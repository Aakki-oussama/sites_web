import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/sites/shares/Header';
import Footer from '@/sites/shares/Footer';


export default function Welcome() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Always show loader for minimum 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Show for minimum 3 seconds

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <Head title="EcoLaundry" />

            <AnimatePresence mode="wait">
                {isLoading && <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand"></div>
                </div>}
            </AnimatePresence>

            {!isLoading && (
                <>
                    {/* Site Header */}
                    <Header />
                    
                    {/* Main Content Area - Add your page content here */}
                    <main className="min-h-screen">
                        {/* Your page content goes here */}
                    </main>
                    {/* Site Footer */}
                    <Footer />
                </>
            )}
        </>
    );
}