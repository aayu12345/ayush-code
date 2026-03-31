'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';

import CollectionsHero from '@/components/CollectionsHero';
import CollectionsBentoGrid from '@/components/CollectionsBentoGrid';
import CollectionsQuadGrid from '@/components/CollectionsQuadGrid';
import CollectionsComparison from '@/components/CollectionsComparison';
import CollectionsFAQ from '@/components/CollectionsFAQ';
import CollectionsFooterCTA from '@/components/CollectionsFooterCTA';

export default function LoanEmiCollectionsPage() {
    useScrollReveal();

    return (
        <div style={{ background: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <main>
                <CollectionsHero />
                <div className="reveal"><CollectionsBentoGrid /></div>
                <div className="reveal"><CollectionsQuadGrid /></div>
                <div className="reveal"><CollectionsComparison /></div>
                <div className="reveal"><CollectionsFAQ /></div>
                <div className="reveal"><CollectionsFooterCTA /></div>
            </main>
        </div>
    );
}
