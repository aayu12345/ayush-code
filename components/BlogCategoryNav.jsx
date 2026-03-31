import styles from './BlogCategoryNav.module.css';

export default function BlogCategoryNav() {
    const categories = [
        "Our Product Innovations",
        "Sales Outsourcing",
        "Telecalling Strategy & Trends",
        "Sales Artificial Intelligence",
        "Telecalling Best Practices",
        "Customer Success Stories",
        "shyphan.ai Life"
    ];

    return (
        <div className={styles.blogCategoryNav}>
            <div className={styles.catInner}>
                <a href="/blog" className={styles.catActive} style={{textDecoration: 'none'}}>All</a>
                {categories.map((cat, idx) => (
                    <a 
                        key={idx} 
                        href={cat === "Customer Success Stories" ? "/customer-stories" : "#"} 
                        className={styles.catItem}
                        style={{textDecoration: 'none'}}
                    >
                        {cat}
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    );
}
