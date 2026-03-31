'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './LeadMgmtFeatures.module.css';

const topFeatures = [
    {
        title: "De-Duplication & DND Check",
        description: "Once leads enter our system through customer CRMs or manual imports, they go through a checker system. This ensures we adhere to calling regulations. We check for duplicates and DND numbers to ensure no one gets spammed.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop", // abstract dashboard
        reversed: false
    },
    {
        title: "Systematic Prioritization",
        description: "We have a versatile prioritization system that divides leads based on data like city, product interest, age, profession, etc. We also employ Last in First out (LIFO) and First in First out (FIFO) algorithms to effectively maintain the desired turnaround time.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop", // strategy/planning
        reversed: true
    },
    {
        title: "Workflow Builder",
        description: "Once prioritised, leads flow into our dynamic workflow system, which can configure and customise different touch points, like calling, emails, SMS, WhatsApp, IVR, etc. Based on the response, the lead progresses to subsequent touch points.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", // team collaboration
        reversed: false
    }
];

const gridFeatures = [
    {
        icon: "🔌",
        title: "Connectivity Engine",
        description: "Removes spam numbers to keep the database clean and A/B tests to figure out the best day, time, and channel for reach outs. This ensures connectivity levels are always within a threshold."
    },
    {
        icon: "🎯",
        title: "Lead Matching",
        description: "Our matching engine is a bridge between the telecaller skills a campaign requires and our available pool of agents, optimizing the chances of success."
    },
    {
        icon: "📱",
        title: "Omnichannel Outreach",
        description: "They are nudged through the funnel with our customisable omnichannel outreach system — Calling, emails, SMS, WhatsApp. We closely track stage-by-stage conversion."
    },
    {
        icon: "🛡️",
        title: "Fraud Prevention",
        description: "Our system actively checks and weeds out agents that engage in fraudulent activities such as misselling, prolonging calls, or providing false qualifications."
    }
];

export default function LeadMgmtFeatures() {
    useScrollReveal();

    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                
                {/* Header */}
                <div className={`${styles.header} reveal`}>
                    <h2 className={styles.heading}>The Ultimate System for<br/>Your Priority Leads</h2>
                    <p className={styles.subheading}>Everything you need to manage, prioritize, and connect with your pipeline seamlessly.</p>
                </div>

                {/* Alternating Blocks */}
                <div className={styles.alternatingBlocks}>
                    {topFeatures.map((feat, idx) => (
                        <div key={idx} className={`${styles.block} ${feat.reversed ? styles.reversed : ''} reveal`}>
                            <div className={styles.blockText}>
                                <h3 className={styles.blockTitle}>{feat.title}</h3>
                                <p className={styles.blockDesc}>{feat.description}</p>
                            </div>
                            <div className={styles.blockVisual}>
                                <img src={feat.image} alt={feat.title} className={styles.blockImg} />
                                <div className={styles.imgAccent}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid Blocks */}
                <div className={`${styles.gridContainer} reveal`}>
                    {gridFeatures.map((feat, idx) => (
                        <div key={idx} className={styles.gridCard}>
                            <div className={styles.iconWrapper}>{feat.icon}</div>
                            <h4 className={styles.gridTitle}>{feat.title}</h4>
                            <p className={styles.gridDesc}>{feat.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
