import styles from './WebinarGrid.module.css';

export default function WebinarGrid() {
    const mockWebinars = [
        {
            id: 1,
            badge: 'WEBINAR',
            date: '03/01/2022',
            title: 'How to Convert Data Into Decisions to Boost Sales',
            imgUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            badge: 'WEBINAR',
            date: '03/01/2022',
            title: 'Increase E-commerce Sales With Humans And Technology',
            imgUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            badge: 'WEBINAR',
            date: '03/01/2022',
            title: 'Avoid a Leaky Sales Funnel by Leveraging Humans & Conversational AI',
            imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <div className={styles.gridContainer}>
            {mockWebinars.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.cardImageHolder}>
                        {/* Static standard image filling container natively mapped to custom graphics */}
                        <img src={card.imgUrl} alt={card.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardMeta}>
                            <span className={styles.badgeWebinar}>
                                {card.badge}
                            </span>
                            <span className={styles.date}>{card.date}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
