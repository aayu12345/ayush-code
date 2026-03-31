'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';

import CustomerStoriesHero from '@/components/CustomerStoriesHero';
import CustomerStoriesGrid from '@/components/CustomerStoriesGrid';
import CustomerStoriesCTA from '@/components/CustomerStoriesCTA';

export default function CustomerStoriesPage() {
    useScrollReveal();

    return (
        <div style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <main style={{flex: 1}}>
                <CustomerStoriesHero />
                <CustomerStoriesGrid />
                <div className="reveal"><CustomerStoriesCTA /></div>
            </main>
        </div>
    );
}
