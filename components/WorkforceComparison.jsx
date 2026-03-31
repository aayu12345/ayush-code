'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './WorkforceComparison.module.css';

const rows = [
    {
        aspect: "Calling Capacity",
        human: "Limited by team size",
        ai: "Infinite, parallel calls"
    },
    {
        aspect: "Connectivity",
        human: "40-60%",
        ai: "90%"
    },
    {
        aspect: "Follow-ups",
        human: "Manual & inconsistent",
        ai: "Fully-automated"
    },
    {
        aspect: "Cost per Hire",
        human: "High & variable",
        ai: "3x lower"
    },
    {
        aspect: "Qualification Consistency",
        human: "Recruiter-dependent",
        ai: "Policy-driven & uniform"
    },
    {
        aspect: "Peak Load Handling",
        human: "Breaks under load",
        ai: "Scales instantly"
    },
    {
        aspect: "Retention Focus",
        human: "Reactive",
        ai: "Built-in"
    }
];

export default function WorkforceComparison() {
    useScrollReveal();

    return (
        <section className={styles.compSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Why Voice AI Outperforms Manual Hiring</h2>
                
                <div className={`${styles.tableWrapper} reveal`}>
                    
                    {/* Header Row */}
                    <div className={styles.tableHead}>
                        <div className={styles.colAspectTitle}>Aspect</div>
                        <div className={styles.colHumanTitle}>Human-Led Hiring</div>
                        <div className={styles.colAiTitle}>SquadStack.AI Voice Agent-Led Hiring</div>
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
