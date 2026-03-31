'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './WorkforceBentoGrid.module.css';

export default function WorkforceBentoGrid() {
    useScrollReveal();

    return (
        <section className={styles.bentoSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>The Future of Workforce Hiring</h2>
                
                <div className={`${styles.bentoGrid} reveal`}>
                    
                    {/* Col 1, Top: Human Like Calls */}
                    <div className={`${styles.bentoCard} ${styles.cardHuman}`}>
                        <div className={styles.imgOverlay}></div>
                        <div className={styles.cardContentBottom}>
                            <h3>Human-like AI Calls</h3>
                            <p>Calls candidates understand, trust, and respond to.</p>
                        </div>
                    </div>

                    {/* Col 1, Bottom: Omnichannel */}
                    <div className={`${styles.bentoCard} ${styles.cardOmni}`}>
                        <div className={styles.arcIcons}>
                             <span>📞</span><span>💬</span><span>✉️</span>
                         </div>
                        <div className={styles.cardContentBottom}>
                            <h3>Omnichannel Outreach</h3>
                            <p>Reach candidates across calls, WhatsApp, SMS, and email.</p>
                        </div>
                    </div>

                    {/* Col 2, Full Height: System-Driven Follow-Ups */}
                    <div className={`${styles.bentoCard} ${styles.cardFollow}`}>
                        <div className={styles.mockUiCenter}>
                            {/* Visual representation of the flow shown in screenshot */}
                             <div className={styles.mockTree}>
                                 <div className={styles.tStep}>
                                     <span className={styles.tNumber}>1</span>
                                     <div className={styles.tIcons}><span>🤖</span><span>✉️</span></div>
                                 </div>
                                 <div className={styles.tStep}>
                                     <span className={styles.tNumber}>2</span>
                                     <div className={styles.tIcons}><span>📞</span><span>💬</span></div>
                                 </div>
                                 <div className={styles.tStep}>
                                     <span className={styles.tNumber}>3</span>
                                     <div className={styles.tIcons}><span>💬</span><span>✉️</span></div>
                                 </div>
                                 <div className={styles.tNode}>📞 Connected</div>
                             </div>
                        </div>
                        <div className={styles.cardContentBottomDarkText}>
                            <h3>System-Driven Follow-Ups</h3>
                            <p>Retries, reschedules, and follow-ups handled automatically.</p>
                        </div>
                    </div>

                    {/* Col 3, Top: Multilingual Support */}
                    <div className={`${styles.bentoCard} ${styles.cardMulti}`}>
                        <div className={styles.cardContent}>
                            <h3>Multilingual Support</h3>
                            <p>Hire across regions with conversations in local languages.</p>
                        </div>
                        {/* Simulation of the map background */}
                        <div className={styles.mapBg}></div>
                    </div>

                    {/* Col 4, Top: Quality & Compliance */}
                    <div className={`${styles.bentoCard} ${styles.cardQuality}`}>
                        <div className={styles.mockAudio}>
                            <div className={styles.aBar} style={{height: '20px'}}></div>
                            <div className={styles.aBar} style={{height: '40px'}}></div>
                            <div className={styles.aBar} style={{height: '30px'}}></div>
                            <div className={styles.aBar} style={{height: '50px'}}></div>
                            <div className={styles.aBar} style={{height: '35px'}}></div>
                            <div className={styles.iconMag}>🔍</div>
                        </div>
                        <div className={styles.cardContentBottom}>
                            <h3>Quality & Compliance</h3>
                            <p>Call audits to ensure compliance and improve conversations.</p>
                        </div>
                    </div>

                    {/* Col 3-4, Bottom: Insights & Reporting */}
                    <div className={`${styles.bentoCard} ${styles.cardInsights}`}>
                        <div className={styles.cardContent}>
                            <h3>Insights & Reporting</h3>
                            <p>Track hiring performance and uncover drop-off reasons.</p>
                        </div>
                        <div className={styles.mockUiRight}>
                            <div className={styles.mockNodeGraph}>
                                <div className={styles.nNode} style={{top: '10px', left: '50%', transform: 'translateX(-50%)'}}>C</div>
                                <div className={styles.nNode} style={{top: '40px', left: '20%'}}>C</div>
                                <div className={styles.nNode} style={{top: '40px', left: '80%'}}>C</div>
                                <div className={styles.nNode} style={{top: '70px', left: '50%', transform: 'translateX(-50%)', background: '#ccc', color: '#333'}}>B</div>
                            </div>
                            <div className={styles.mockBarChart}>
                                <div className={styles.bCol} style={{height: '80%'}}></div>
                                <div className={styles.bCol} style={{height: '60%'}}></div>
                                <div className={styles.bCol} style={{height: '100%'}}></div>
                                <div className={styles.bCol} style={{height: '40%'}}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
