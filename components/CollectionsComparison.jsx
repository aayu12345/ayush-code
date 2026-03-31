'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CollectionsComparison.module.css';

const rows = [
    {
        aspect: "First Contact Time",
        human: "Hours to days",
        ai: "Minutes"
    },
    {
        aspect: "Calling Capacity",
        human: "Limited by agent count",
        ai: "Unlimited parallel calls"
    },
    {
        aspect: "Right Party Connectivity",
        human: "40-60%",
        ai: "90%"
    },
    {
        aspect: "Follow-ups",
        human: "Manual & inconsistent",
        ai: "Fully automated"
    },
    {
        aspect: "Time to Recovery",
        human: "Longer cycles",
        ai: "40% faster"
    },
    {
        aspect: "Cost to Collect",
        human: "High & variable",
        ai: "75% lower"
    },
    {
        aspect: "Compliance Control",
        human: "Hard to audit at scale",
        ai: "Built-in guardrails"
    }
];

export default function CollectionsComparison() {
    useScrollReveal();

    return (
        <section className={styles.compSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Why Voice AI Outperforms Manual Collections</h2>
                
                <div className={`${styles.tableWrapper} reveal`}>
                    
                    {/* Header Row */}
                    <div className={styles.tableHead}>
                        <div className={styles.colAspectTitle}>Aspect</div>
                        <div className={styles.colHumanTitle}>Human-Led Collections</div>
                        <div className={styles.colAiTitle}>SquadStack.AI Voice Agent-Led Collections</div>
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
