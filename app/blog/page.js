import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import BlogCategoryNav from '@/components/BlogCategoryNav';
import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import BlogNewsletter from '@/components/BlogNewsletter';
import SalesFooterCTA from '@/components/SalesFooterCTA'; 

export const metadata = {
    title: 'shyphan.ai Blog | Telecalling Technology, Trends, and Practices',
    description: 'Read the latest insights, strategies, and technology updates on Voice AI and modern telecalling software.',
};

export default function BlogPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <AnnouncementBanner />
            <Navbar />
            
            {/* Sticky Category Sub-Navigation */}
            <BlogCategoryNav />
            
            {/* Featured Hero Post */}
            <BlogHero />
            
            {/* 3-Column Post Grid */}
            <BlogGrid />
            
            {/* Newsletter Subscription Block */}
            <BlogNewsletter />
            
            {/* Global Footer Stand-In */}
            <SalesFooterCTA />
        </main>
    );
}
