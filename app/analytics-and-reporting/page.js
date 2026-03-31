'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import AnalyticsHero from '@/components/AnalyticsHero';
import AnalyticsFeatures from '@/components/AnalyticsFeatures';
import AnalyticsDashboardUI from '@/components/AnalyticsDashboardUI';
import AgentMgmtCTA from '@/components/AgentMgmtCTA';

export default function AnalyticsAndReporting() {
    useScrollReveal();

    return (
        <div style={{ background: '#f4f5f9' }}>
            <AnnouncementBanner />
            <Navbar />
            <main>
                <AnalyticsHero />

                <div className="reveal">
                    <AnalyticsDashboardUI />
                </div>

                <div className="reveal">
                    <AnalyticsFeatures />
                </div>

                <div className="reveal">
                    <AgentMgmtCTA />
                </div>

            </main>
            <Footer />
        </div>
    );
}
