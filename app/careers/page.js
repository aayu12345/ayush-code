import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './page.module.css';

export const metadata = {
    title: 'Careers | shyphan.ai',
    description: 'Join shyphan.ai and help us build the future of conversational AI.',
};

export default function CareersPage() {
    return (
        <main className={styles.main}>
            <AnnouncementBanner />
            <Navbar />
            
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <h1 className={styles.heroTitle}>
                        Build the Future of <span className={styles.highlight}>Conversational AI</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        At shyphan.ai, we are on a relentless mission to revolutionize how businesses interact with their customers through cutting-edge voicebots and artificial intelligence. Join us in shaping tomorrow.
                    </p>
                </div>
            </section>

            {/* Culture / Perks Section */}
            <section className={styles.culture}>
                <div className={styles.cultureInner}>
                    <div className={styles.sectionHeader}>
                        <h2>Why work at shyphan.ai?</h2>
                        <p>We believe in empowering our team with the best resources, flexibility, and a culture of continuous innovation.</p>
                    </div>
                    
                    <div className={styles.perksGrid}>
                        <div className={styles.perkCard}>
                            <div className={styles.perkIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <h3>Remote-First</h3>
                            <p>Work from anywhere. We value output and creativity over office attendance.</p>
                        </div>
                        <div className={styles.perkCard}>
                            <div className={styles.perkIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </div>
                            <h3>Comprehensive Health</h3>
                            <p>Premium medical, dental, and vision coverage protecting you and your dependents.</p>
                        </div>
                        <div className={styles.perkCard}>
                            <div className={styles.perkIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <h3>Continuous Learning</h3>
                            <p>Annual stipends for courses, global conferences, and unlimited book allowances.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section className={styles.openings}>
                <div className={styles.openingsInner}>
                    <h2>Open Positions</h2>
                    
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <h3 className={styles.emptyTitle}>No current openings</h3>
                        <p className={styles.emptyDesc}>
                            We've recently filled our active pipelines, but we are always on the lookout for exceptional engineering and sales talent!
                        </p>
                        <a href="mailto:careers@shyphan.ai" className={styles.emptyCta}>Drop your resume</a>
                    </div>
                </div>
            </section>

            <GlobalFooter />
        </main>
    );
}
