'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import LeadMgmtHero from '@/components/LeadMgmtHero';
import ClientLogos from '@/components/ClientLogos';
import LeadMgmtFeatures from '@/components/LeadMgmtFeatures';
import SecuritySection from '@/components/SecuritySection';
import IntegrationsHub from '@/components/IntegrationsHub';
import FooterCTA from '@/components/FooterCTA';

export default function LeadManagement() {
    useScrollReveal();

    return (
        <div style={{ background: '#f8fafc' }}>
            <AnnouncementBanner />
            <Navbar />
            <main>
                <LeadMgmtHero />
                
                <div className="reveal">
                    <ClientLogos />
                </div>

                <div className="reveal">
                    <LeadMgmtFeatures />
                </div>

                {/* Match standard footer components from main page */}
                <div className="reveal">
                    <SecuritySection />
                </div>

                <div className="reveal">
                    <IntegrationsHub />
                </div>

                <div className="reveal">
                    <FooterCTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
