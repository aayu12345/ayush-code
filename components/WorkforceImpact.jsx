'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './WorkforceImpact.module.css';

export default function WorkforceImpact() {
    useScrollReveal();

    return (
        <section className={styles.impactSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Proven Impact across High-Volume Teams</h2>
                
                <div className={`${styles.impactBox} reveal`}>
                    
                    {/* Left side Large Image */}
                    <div className={styles.imageBlock}>
                        <img 
                            src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop" 
                            alt="Delivery Worker and Customer" 
                            className={styles.mainImg}
                        />
                    </div>

                    {/* Right side floating Stats Card */}
                    <div className={styles.statsCardWrapper}>
                        <div className={styles.statsCard}>
                            
                            <div className={styles.cardHeader}>
                                {/* Mock logo text for Delhivery */}
                                <div className={styles.logoText}>DELHIVERY</div>
                                <div className={styles.iconLink}>↗</div>
                            </div>

                            <div className={styles.statsFlex}>
                                <div className={styles.statBox}>
                                    <div className={styles.statVal}>2.5x <span className={styles.sUp}>↑</span></div>
                                    <div className={styles.statLabel}>Better Funnel Ratios</div>
                                </div>
                                <div className={styles.statBox}>
                                    <div className={styles.statVal}>4x <span className={styles.sDown}>↓</span></div>
                                    <div className={styles.statLabel}>Lower Cost Per Hire</div>
                                </div>
                            </div>

                            <div className={styles.audioLinks}>
                                <button className={styles.playBtn}>
                                    <span className={styles.playIcon}>▶</span> Play Recording #1
                                </button>
                                <button className={styles.playBtn}>
                                    <span className={styles.playIcon}>▶</span> Play Recording #2
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Navigation Buttons (Decorative) */}
                    <div className={styles.carouselNav}>
                        <button className={styles.navBtn}>‹</button>
                        <button className={styles.navBtn}>›</button>
                    </div>

                </div>
            </div>
        </section>
    );
}
