import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import EbookHero from '@/components/EbookHero';
import EbookSidebar from '@/components/EbookSidebar';
import HumanoidGrid from '@/components/HumanoidGrid';
import GlobalFooter from '@/components/GlobalFooter';

export const metadata = {
    title: 'Humanoid Interaction Library | shyphan.ai Resources',
    description: 'Listen to recorded interactions showcasing how the Humanoid AI Agent effortlessly handles complex test drives, onboarding, and return bookings.',
};

export default function HumanoidPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <EbookHero />
            
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
                    <EbookSidebar activeCategory="Humanoid Interaction Library" />
                    <HumanoidGrid />
                </div>
            </section>
            
            <GlobalFooter />
        </main>
    );
}
