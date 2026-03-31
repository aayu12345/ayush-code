import styles from './EbookHero.module.css';

export default function EbookHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    shyphan.ai <span className={styles.highlight}>Resources</span>
                </h1>
                <p className={styles.subtitle}>
                    Stay updated to fuel your hunger for growth!
                </p>
            </div>
        </section>
    );
}
