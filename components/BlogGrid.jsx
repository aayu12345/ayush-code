import styles from './BlogGrid.module.css';

const mockPosts = [
    {
        id: 1,
        category: "Product Updates",
        readTime: "4 Minutes",
        title: "Announcing SquadStack's New Agent Management Platform",
        desc: "Discover how our latest platform features help sales teams monitor, train, and deploy AI voice agents with unprecedented accuracy and speed.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        category: "Sales Strategy",
        readTime: "6 Minutes",
        title: "The Advanced Guide to High-Intent Prioritization Scoring",
        desc: "Learn how to significantly increase your contact rates and conversion percentages by scoring leads dynamically using AI insights.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        category: "Success Stories",
        readTime: "5 Minutes",
        title: "How Top FinTechs Cut Customer Acquisition Costs by 40%",
        desc: "A deep dive into the operational workflows and call scripts that top financial technology companies use to maximize their outreach ROI.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        category: "AI Trends",
        readTime: "7 Minutes",
        title: "Human vs. AI Voice Agents: The 2024 Performance Benchmark",
        desc: "We analyzed over 10 million telecalling minutes to objectively compare the performance metrics of fully trained human agents against modern AI voice bots.",
        img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        category: "Operations",
        readTime: "5 Minutes",
        title: "Scaling Telecalling Operations Without Sacrificing Quality",
        desc: "Ramping up your sales team quickly often breaks standard QA protocols. Here is a framework to maintain a 98% quality score while scaling fast.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 6,
        category: "Product Updates",
        readTime: "3 Minutes",
        title: "New Integration: Connect Your SquadStack CRM in 1 Click",
        desc: "Our new App Marketplace lets you seamlessly sync lead sets from HubSpot, Salesforce, and Zoho directly into your active campaigns.",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop"
    }
];

export default function BlogGrid() {
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                {mockPosts.map(post => (
                    <article key={post.id} className={styles.card}>
                        <div className={styles.imageBox}>
                            <img src={post.img} alt={post.title} className={styles.thumbnail} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.meta}>
                                <span className={styles.category}>{post.category}</span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.time}>{post.readTime}</span>
                            </div>
                            <h3 className={styles.title}>{post.title}</h3>
                            <p className={styles.desc}>{post.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className={styles.pagination}>
                <button className={styles.loadMore}>Load More Articles</button>
            </div>
        </section>
    );
}
