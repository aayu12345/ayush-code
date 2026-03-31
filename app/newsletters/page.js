import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import NewsletterHero from '@/components/NewsletterHero';
import NewsletterContent from '@/components/NewsletterContent';
import NewsletterRelated from '@/components/NewsletterRelated';
import NewsletterFooter from '@/components/NewsletterFooter';

export const metadata = {
    title: 'Newsletters | SquadStack Resources',
    description: 'Step into the Future of CX with the Dialed In newsletter. Gain insights into AI-led customer experience strategies and automations.',
};

export default function NewslettersPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            <NewsletterHero />
            
            <NewsletterContent />
            
            <NewsletterRelated />
            
            <NewsletterFooter />
        </main>
    );
}
