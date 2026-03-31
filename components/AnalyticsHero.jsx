'use client';
import styles from './AnalyticsHero.module.css';

export default function AnalyticsHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.bgGlow}></div>
            <div className={styles.bgGlow2}></div>
            
            <div className={styles.container}>
                <div className={styles.badge}>
                    <span className={styles.dot}></span>
                    Reporting & Analytics
                </div>
                
                <h1 className={styles.title}>
                    Simple analytics & <br />
                    <span className={styles.highlight}>actionable insights</span>
                </h1>
                
                <p className={styles.subtitle}>
                    Make data-driven decisions to maximize ROI with 100% transparency. Monitor performance, enhance accountability, and optimize your marketing spends in one single view.
                </p>
                
                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>
                        Book a Demo <span className={styles.arrow}>→</span>
                    </button>
                    <button className={styles.secondaryBtn}>
                        Explore Dashboard
                    </button>
                </div>
            </div>
        </section>
    );
}
