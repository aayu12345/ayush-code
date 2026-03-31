'use client';
import styles from './VettedCallersHero.module.css';

export default function VettedCallersHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <div className={styles.badge}>VETTED & TRAINED TELECALLERS</div>
                    
                    <h1 className={styles.title}>
                        Your team<br />
                        of<br />
                        trustworthy<br />
                        telecallers
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Transforming outreach with a tech-<br/>
                        empowered team of 10k+<br/>
                        decentralized agents
                    </p>
                    
                    <button className={styles.ctaBtn}>
                        BOOK A DEMO <span className={styles.arrow}>→</span>
                    </button>
                </div>
                
                <div className={styles.visualContent}>
                    <div className={styles.illustrationWrapper}>
                        {/* Faint Outer Circles */}
                        <div className={styles.circleOuter1}></div>
                        <div className={styles.circleOuter2}></div>
                        
                        {/* Main Purple Circle */}
                        <div className={styles.circleInner}>
                            {/* Abstract Grey Agent */}
                            <div className={styles.agentMain}>
                                <div className={styles.agentHead}></div>
                                <div className={styles.agentBody}></div>
                            </div>
                            
                            {/* Floating Green Checklist Box */}
                            <div className={styles.greenCheckBox}>
                                <div className={styles.gcLineGroup}>
                                    <div className={styles.gcLine}></div>
                                    <div className={styles.gcLineShort}></div>
                                    <div className={styles.gcLine}></div>
                                </div>
                                <div className={styles.gcCheckBadge}>✓</div>
                            </div>
                            
                            {/* Floating Purple Bars */}
                            <div className={styles.purpleBars}>
                                <div className={styles.pBar}></div>
                                <div className={styles.pBar}></div>
                                <div className={styles.pBar}></div>
                            </div>
                            
                            {/* Floating Star Box */}
                            <div className={styles.starBox}>
                                ★ <span>★</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
