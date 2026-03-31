'use client';
import styles from './BlogNewsletter.module.css';

export default function BlogNewsletter() {
    return (
        <section className={styles.newsletterSection}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Monthly Sales & Growth Insights</h2>
                    <p className={styles.desc}>
                        Every month we share actionable insights on sales, growth, and team management directly to your inbox. Join 10,000+ industry leaders.
                    </p>
                </div>
                
                <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder="First Name" className={styles.inputField} required />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder="Work Email" className={styles.inputField} required />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Subscribe to Newsletter
                    </button>
                </form>
            </div>
        </section>
    );
}
