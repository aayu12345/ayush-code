import styles from './IndustryGrid.module.css';

export default function IndustryGrid() {
    const mockReports = [
        {
            id: 1,
            badge: 'INDUSTRY REPORTS',
            date: '03/01/2022',
            title: 'Top 8 D2C Market Predictions for 2022',
            imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            badge: 'INDUSTRY REPORTS',
            date: '03/01/2022',
            title: 'Fintech Market Trends and Predictions for 2022',
            imgUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            badge: 'INDUSTRY REPORTS',
            date: '03/01/2022',
            title: 'Growth Trends Across Top Financial Brokerages [2022]',
            imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <div className={styles.gridContainer}>
            {mockReports.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.cardImageHolder}>
                        {/* Static standard image filling container without graphical overlays */}
                        <img src={card.imgUrl} alt={card.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardMeta}>
                            <span className={styles.badgeReport}>
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
