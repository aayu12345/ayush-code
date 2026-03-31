'use client';
import styles from './LeadMgmtHero.module.css';

export default function LeadMgmtHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <div className={styles.badge}>OMNICHANNEL OUTREACH</div>
                    
                    <h1 className={styles.title}>
                        Manage your<br />
                        <span className={styles.highlight}>priority leads</span><br />
                        seamlessly
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Configure intelligent workflows, optimize agent matching, and never let a high-intent lead slip through the cracks.
                    </p>
                    
                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>
                            Start Managing Leads
                        </button>
                    </div>
                </div>
                
                <div className={styles.visualContent}>
                    <div className={styles.imageComposition}>
                        {/* Main Image */}
                        <div className={styles.mainImgWrapper}>
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                                alt="Professional telecaller smiling" 
                                className={styles.mainImg} 
                            />
                        </div>
                        
                        {/* Floating Secondary Image */}
                        <div className={styles.secondaryImgWrapper}>
                            <img 
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" 
                                alt="Data analytics displaying workflow" 
                                className={styles.secondaryImg} 
                            />
                        </div>

                        {/* Floating UI Elements */}
                        <div className={styles.floatingTag}>
                            <span className={styles.statusDot}></span>
                            Matching Engine Active
                        </div>

                        <div className={styles.floatingStats}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                            <div>
                                <div className={styles.statLabel}>Connectivity</div>
                                <div className={styles.statValue}>98.4%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
