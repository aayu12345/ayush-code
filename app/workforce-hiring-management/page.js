'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';

import WorkforceHero from '@/components/WorkforceHero';
import WorkforceBentoGrid from '@/components/WorkforceBentoGrid';
import WorkforceQuadGrid from '@/components/WorkforceQuadGrid';
import WorkforceImpact from '@/components/WorkforceImpact';
import WorkforceComparison from '@/components/WorkforceComparison';
import WorkforceFAQ from '@/components/WorkforceFAQ';
import WorkforceFooterCTA from '@/components/WorkforceFooterCTA';

export default function WorkforceHiringPage() {
    useScrollReveal();

    return (
        <div style={{ background: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <main>
                <WorkforceHero />
                <div className="reveal"><WorkforceBentoGrid /></div>
                <div className="reveal"><WorkforceQuadGrid /></div>
                <div className="reveal"><WorkforceImpact /></div>
                <div className="reveal"><WorkforceComparison /></div>
                <div className="reveal"><WorkforceFAQ /></div>
                <div className="reveal"><WorkforceFooterCTA /></div>
            </main>
        </div>
    );
}
