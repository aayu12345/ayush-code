import styles from './NewsletterRelated.module.css';

export default function NewsletterRelated() {
    const cards = [
        {
            id: 1,
            title: 'AI for Sales & Marketing in 2026: Co...',
            desc: 'Discover how AI is transforming sales and marketing with automation, voicebots, personalisation, and predictive insights...',
            imgUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Best AI Phone Call Agents for Busine...',
            desc: 'Looking for the best AI phone call agent? Explore top AI calling solutions and see how businesses automate inbound and...',
            imgUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'AI Voicebot For Brokerage Firms',
            desc: 'AI Voicebot for Brokerage Firms helps automate investor calls while reducing costs while improving engagement and...',
            imgUrl: 'https://images.unsplash.com/photo-1542744094-24638ea0b465?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <section className={styles.relatedSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Related Posts</h2>
                
                <div className={styles.grid}>
                    {cards.map(card => (
                        <div key={card.id} className={styles.card}>
                            <div className={styles.imgContainer}>
                                <img src={card.imgUrl} alt={card.title} className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className={styles.controls}>
                    <button className={styles.arrowBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>
                    <button className={styles.arrowBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
