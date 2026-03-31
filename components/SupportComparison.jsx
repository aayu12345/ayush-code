'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SupportComparison.module.css';

const rows = [
    {
        aspect: "Average Handle Time (AHT)",
        human: "6-8 Minutes",
        ai: "< 2 Minutes"
    },
    {
        aspect: "First Call Resolution (FCR)",
        human: "Inconsistent depending on agent",
        ai: "90%+ for standard workflows"
    },
    {
        aspect: "Wait Times / Queues",
        human: "Spikes during high-volume periods",
        ai: "Zero wait time, infinite scale"
    },
    {
        aspect: "Context Preservation",
        human: "Often lost between channel hops",
        ai: "100% omni-channel memory"
    },
    {
        aspect: "Escalation Routing",
        human: "Manual transfers & repeating info",
        ai: "Instant deep-linking to live agents"
    },
    {
        aspect: "Cost Per Ticket",
        human: "High & linearly scaled with volume",
        ai: "Fraction of the cost, scales infinitely"
    }
];

export default function SupportComparison() {
    useScrollReveal();

    return (
        <section className={styles.compSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Why Voice AI Outperforms Manual Support</h2>
                
                <div className={`${styles.tableWrapper} reveal`}>
                    
                    {/* Header Row */}
                    <div className={styles.tableHead}>
                        <div className={styles.colAspectTitle}>Aspect</div>
                        <div className={styles.colHumanTitle}>Human-Led Support</div>
                        <div className={styles.colAiTitle}>shyphan.ai Voice Agent</div>
                    </div>

                    {/* Body Rows */}
                    <div className={styles.tableBody}>
                        {rows.map((row, idx) => (
                            <div key={idx} className={styles.tableRow}>
                                <div className={styles.colAspect}>{row.aspect}</div>
                                <div className={styles.colHuman}>{row.human}</div>
                                <div className={styles.colAi}>{row.ai}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaWrapper}>
                        <button className={styles.btnDemo}>
                            Book a Demo <span style={{marginLeft: '8px'}}>→</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
