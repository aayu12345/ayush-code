'use client';
import styles from './WorkforceHero.module.css';

export default function WorkforceHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.headerArea}>
                    <h1 className={styles.title}>
                        Voice AI For <span className={styles.gradientText}>Workforce Hiring & Management</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Hire fast at scale, onboard seamlessly, and maximize worker productivity.
                    </p>
                </div>

                {/* Abstract CSS Wave Background */}
                <div className={styles.waveBackground}>
                    <div className={styles.waveSvgContainer}>
                         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.waveSvg}>
                            <path fill="url(#waveGradientWorkforce)" fillOpacity="0.8" d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,149.3C672,117,768,107,864,133.3C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            <defs>
                                <linearGradient id="waveGradientWorkforce" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#d8b4fe" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={styles.waveOverlayLines}></div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>90% <span className={styles.arrowUp}>↑</span></div>
                        <div className={styles.statLabel}>Higher<br/>Connectivity</div>
                    </div>
                    
                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            4x <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>Faster Hiring<br/>Cycles</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            3x <span className={styles.arrowDown}>↓</span>
                        </div>
                        <div className={styles.statLabel}>Lower Cost<br/>Per Hire</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            40% <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>Higher 1st-Month<br/>Productivity</div>
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
                    <h3 className={styles.brandsTitle}>Trusted by India’s Top Brands</h3>
                    <div className={styles.brandsStrip}>
                        <div className={styles.brandItem} style={{ color: '#000000', fontWeight: '900', letterSpacing: '-1px' }}>DELHIVERY</div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#7c3aed', fontWeight: '800', fontStyle: 'italic' }}>zepto</div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#fc8019', fontWeight: '800' }}>
                            <span style={{fontSize: '1.2em'}}>s</span>wiggy
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#3b82f6', fontWeight: '600' }}>△ awign</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
