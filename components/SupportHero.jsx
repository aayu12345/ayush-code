'use client';
import styles from './SupportHero.module.css';

export default function SupportHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.headerArea}>
                    <h1 className={styles.title}>
                        Voice AI For <span className={styles.gradientText}>Customer Support Automation</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Resolve issues instantly, reduce cost, and deliver consistent CX at scale.
                    </p>
                </div>

                {/* Abstract CSS Wave Background */}
                <div className={styles.waveBackground}>
                    <div className={styles.waveSvgContainer}>
                         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.waveSvg}>
                            <path fill="url(#waveGradientSupport)" fillOpacity="0.8" d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,224C672,256,768,256,864,218.7C960,181,1056,107,1152,85.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            <defs>
                                <linearGradient id="waveGradientSupport" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#c084fc" />
                                    <stop offset="100%" stopColor="#4f46e5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={styles.waveOverlayLines}></div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>80%</div>
                        <div className={styles.statLabel}>Automation</div>
                    </div>
                    
                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            60% <span className={styles.arrowDown}>↓</span>
                        </div>
                        <div className={styles.statLabel}>Cost Reduction</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            2x <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>Faster Resolution Time</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            3x <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>Increase in CSAT</div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className={styles.actionsBox}>
                    <button className={styles.btnPrimary}>
                        Book a Demo <span className={styles.iconArrow}>→</span>
                    </button>
                    <button className={styles.btnOutline}>
                        Hear Real AI Agent Calls <span className={styles.iconArrow}>→</span>
                    </button>
                </div>

                {/* Brands Strip */}
                <div className={styles.brandsWrapper}>
                    <h3 className={styles.brandsTitle}>Trusted by India's Top Brands</h3>
                    
                    <div className={styles.brandsStrip}>
                        <div className={styles.brandItem} style={{ color: '#e11d48', fontWeight: '800', letterSpacing: '1px' }}>
                            <span style={{ fontSize: '1.2em', marginRight: '6px' }}>●</span> STAGE
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#ea580c', fontWeight: '700' }}>
                           <span style={{ color: '#84cc16', marginRight: '4px'}}>▲</span> Angel<span style={{fontWeight: '400'}}>One</span>
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#e11d48', fontWeight: '800' }}>
                            <span style={{fontSize: '1.2rem', marginRight: '4px'}}>m</span> MakeMyTrip
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#dc2626', fontWeight: '800', fontStyle: 'italic' }}>
                            zomato
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
