'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SupportImpact.module.css';

export default function SupportImpact() {
    useScrollReveal();

    return (
        <section className={styles.impactSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Support That Delivers Measurable Impact</h2>
                
                <div className={`${styles.impactBox} reveal`}>
                    
                    {/* Left side Large Image */}
                    <div className={styles.imageBlock}>
                        <img 
                            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop" 
                            alt="Family relaxing on couch watching TV" 
                            className={styles.mainImg}
                        />
                    </div>

                    {/* Right side floating Stats Card */}
                    <div className={styles.statsCardWrapper}>
                        <div className={styles.statsCard}>
                            
                            <div className={styles.cardHeader}>
                                <div className={styles.logoWrap}>
                                   <span style={{color: '#e11d48', fontSize: '1.8rem', marginRight: '6px' }}>●</span>
                                   <span className={styles.logoText}>STAGE</span>
                                </div>
                                <div className={styles.iconLink}>↗</div>
                            </div>

                            <div className={styles.statsFlex}>
                                <div className={styles.statBox}>
                                    <div className={styles.statVal}>55%</div>
                                    <div className={styles.statLabel}>Automation</div>
                                </div>
                                <div className={styles.statBox}>
                                    <div className={styles.statVal}>70% <span className={styles.sDown}>↓</span></div>
                                    <div className={styles.statLabel}>Cost Reduction</div>
                                </div>
                                <div className={styles.statBox}>
                                    <div className={styles.statVal}>86%</div>
                                    <div className={styles.statLabel}>Positive CSAT</div>
                                </div>
                            </div>

                            <div className={styles.audioLinks}>
                                <button className={styles.playBtn}>
                                    <span className={styles.playIcon}>▶</span> Play Recording
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
