import styles from './EbookGrid.module.css';

export default function EbookGrid() {
    const mockCards = [
        {
            id: 1,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '03/06/2025',
            title: 'Agentic AI for CX Leaders: Systems That...',
            imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
            desc: 'Agentic AI for CX Leaders: Systems That Think, Act, and Own Outcome'
        },
        {
            id: 2,
            badgeType: 'WHITE-PAPER',
            badgeGradient: 'wp',
            date: '02/07/2025',
            title: 'Mapping India\'s Agentic AI Revolution...',
            imgUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
            desc: 'Mapping India\'s Agentic AI Across Industries'
        },
        {
            id: 3,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '01/01/2024',
            title: 'BPO Interview Success: Your Guide to...',
            imgUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop',
            desc: 'BPO Interview Success'
        },
        {
            id: 4,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '01/01/2024',
            title: 'How to Manage Call Center Technology &...',
            imgUrl: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=600&auto=format&fit=crop',
            desc: 'How to Manage Call Center Technology & Tools'
        },
        {
            id: 5,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '01/01/2024',
            title: 'Staffing and Schedule Making for Call Centers',
            imgUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
            desc: 'Staffing and Schedule Making'
        },
        {
            id: 6,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '01/01/2024',
            title: 'Strategies for better call center training...',
            imgUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
            desc: 'Strategies for better call center training'
        },
        {
            id: 7,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '01/01/2024',
            title: 'Your Guide to Evaluating Call Center...',
            imgUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop',
            desc: 'Your Guide to Evaluating Call Center Agent'
        },
        {
            id: 8,
            badgeType: 'WHITE-PAPER',
            badgeGradient: 'wp',
            date: '12/15/2023',
            title: 'The Telesales Handbook: Accelerating...',
            imgUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop',
            desc: 'The Telesales Handbook'
        },
        {
            id: 9,
            badgeType: 'E-BOOK',
            badgeGradient: 'eb',
            date: '11/02/2023',
            title: 'Ultimate Guide to Remote Calling Setup',
            imgUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop',
            desc: 'Remote Calling Setup'
        }
    ];

    return (
        <div className={styles.gridContainer}>
            {mockCards.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.cardImageHolder}>
                        <img src={card.imgUrl} alt={card.title} className={styles.cardImage} />
                        <div className={styles.overlayGraphic}>
                            <h4 className={styles.graphicTitle}>{card.desc}</h4>
                            <div className={styles.graphicLogo}>SquadStack.ai</div>
                        </div>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardMeta}>
                            <span className={`${styles.badge} ${card.badgeGradient === 'eb' ? styles.badgeEb : styles.badgeWp}`}>
                                {card.badgeType}
                            </span>
                            <span className={styles.date}>{card.date}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.readMore}>Read Text →</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
