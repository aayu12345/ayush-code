import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import EbookHero from '@/components/EbookHero';
import EbookSidebar from '@/components/EbookSidebar';
import EbookGrid from '@/components/EbookGrid';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata = {
    title: 'SquadStack | E-books & White Papers',
    description: 'Stay updated to fuel your hunger for growth! Download industry leading resources.',
};

export default function EbookPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <EbookHero />
            
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
                    <EbookSidebar />
                    <EbookGrid />
                </div>
            </section>
            
            <GlobalFooter />
        </main>
    );
}
