import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import EbookHero from '@/components/EbookHero';
import EbookSidebar from '@/components/EbookSidebar';
import IndustryGrid from '@/components/IndustryGrid';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata = {
    title: 'Industry Reports | shyphan.ai Resources',
    description: 'Explore our latest comprehensive reports tracking market trend shifts and growth multipliers spanning CX, Finance, eCommerce, and Logistics.',
};

export default function IndustryReportPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <EbookHero />
            
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
                    <EbookSidebar activeCategory="Industry Reports" />
                    <IndustryGrid />
                </div>
            </section>
            
            <GlobalFooter />
        </main>
    );
}
