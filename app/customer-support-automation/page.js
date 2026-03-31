'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';

import SupportHero from '@/components/SupportHero';
import SupportBentoGrid from '@/components/SupportBentoGrid';
import SupportQuadGrid from '@/components/SupportQuadGrid';
import SupportImpact from '@/components/SupportImpact';
import SupportComparison from '@/components/SupportComparison';
import SupportFAQ from '@/components/SupportFAQ';
import SupportFooterCTA from '@/components/SupportFooterCTA';

export default function CustomerSupportAutomationPage() {
    useScrollReveal();

    return (
        <div style={{ background: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <main>
                <SupportHero />
                <div className="reveal"><SupportBentoGrid /></div>
                <div className="reveal"><SupportQuadGrid /></div>
                <div className="reveal"><SupportImpact /></div>
                <div className="reveal"><SupportComparison /></div>
                <div className="reveal"><SupportFAQ /></div>
                <div className="reveal"><SupportFooterCTA /></div>
            </main>
        </div>
    );
}
