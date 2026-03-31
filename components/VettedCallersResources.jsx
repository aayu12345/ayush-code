'use client';
import styles from './VettedCallersResources.module.css';

const resources = [
    {
        type: 'WEBPAGE',
        title: 'Industry-leading call quality analysis',
        linkText: 'Learn More',
        href: '/call-quality-analysis',
        bgStyle: styles.bgTeal
    },
    {
        type: 'BLOG',
        title: 'Understand the Quality AI at shyphan.ai',
        linkText: 'Read Now',
        href: '#',
        bgStyle: styles.bgPurple
    },
    {
        type: 'WEBPAGE',
        title: 'Simplifying screening, training, & outreach',
        linkText: 'Learn More',
        href: '#',
        bgStyle: styles.bgIndigo
    }
];

export default function VettedCallersResources() {
    return (
        <section className={styles.resourcesSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {resources.map((resource, index) => (
                        <div key={index} className={styles.card}>
                            <div className={`${styles.cardVisual} ${resource.bgStyle}`}>
                                {/* Abstract graphics standing in for images */}
                                {index === 0 && (
                                    <div className={styles.graphics1}>
                                        <div className={styles.g1Box}></div>
                                        <div className={styles.g1Lines}></div>
                                    </div>
                                )}
                                {index === 1 && (
                                    <div className={styles.graphics2}>
                                        <div className={styles.g2Circle}></div>
                                        <div className={styles.g2Wave}></div>
                                    </div>
                                )}
                                {index === 2 && (
                                    <div className={styles.graphics3}>
                                        <div className={styles.g3Dash}></div>
                                        <div className={styles.g3Bars}></div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.badge}>{resource.type}</div>
                                <h3 className={styles.cardTitle}>{resource.title}</h3>
                                <a href={resource.href} className={styles.cardLink}>
                                    {resource.linkText} <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
