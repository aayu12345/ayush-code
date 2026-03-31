import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import EbookHero from '@/components/EbookHero';
import EbookSidebar from '@/components/EbookSidebar';
import WebinarGrid from '@/components/WebinarGrid';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata = {
    title: 'Webinars | SquadStack Resources',
    description: 'Watch comprehensive webinars examining strategies and AI automation implementations targeting CX, telecalling, and sales.',
};

export default function WebinarPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <EbookHero />
            
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
                    <EbookSidebar activeCategory="Webinars" />
                    <WebinarGrid />
                </div>
            </section>
            
            <GlobalFooter />
        </main>
    );
}
