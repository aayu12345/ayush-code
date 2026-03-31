import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import EbookHero from '@/components/EbookHero';
import EbookSidebar from '@/components/EbookSidebar';
import EventsGrid from '@/components/EventsGrid';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata = {
    title: 'Events | shyphan.ai Resources',
    description: 'Catch up on all the latest events, masterclasses, and award summits involving standard telecalling integrations.',
};

export default function EventsPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <EbookHero />
            
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
                    <EbookSidebar activeCategory="Events" />
                    <EventsGrid />
                </div>
            </section>
            
            <GlobalFooter />
        </main>
    );
}
