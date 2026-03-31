'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';

import SalesHero from '@/components/SalesHero';
import SalesBrands from '@/components/SalesBrands';
import SalesBentoGrid from '@/components/SalesBentoGrid';
import SalesPersonalization from '@/components/SalesPersonalization';
import SalesJourneys from '@/components/SalesJourneys';
import SalesComparison from '@/components/SalesComparison';
import SalesIntegrations from '@/components/SalesIntegrations';
import SalesFAQ from '@/components/SalesFAQ';
import SalesFooterCTA from '@/components/SalesFooterCTA';

export default function SalesPage() {
    useScrollReveal();

    return (
        <div style={{ background: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <main>
                <SalesHero />
                
                <div className="reveal"><SalesBrands /></div>
                <div className="reveal"><SalesBentoGrid /></div>
                <div className="reveal"><SalesPersonalization /></div>
                <div className="reveal"><SalesJourneys /></div>
                <div className="reveal"><SalesComparison /></div>
                <div className="reveal"><SalesIntegrations /></div>
                <div className="reveal"><SalesFAQ /></div>
                
                {/* Replaces the standard FooterCTA and Footer */}
                <div className="reveal"><SalesFooterCTA /></div>
            </main>
        </div>
    );
}
