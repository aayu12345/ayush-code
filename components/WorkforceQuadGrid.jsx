'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './WorkforceQuadGrid.module.css';

const cards = [
    {
        title: "Qualification & Scheduling",
        desc: "Identify ready candidates and automatically schedule interviews.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <path d="m22 22-3-3m0 0 3-3m-3 3h-5" />
            </svg>
        )
    },
    {
        title: "Onboarding",
        desc: "Guide new hires through app setup, paperwork, policies, etc.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 9v4" /><path d="M12 17h.01" />
            </svg>
        )
    },
    {
        title: "Updates & Offer Nudges",
        desc: "Keep candidates informed and prompt them to accept offers.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
        )
    },
    {
        title: "Activation & Retention",
        desc: "Engage workers post-joining and drive key milestones.",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                <path d="m3 16 1-1" />
                <path d="M21 8 8 21" />
                <path d="M12 3v4" /><path d="m19 15-5-5" /><path d="m9 5 2 2" /><path d="m14 10 2 2" />
                <path d="m15 5 4-4 4 4" />
            </svg>
        )
    }
];

export default function WorkforceQuadGrid() {
    useScrollReveal();

    return (
        <section className={styles.quadSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>One System to Hire, Onboard & Activate Workers</h2>
                
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
