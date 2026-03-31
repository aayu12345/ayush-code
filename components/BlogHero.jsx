import styles from './BlogHero.module.css';

export default function BlogHero() {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.container}>
                <div className={styles.contentBox}>
                    <div className={styles.metaRow}>
                        <span className={styles.authorDot}></span>
                        <span className={styles.readTime}>8 Minutes</span>
                    </div>
                    
                    <h1 className={styles.title}>
                        Why Building Voice AI In-House Is a Costly Illusion for Enterprises
                    </h1>
                    
                    <p className={styles.description}>
                        Should enterprises build or buy Voice AI? This guide breaks down hidden complexity, revenue impact, and the snug fit of a managed solution as the shortest path to faster outcomes.
                    </p>
                    
                    <a href="#" className={styles.readBtn}>Read Article →</a>
                </div>
                
                <div className={styles.imageBox}>
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                        alt="Voice AI Architecture" 
                        className={styles.heroImg} 
                    />
                    <div className={styles.overlayBrand}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="9" height="9" rx="2" fill="white" />
                            <rect x="13" y="13" width="9" height="9" rx="2" fill="white" opacity="0.6" />
                            <rect x="2" y="13" width="9" height="9" rx="2" fill="white" opacity="0.8" />
                        </svg>
                        shyphan.ai
                    </div>
                </div>
            </div>
        </section>
    );
}
