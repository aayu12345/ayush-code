'use client';
import styles from './CollectionsHero.module.css';

export default function CollectionsHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.headerArea}>
                    <h1 className={styles.title}>
                        Voice AI For <span className={styles.gradientText}>Loan EMI Collections</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Recover EMI payments faster, lower cost to collect, and stay compliant at scale.
                    </p>
                </div>

                {/* Abstract CSS Wave Background */}
                <div className={styles.waveBackground}>
                    <div className={styles.waveSvgContainer}>
                         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.waveSvg}>
                            <path fill="url(#waveGradientCollections)" fillOpacity="0.8" d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,149.3C672,117,768,107,864,133.3C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            <defs>
                                <linearGradient id="waveGradientCollections" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#8b5cf6" />
                                    <stop offset="100%" stopColor="#4338ca" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={styles.waveOverlayLines}></div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBar}>
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>90%</div>
                        <div className={styles.statLabel}>Right Party<br/>Connectivity</div>
                    </div>
                    
                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            50% <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>Increase in<br/>Promise-To-Pay</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            75% <span className={styles.arrowDown}>↓</span>
                        </div>
                        <div className={styles.statLabel}>Lower<br/>Cost to Collect</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            40% <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>Faster<br/>Recovery Cycle</div>
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

                {/* Brands Grid (2 Rows) */}
                <div className={styles.brandsWrapper}>
                    <h3 className={styles.brandsTitle}>Trusted by Top BFSI Brands</h3>
                    
                    {/* Top Row (4 Brands) */}
                    <div className={styles.brandsStrip}>
                        <div className={styles.brandItem} style={{ color: '#047857', fontWeight: '800', letterSpacing: '-0.5px' }}>
                            <span style={{marginRight: '8px', fontSize: '1.2em'}}>M</span> moneyview
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#1d4ed8', fontWeight: '800' }}>
                            <span style={{display: 'inline-block', transform: 'rotate(-10deg)', marginRight: '6px', fontSize: '1.2rem', lineHeight: '0.8' }}>◆</span>
                            super<br/>money
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#0f172a', fontWeight: '800', letterSpacing: '1px' }}>
                            TATA <span style={{fontWeight: '400'}}>DIGITAL</span>
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#6d28d9', fontWeight: '700' }}>
                            <span style={{fontSize: '1.2em', marginRight: '4px'}}>पे</span> PhonePe
                        </div>
                    </div>
                    
                    {/* Bottom Row (3 Brands) */}
                    <div className={styles.brandsStripBottom}>
                        <div className={styles.brandItem} style={{ color: '#0ea5e9', fontWeight: '700' }}>
                            <span style={{fontSize: '1.5em', marginRight: '8px'}}>O<span style={{fontSize: '0.5em', position: 'absolute'}}>O</span></span> Buddy<br/>Loan
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#0369a1', fontWeight: '900', fontStyle: 'italic' }}>
                            <span style={{color: '#93c5fd', marginRight: '4px'}}>///</span> DMI FINANCE
                        </div>
                        <div className={styles.brandDivider}></div>
                        <div className={styles.brandItem} style={{ color: '#ea580c', fontWeight: '700' }}>
                            <span style={{fontSize: '1.5em', marginRight: '8px'}}>♨</span> Piramal<br/><span style={{fontWeight: '400', fontSize: '0.8em'}}>Finance</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
