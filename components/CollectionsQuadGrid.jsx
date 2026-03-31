'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CollectionsQuadGrid.module.css';

const cards = [
    {
        title: "Pre-Due and Due-Date Reminders",
        desc: "Proactive borrower notifications for upcoming EMIs & auto-debit status.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
        )
    },
    {
        title: "Early Bucket Collections (1–30 DPD)",
        desc: "Post-due borrower outreach to confirm intent & capture promise to pay.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 9v4" /><path d="M12 17h.01" />
            </svg>
        )
    },
    {
        title: "Mid-Bucket Collections (31–60 DPD)",
        desc: "Borrower re-engagement, compliant timeline negotiation, & broken PTP follow-ups.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="m9 16 2 2 4-4"/>
            </svg>
        )
    },
    {
        title: "Activation & Retention",
        desc: "Identification of resolution-ready cases & routing to specialist human agents.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="m22 22-3-3m0 0 3-3m-3 3h-5" />
            </svg>
        )
    }
];

export default function CollectionsQuadGrid() {
    useScrollReveal();

    return (
        <section className={styles.quadSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>One Platform Across the Collections Lifecycle</h2>
                
                <div className={`${styles.quadGrid} reveal`}>
                    {cards.map((card, idx) => (
                        <div key={idx} className={styles.quadCard}>
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDesc}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
