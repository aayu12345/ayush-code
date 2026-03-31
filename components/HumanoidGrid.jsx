import styles from './HumanoidGrid.module.css';

export default function HumanoidGrid() {
    const mockEpisodes = [
        {
            id: 1,
            title: 'In Conversation With The Humanoid AI Agent | Episode 4',
            imgUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'In Conversation With The Humanoid AI Agent | Episode 3',
            imgUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'In Conversation With The Humanoid AI Agent | Episode 2',
            imgUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'In Conversation With The Humanoid AI Agent | Episode 1',
            imgUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=600&auto=format&fit=crop'
        }
    ];

    return (
        <div className={styles.gridContainer}>
            {mockEpisodes.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.cardImageHolder}>
                        {/* Rendering static presentation layout without any overlays */}
                        <img src={card.imgUrl} alt={card.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
