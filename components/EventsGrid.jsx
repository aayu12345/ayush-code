import styles from './EventsGrid.module.css';

export default function EventsGrid() {
    const mockEvents = [
        {
            id: 1,
            badge: 'EVENT',
            date: '03/01/2022',
            title: 'Transforming Sales with Better CX | Elets BFSI CXO Masterclass',
            desc: 'A masterclass with Rishabh Ladha on integrating advanced CX metrics seamlessly into high volume sales outreach.',
            imgUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            badge: 'EVENT',
            date: '03/13/2022',
            title: 'SquadStack Wins \'CX Leader of the Year\' at CX Strategy Summit',
            desc: 'Recognizing operational excellence and telecalling automation that powered exponential pipeline generation for leading firms.',
            imgUrl: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            badge: 'EVENT',
            date: '08/24/2023',
            title: 'Global AI Summit 2023: Deploying Humanoid Agents',
            desc: 'Watch the keynote discussing how continuous learning language models decrease dropoff rates in top of funnel interactions.',
            imgUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 4,
            badge: 'EVENT',
            date: '11/02/2023',
            title: 'Scaling Remote Outbound Teams: Interactive Workshop',
            desc: 'Learn the architectural blueprints required for onboarding, tracking, and scaling 500+ remote callers securely.',
            imgUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <div className={styles.gridContainer}>
            {mockEvents.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.cardImageHolder}>
                        {/* Static standard image filling container without graphical overlays */}
                        <img src={card.imgUrl} alt={card.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardMeta}>
                            <span className={styles.badgeEvent}>
                                {card.badge}
                            </span>
                            <span className={styles.date}>{card.date}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDesc}>{card.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
