'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import VettedCallersHero from '@/components/VettedCallersHero';
import ClientLogos from '@/components/ClientLogos';
import StatsSection from '@/components/StatsSection';
import VettedCallersTrainingOverview from '@/components/VettedCallersTrainingOverview';
import VettedCallersResources from '@/components/VettedCallersResources';
import SecuritySection from '@/components/SecuritySection';
import IntegrationsHub from '@/components/IntegrationsHub';
import FooterCTA from '@/components/FooterCTA';

export default function VettedTrainedTelecallers() {
    useScrollReveal();

    return (
        <div style={{ background: '#f4f5f9' }}>
            <AnnouncementBanner />
            <Navbar />
            <main>
                <VettedCallersHero />
                
                <div className="reveal">
                    <ClientLogos />
                </div>

                <div className="reveal">
                    <StatsSection />
                </div>

                <div className="reveal">
                    <VettedCallersTrainingOverview />
                </div>

                <div className="reveal">
                    <VettedCallersResources />
                </div>

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
