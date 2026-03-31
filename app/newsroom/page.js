import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import NewsroomGrid from '@/components/NewsroomGrid';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './page.module.css';

export const metadata = {
    title: 'Newsroom | shyphan.ai',
    description: 'Explore the latest updates across press coverage, product innovation, and milestones.',
};

export default function NewsroomPage() {
    return (
        <main className={styles.main}>
            <AnnouncementBanner />
            <Navbar />
            
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.heroTitle}>In the News</h1>
                    <p className={styles.heroSubtitle}>
                        Explore the latest updates across press coverage, product innovation, and milestones as we build the world’s most human-sounding Voice AI.
                    </p>
                </div>
            </section>

            {/* Layout Main Container */}
            <section className={styles.container}>
                <div className={styles.layoutWrapper}>
                    {/* Left Sidebar Layout */}
                    <aside className={styles.sidebar}>
                        <h2 className={styles.sidebarTitle}>Categories</h2>
                        <ul className={styles.sidebarList}>
                            <li className={styles.sidebarItemActive}>All</li>
                            <li className={styles.sidebarItem}>Press Release</li>
                            <li className={styles.sidebarItem}>Product Announcement</li>
                            <li className={styles.sidebarItem}>Media Coverage</li>
                            <li className={styles.sidebarItem}>Thought Leadership</li>
                        </ul>
                    </aside>
                    
                    {/* Main Grid Area */}
                    <div className={styles.contentArea}>
                        <div className={styles.feedHeader}>
                            <h2>Latest Updates</h2>
                        </div>
                        <NewsroomGrid />
                    </div>
                </div>
            </section>

            <GlobalFooter />
        </main>
    );
}
