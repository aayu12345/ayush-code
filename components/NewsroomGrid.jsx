import styles from './NewsroomGrid.module.css';

export default function NewsroomGrid() {
    const newsItems = [
        {
            id: 1,
            category: 'Media Coverage',
            date: 'February 24, 2026',
            title: 'Outlook 2026 | How the upcoming Budget can help turn India from AI testing ground to global proving ground',
            href: 'https://www.cnbctv18.com',
            sourceUrl: 'CNBCTV18'
        },
        {
            id: 2,
            category: 'Thought Leadership',
            date: 'February 22, 2026',
            title: 'Why your brand’s first hire in 2026 might be an AI Agent',
            href: 'https://www.socialsamosa.com',
            sourceUrl: 'Social Samosa'
        },
        {
            id: 3,
            category: 'Product Announcement',
            date: 'February 19, 2026',
            title: 'shyphan.ai to build the next orbit of Voice AI: Conversational Superintelligence™ Using NVIDIA Nemotron',
            href: 'https://etedge-insights.com',
            sourceUrl: 'ET Edge Insights'
        },
        {
            id: 4,
            category: 'Press Release',
            date: 'February 10, 2026',
            title: 'shyphan.ai Launches In-App Voice AI Assistant to Reimagine Digital Customer Journeys',
            href: 'https://cxotoday.com',
            sourceUrl: 'CXO Today'
        },
        {
            id: 5,
            category: 'Thought Leadership',
            date: 'January 27, 2026',
            title: 'Agentic AI is enabling enterprises to drive contextual and intelligent customer conversations',
            href: 'https://www.techcircle.in',
            sourceUrl: 'TechCircle'
        },
        {
            id: 6,
            category: 'Press Release',
            date: 'December 15, 2025',
            title: 'shyphan.ai Becomes First Voice AI to Pass Turing Test',
            href: 'https://etedge-insights.com',
            sourceUrl: 'ET Edge Insights'
        }
    ];

    const getBadgeStyle = (category) => {
        switch (category) {
            case 'Press Release':
                return styles.badgePress;
            case 'Media Coverage':
                return styles.badgeMedia;
            case 'Product Announcement':
                return styles.badgeProduct;
            case 'Thought Leadership':
                return styles.badgeThought;
            default:
                return styles.badgeGeneric;
        }
    };

    return (
        <div className={styles.gridContainer}>
            {newsItems.map((article) => (
                <a key={article.id} href={article.href} target="_blank" rel="noopener noreferrer" className={styles.newsCard}>
                    <div className={styles.cardHeader}>
                        <span className={`${styles.badge} ${getBadgeStyle(article.category)}`}>
                            {article.category}
                        </span>
                        <span className={styles.date}>{article.date}</span>
                    </div>
                    <div className={styles.cardBody}>
                        <h3 className={styles.title}>{article.title}</h3>
                    </div>
                    <div className={styles.cardFooter}>
                        <span className={styles.source}>Read more on {article.sourceUrl}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                </a>
            ))}
        </div>
    );
}
