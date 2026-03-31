'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SalesComparison.module.css';

const rows = [
    {
        aspect: "Lead Response Time",
        human: "Minutes to hours",
        ai: "Seconds"
    },
    {
        aspect: "Calling Capacity",
        human: "Limited by team size",
        ai: "Unlimited parallel calls"
    },
    {
        aspect: "Connectivity",
        human: "40-60%",
        ai: "90%"
    },
    {
        aspect: "Follow-ups",
        human: "Manual, often missed",
        ai: "Fully-automated, never missed"
    },
    {
        aspect: "Conversion Consistency",
        human: "Agent dependent",
        ai: "Policy-driven & uniform"
    },
    {
        aspect: "Peak Lead Spikes",
        human: "Leads drop",
        ai: "Instant auto-scaling"
    },
    {
        aspect: "Personalization",
        human: "Not scalable",
        ai: "Data-driven at scale"
    },
    {
        aspect: "Learning & Improvement",
        human: "Feedback loops don't scale",
        ai: "Improves with every call"
    },
    {
        aspect: "CRM Updates & Data Capture",
        human: "Manual, incomplete logging",
        ai: "Automatic, real-time, fully structured"
    }
];

export default function SalesComparison() {
    useScrollReveal();

    return (
        <section className={styles.compSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Why Voice AI Beats Humans in Consumer Sales</h2>
                
                <div className={`${styles.tableWrapper} reveal`}>
                    
                    {/* Header Row */}
                    <div className={styles.tableHead}>
                        <div className={styles.colAspectTitle}>Aspect</div>
                        <div className={styles.colHumanTitle}>Human-Led Sales</div>
                        <div className={styles.colAiTitle}>shyphan.ai Voice Agent-Led Sales</div>
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

                </div>
            </div>
        </section>
    );
}
