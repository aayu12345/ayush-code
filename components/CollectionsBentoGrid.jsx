'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CollectionsBentoGrid.module.css';

export default function CollectionsBentoGrid() {
    useScrollReveal();

    return (
        <section className={styles.bentoSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>The Operating System for Future-Ready Collections</h2>
                
                <div className={`${styles.gridMaster} reveal`}>
                    
                    {/* COL 1: Single massive vertical card */}
                    <div className={styles.colOne}>
                        <div className={`${styles.card} ${styles.cardHuman}`}>
                            <div className={styles.imgOverlay}></div>
                            <div className={styles.cardContentBottom}>
                                <h3>Human-like AI Calls</h3>
                                <p>Deliver natural conversations that improve engagement & response rates.</p>
                            </div>
                        </div>
                    </div>

                    {/* COL 2: PTP Capture (Tall) & Strategy Engine (Wide) span logics handle this via inner-wrappers or CSS Grid master */}
                    {/* We'll use a precise CSS Grid in the module */}
                    <div className={`${styles.card} ${styles.cardStrategy}`}>
                        <div className={styles.strategyContent}>
                            <div className={styles.strategyText}>
                                <h3>Bucket-Wise Strategy Engine</h3>
                                <p>Optimizes engagement for higher recovery probability.</p>
                            </div>
                            <div className={styles.strategyMockui}>
                                {/* Visual simulation of the strategy config UI */}
                                <div className={styles.sCol}>
                                    <div className={styles.sPill}>Early Bucket</div>
                                    <div className={styles.sPill}>Mid Bucket</div>
                                    <div className={styles.sPill}>Late Bucket</div>
                                </div>
                                <div className={styles.sArrowCol}>→<br/>→<br/>→</div>
                                <div className={styles.sColRight}>
                                    <div className={styles.sTitle}>Strategy Engine</div>
                                    <div className={styles.sValPill}>Flow</div>
                                    <div className={styles.sValPill}>Tone</div>
                                    <div className={styles.sValPill}>Logic</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.cardOmni}`}>
                        <div className={styles.arcIcons}>
                             <span>📞</span><span>💬</span><span>✉️</span>
                         </div>
                        <div className={styles.cardContentBottom}>
                            <h3>Omnichannel Outreach</h3>
                            <p>Engage debtors across calls, WhatsApp, SMS, & email.</p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.cardPtp}`}>
                        <div className={styles.ptpMockUI}>
                            <div className={styles.ptpNode}>
                                <div>Person A</div>
                                <div style={{fontWeight:'bold'}}>Outstanding Liability<br/>₹1,50,000</div>
                            </div>
                            <div className={styles.ptpLine}>.........</div>
                            <div className={styles.ptpNodeSecondary}>
                                PTP Captured
                                <br/>& Tracked 🔔
                            </div>
                        </div>
                        <div className={styles.cardContentBottomDarkText}>
                            <h3>PTP Capture & Tracking</h3>
                            <p>Capture promise to pay, amount, & date with automated reminders.</p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.cardInsights}`}>
                        <div className={styles.insightsMockUI}>
                            <div className={styles.mockNodeGraph}>
                                <div className={styles.nNode} style={{top: '10px', left: '50%', transform: 'translateX(-50%)'}}>C</div>
                                <div className={styles.nNode} style={{top: '50px', left: '20%'}}>A</div>
                                <div className={styles.nNode} style={{top: '50px', left: '80%'}}>C</div>
                            </div>
                            <div className={styles.mockBarChart}>
                                <div className={styles.bCol} style={{height: '80%'}}></div>
                                <div className={styles.bCol} style={{height: '60%'}}></div>
                                <div className={styles.bCol} style={{height: '100%'}}></div>
                                <div className={styles.bCol} style={{height: '40%'}}></div>
                            </div>
                        </div>
                        <div className={styles.cardContentBottomDarkText}>
                            <h3>Insights & Reporting</h3>
                            <p>Track RPC, PTP speed, repayment timelines, & roll-forward reduction.</p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.cardMulti}`}>
                        <div className={styles.cardContent}>
                            <h3>Multilingual Support</h3>
                            <p>Engage debtors across regions in local languages.</p>
                        </div>
                        <div className={styles.mapBg}></div>
                    </div>

                    <div className={`${styles.card} ${styles.cardEscalation}`}>
                        <div className={styles.escIcons}>
                            <div className={styles.escA}>🟣</div> → <div className={styles.escB}>👤</div>
                        </div>
                        <div className={styles.cardContentBottomDarkText}>
                            <h3>Live Agent Escalation</h3>
                            <p>Escalate negotiations & disputes to human agents.</p>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.cardQuality}`}>
                        <div className={styles.qText}>
                            <h3>Quality & Compliance Guardrails</h3>
                            <p>Enforce TRAI-aligned calling hours, script governance, & audit-ready logs.</p>
                        </div>
                        <div className={styles.qVisual}>
                            <div className={styles.mockAudio}>
                                <div className={styles.aBar} style={{height: '30px'}}></div>
                                <div className={styles.aBar} style={{height: '50px'}}></div>
                                <div className={styles.aBar} style={{height: '25px'}}></div>
                                <div className={styles.aBar} style={{height: '60px'}}></div>
                                <div className={styles.iconMag}>🔍</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
