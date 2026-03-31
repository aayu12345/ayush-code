'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SalesBentoGrid.module.css';

export default function SalesBentoGrid() {
    useScrollReveal();

    return (
        <section className={styles.bentoSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>The Sales Engine Built for Speed & Scale</h2>
                
                <div className={`${styles.bentoGrid} reveal`}>
                    
                    {/* 1. Human-Like Calls (Spans 2 rows) */}
                    <div className={`${styles.bentoCard} ${styles.cardHuman}`}>
                        {/* Fake image via CSS background or img tag */}
                        <div className={styles.imgOverlay}></div>
                        <div className={styles.cardContentBottom}>
                            <h3>Human-Like Multilingual Calls</h3>
                            <p>Deliver natural sales conversations in the language buyers are most comfortable with.</p>
                        </div>
                    </div>

                    {/* 2. CRM Automation (Spans 2 cols) */}
                    <div className={`${styles.bentoCard} ${styles.cardCrm}`}>
                        <div className={styles.cardContent}>
                            <h3>CRM Automation</h3>
                            <p>Log call notes, dispositions, and next steps in your CRM automatically.</p>
                        </div>
                        <div className={styles.mockUiContainer}>
                            {/* Abstract mockup */}
                            <div className={styles.mockCrm}>
                                <div className={styles.mockTitle}>Ongoing Call</div>
                                <div className={styles.mockLines}>
                                    <div className={styles.mL}></div>
                                    <div className={styles.mL}></div>
                                    <div className={styles.mL}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Quality Guardian */}
                    <div className={`${styles.bentoCard} ${styles.cardQuality}`}>
                        <div className={styles.cardContent}>
                            <div className={styles.iconTopRight}>🔍</div>
                            <h3>Quality & Compliance Guardrails</h3>
                            <p>Run call audits to ensure compliance and improve conversations.</p>
                        </div>
                    </div>

                    {/* 4. Omnichannel */}
                    <div className={`${styles.bentoCard} ${styles.cardOmni}`}>
                         <div className={styles.arcIcons}>
                             <span>📞</span><span>💬</span><span>✉️</span>
                         </div>
                        <div className={styles.cardContentBottom}>
                            <h3>Omnichannel</h3>
                            <p>Engage buyers across voice, WhatsApp, SMS, email, and in-app.</p>
                        </div>
                    </div>

                    {/* 5. System-Driven Follow Ups (Spans 2 rows) */}
                    <div className={`${styles.bentoCard} ${styles.cardFollow}`}>
                        <div className={styles.mockUiCenter}>
                             <div className={styles.mockTree}>
                                 <div className={styles.tNode}>Connected</div>
                                 <div className={styles.tSplit}>
                                     <div className={styles.tDot}>AI</div>
                                     <div className={styles.tDot}>WA</div>
                                 </div>
                             </div>
                        </div>
                        <div className={styles.cardContentBottomDarkText}>
                            <h3>System-Driven Follow-Ups</h3>
                            <p>Retries, reschedules, and follow-ups handled automatically.</p>
                        </div>
                    </div>

                    {/* 6. Continuous Learning */}
                    <div className={`${styles.bentoCard} ${styles.cardCont}`}>
                        <div className={styles.cardContent}>
                            <h3>Continuous Learning Engine</h3>
                            <p>Optimize conversations to drive higher conversion with every call.</p>
                            <div className={styles.iconInfinity}>∞</div>
                        </div>
                    </div>

                    {/* 7. Live Call Transfer */}
                    <div className={`${styles.bentoCard} ${styles.cardLive}`}>
                        <div className={styles.cardContent}>
                             <div className={styles.iconTransfer}>
                                 <span>🤖</span> ➝ <span>👨‍💻</span>
                             </div>
                            <h3>Live Call Transfer</h3>
                            <p>Hand off high-intent leads to human agents with full context.</p>
                        </div>
                    </div>

                    {/* 8. Insights & Reporting (Spans 2 cols) */}
                    <div className={`${styles.bentoCard} ${styles.cardInsights}`}>
                        <div className={styles.cardContent}>
                            <h3>Insights & Reporting</h3>
                            <p>Track lead velocity, conversion by stage, and drop-off reasons.</p>
                        </div>
                        <div className={styles.mockUiRight}>
                            <div className={styles.mockFunnel}>
                                <div className={styles.fBar} style={{width: '100%'}}>Dialable: 100%</div>
                                <div className={styles.fBar} style={{width: '80%'}}>Attempted: 96%</div>
                                <div className={styles.fBar} style={{width: '60%'}}>Connected: 83%</div>
                                <div className={styles.fBar} style={{width: '40%'}}>Qualified: 25%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
