'use client';
import styles from './SalesHero.module.css';

export default function SalesHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.headerArea}>
                    <h1 className={styles.title}>
                        Voice AI For <span className={styles.gradientText}>Sales & Revenue Growth</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Qualify, follow-up, and convert more leads at lower CAC.
                    </p>
                </div>

                {/* Abstract CSS Wave Background representing the swoosh in the screenshot */}
                <div className={styles.waveBackground}>
                    <div className={styles.waveSvgContainer}>
                         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={styles.waveSvg}>
                            <path fill="url(#waveGradient)" fillOpacity="0.8" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#c4b5fd" />
                                    <stop offset="50%" stopColor="#a78bfa" />
                                    <stop offset="100%" stopColor="#8b5cf6" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {/* Overlay lines to create the stringy 3D wave effect */}
                        <div className={styles.waveOverlayLines}></div>
                    </div>
                </div>

                {/* Stats Bar Component */}
                <div className={styles.statsBar}>
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>90%</div>
                        <div className={styles.statLabel}>Connectivity</div>
                    </div>
                    
                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            40% <span className={styles.arrowUp}>↑</span>
                        </div>
                        <div className={styles.statLabel}>More Conversions</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>
                            3x <span className={styles.arrowDown}>↓</span>
                        </div>
                        <div className={styles.statLabel}>Lower CAC</div>
                    </div>

                    <div className={styles.statDivider}></div>
                    
                    <div className={styles.statBlock}>
                        <div className={styles.statNumber}>Zero</div>
                        <div className={styles.statLabel}>Missed Follow-Ups</div>
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
            </div>
        </section>
    );
}
