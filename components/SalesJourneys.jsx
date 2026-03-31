'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SalesJourneys.module.css';

const industries = [
    {
        title: "Lending & Banking",
        icon: "🏛️",
        points: ["Loan Lead Qualification", "Credit Card Sales", "Savings Account Opening", "Credit Card Activation", "Top-up & Cross-Sell"],
    },
    {
        title: "Insurance",
        icon: "🛡️",
        points: ["Lead Qualification", "Drop-Chase Journey", "Renewals & Persistency", "Upsell & Cross-Sell"],
    },
    {
        title: "Brokerage",
        icon: "₹",
        points: ["Account Opening", "Account Activation", "Dormant User Reactivation", "Credit Card Activation"],
    },
    {
        title: "Education",
        icon: "🎓",
        points: ["Lead Qualification", "Application Completion", "Cold Lead Reactivation"],
    },
    {
        title: "Consumer Packaged Goods",
        icon: "🛍️",
        points: ["Order Booking", "Promotional Outreach", "Stock Availability Checks", "New Outlet Onboarding"],
    }
];

export default function SalesJourneys() {
    useScrollReveal();

    return (
        <section className={styles.journeysSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Custom Sales Journeys, Built for Each Industry</h2>
                
                <div className={`${styles.carouselWrapper} reveal`}>
                    <div className={styles.scrollTrack}>
                        {industries.map((ind, idx) => (
                            <div key={idx} className={styles.journeyCard}>
                                <div className={styles.cardIcon}>{ind.icon}</div>
                                <h3 className={styles.cardTitle}>{ind.title}</h3>
                                <ul className={styles.cardList}>
                                    {ind.points.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                                <button className={styles.playBtn}>
                                    <span className={styles.playIcon}>▶</span> Play Recording
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Buttons (Decorative) */}
                    <div className={styles.carouselNav}>
                        <button className={styles.navBtn}>‹</button>
                        <button className={styles.navBtn}>›</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
