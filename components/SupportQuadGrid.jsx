'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SupportQuadGrid.module.css';

const cards = [
    {
        title: "Order, Delivery, & Service Status Updates",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                <circle cx="12" cy="7" r="2" fill="#6366f1" />
            </svg>
        )
    },
    {
        title: "Account, Billing, & Payment Queries",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        )
    },
    {
        title: "Returns, Refunds, & Cancellations",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
                <polyline points="3 3 3 8 8 8"></polyline>
                <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
                <polyline points="21 21 21 16 16 16"></polyline>
                <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
        )
    },
    {
        title: "Installation, Onboarding, & Service",
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        )
    }
];

export default function SupportQuadGrid() {
    useScrollReveal();

    return (
        <section className={styles.quadSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Designed for High-Volume, Multi-Intent Support</h2>
                
                <div className={`${styles.quadGrid} reveal`}>
                    {cards.map((card, idx) => (
                        <div key={idx} className={styles.quadCard}>
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
