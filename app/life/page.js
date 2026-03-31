import AnnouncementBanner from '@/components/AnnouncementBanner';
import Navbar from '@/components/Navbar';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './page.module.css';

export const metadata = {
    title: 'Life at shyphan.ai',
    description: 'Experience the energy of building the future of conversational AI with a world-class team.',
};

export default function LifePage() {
    return (
        <main className={styles.main}>
            <AnnouncementBanner />
            <Navbar />
            
            {/* Hero */}
            <section className={styles.lifeHero}>
                <div className={styles.lifeHeroInner}>
                    <h1 className={styles.lifeTitle}>
                        Life at <span className={styles.brandGradient}>shyphan.ai</span>
                    </h1>
                    <p className={styles.lifeSubtitle}>
                        We are a collective of relentless innovators, engineers, and creators. We don’t just build software—we engineer the future of human-AI collaboration.
                    </p>
                </div>
            </section>

            {/* Visual Gallery */}
            <section className={styles.gallery}>
                <div className={styles.galleryInner}>
                    <div className={styles.galleryGrid}>
                        <div className={`${styles.galleryItem} ${styles.galleryLarge}`}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Team collaborating" />
                            <div className={styles.galleryOverlay}>Idea Incubation</div>
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Whiteboard session" />
                            <div className={styles.galleryOverlay}>Strategy Sprints</div>
                        </div>
                        <div className={styles.galleryItem}>
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" alt="Development deep dive" />
                            <div className={styles.galleryOverlay}>Deep Work</div>
                        </div>
                        <div className={`${styles.galleryItem} ${styles.galleryMedium}`}>
                            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" alt="Office culture" />
                            <div className={styles.galleryOverlay}>Team Synergy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture Philosophy */}
            <section className={styles.philosophy}>
                <div className={styles.philosophyInner}>
                    <div className={styles.philContent}>
                        <h2>Our DNA</h2>
                        <div className={styles.philList}>
                            <div className={styles.philBlock}>
                                <h3>Radical Transparency</h3>
                                <p>We operate with high-trust defaults. Information flows openly across every tier of our organization.</p>
                            </div>
                            <div className={styles.philBlock}>
                                <h3>Ownership & Velocity</h3>
                                <p>We empower our people to make decisions autonomously and execute them with breathtaking speed.</p>
                            </div>
                            <div className={styles.philBlock}>
                                <h3>Obsessive Curiosity</h3>
                                <p>The best ideas win. We foster an environment where questioning the status quo isn't just permitted—it's demanded.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.lifeCta}>
                <div className={styles.lifeCtaInner}>
                    <h2>Ready to do the best work of your life?</h2>
                    <p>It's time to build things that actually matter.</p>
                    <a href="/careers" className={styles.ctaButton}>View Open Roles</a>
                </div>
            </section>

            <GlobalFooter />
        </main>
    );
}
