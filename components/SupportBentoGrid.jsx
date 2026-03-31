'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SupportBentoGrid.module.css';

export default function SupportBentoGrid() {
    useScrollReveal();

    return (
        <section className={styles.bentoSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>The Operating System for Future-Ready Support</h2>
                
                <div className={`${styles.gridMaster} reveal`}>
                    
                    {/* COL 1: Single massive vertical card (Row 1-2) */}
                    <div className={`${styles.card} ${styles.cardHuman}`}>
                        <div className={styles.imgOverlay}></div>
                        <div className={styles.cardContentBottom}>
                            <h3>Human-like AI Calls</h3>
                            <p>Deliver natural conversations that improve engagement & response rates.</p>
                        </div>
                    </div>

                    {/* COL 2 & 3: Wide dark card for Document Processing (Row 1) */}
                    <div className={`${styles.card} ${styles.cardDocs}`}>
                        <div className={styles.docsContent}>
                            <div className={styles.docsText}>
                                <h3>Automated Document Processing</h3>
                                <p>Instantly classify and verify KYC documents, claims, invoices, etc.</p>
                            </div>
                            <div className={styles.docsVisual}>
                                <div className={styles.mockBoxUI}>
                                    <div className={styles.boxImg}>
                                        <div className={styles.scanLine}></div>
                                    </div>
                                    <div className={styles.boxTag}>
                                        <span className={styles.tagIcon}>!</span> Damaged Box
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COL 4: Medium purple square for 24x7 (Row 1) */}
                    <div className={`${styles.card} ${styles.card247}`}>
                        <div className={styles.iTopRight}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                        </div>
                        <div className={styles.cardContentBottomDarkText}>
                            <h3>24x7 Availability</h3>
                            <p>Provide instant help with zero wait time, even during demand surges.</p>
                        </div>
                    </div>

                    {/* COL 2: Dark Square for Human Escalation (Row 2) */}
                    <div className={`${styles.card} ${styles.cardEscalation}`}>
                         <div className={styles.cardContentTopLeft}>
                            <h3>Smart Human Escalation</h3>
                            <p>Smoothly transfer complex cases to human agents.</p>
                        </div>
                    </div>

                    {/* COL 3 & COL 4 Combined (or span 2): Dark Square for Quality & Compliance Guardrails (Row 2) -> Let's make it span 2 cols to balance the grid width based on visual screenshot 3 */}
                    <div className={`${styles.card} ${styles.cardGuardrails}`}>
                        <div className={styles.cardContentTopLeft}>
                            <h3>Quality & Compliance Guardrails</h3>
                            <p>Enforce script governance, call audits, and consistent policy adherence.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
