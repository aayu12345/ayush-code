'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SalesPersonalization.module.css';

export default function SalesPersonalization() {
    useScrollReveal();

    return (
        <section className={styles.personalizationSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Hyper-Personalization at Scale</h2>
                    <p className={styles.subtitle}>
                        Tailor every call using lead metadata, intent, and past interactions.
                    </p>
                </div>

                <div className={`${styles.gradientBanner} reveal`}>
                    
                    {/* Step 1 */}
                    <div className={styles.workflowStep}>
                        <div className={styles.avatarBox}>
                            <img 
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                                alt="Lead Avatar" 
                                className={styles.avatarImg} 
                            />
                        </div>
                        <div className={styles.stepLabel}>Enriched Lead</div>
                    </div>

                    <div className={styles.arrowIcon}>→</div>

                    {/* Step 2 */}
                    <div className={styles.workflowMiddle}>
                        <div className={styles.workflowLabel}>Recommended Tailored Workflows</div>
                        
                        <div className={styles.pillList}>
                            <div className={styles.pillRow}>
                                <div className={styles.pillKey}>📄 Script</div>
                                <div className={styles.pillValues}>
                                    <span className={styles.valChip}>1</span>
                                    <span className={styles.valChip}>2</span>
                                    <span className={styles.valChip}>3</span>
                                    <span className={styles.valChip}>4</span>
                                </div>
                            </div>
                            
                            <div className={styles.pillRow}>
                                <div className={styles.pillKey}>🔗 Channels</div>
                                <div className={styles.pillValues}>
                                    <span className={styles.valChip}>📞</span>
                                    <span className={styles.valChip}>💬</span>
                                    <span className={styles.valChip}>✉️</span>
                                </div>
                            </div>

                            <div className={styles.pillRow}>
                                <div className={styles.pillKey}>🕒 Time</div>
                                <div className={styles.pillValues}>
                                    <span className={`${styles.valChip} ${styles.activeChip}`}>11 AM</span>
                                    <span className={styles.valChip}>02 PM</span>
                                    <span className={styles.valChip}>04 PM</span>
                                </div>
                            </div>
                            
                            <div className={styles.pillRow}>
                                <div className={styles.pillKey}>🎧 Voice</div>
                                <div className={styles.pillValues}>
                                    <span className={styles.valChip}>👨‍💻 Human</span>
                                    <span className={`${styles.valChip} ${styles.activeChip}`}>🤖 A.I.</span>
                                </div>
                            </div>

                            <div className={styles.pillRow}>
                                <div className={styles.pillKey}>🗣️ Language</div>
                                <div className={styles.pillValues}>
                                    <span className={`${styles.valChip} ${styles.activeChip}`}>English</span>
                                    <span className={styles.valChip}>Regional</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.poweredBy}>Powered by 400M+ Interactions</div>
                    </div>

                    <div className={styles.arrowIcon}>→</div>

                    {/* Step 3 */}
                    <div className={styles.workflowEnd}>
                        <div className={styles.endCard}>
                            <div className={styles.endHeader}>Personalized Workflow ✨</div>
                            <div className={styles.endSub}>Based on buying behaviour & CX preferences</div>
                            
                            <div className={styles.orbitalDiagram}>
                                <img 
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                                    alt="Lead Avatar" 
                                    className={styles.centerAvatar} 
                                />
                                <div className={styles.orbitNode} style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)' }}>📞</div>
                                <div className={styles.orbitNode} style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)' }}>🕒</div>
                                <div className={styles.orbitNode} style={{ top: '50%', left: '-10px', transform: 'translateY(-50%)' }}>🤖</div>
                                <div className={styles.orbitNode} style={{ top: '50%', right: '-10px', transform: 'translateY(-50%)' }}>💬</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
