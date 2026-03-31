"use client";
import styles from './NewsletterFooter.module.css';

export default function NewsletterFooter() {
    return (
        <footer className={styles.newsletterFooter}>
            <div className={styles.topContainer}>
                <div className={styles.headerText}>
                    <h2>
                        Your customers deserve<br />
                        the best experience.<br />
                        <span className={styles.highlight}>We deliver it.</span>
                    </h2>
                </div>
                
                <div className={styles.subscribeBox}>
                    <p className={styles.subscribeLabel}>Join our newsletter</p>
                    <form className={styles.subscribeInput} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="xyz@abc.com" required />
                        <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </form>
                </div>
            </div>
            
            <div className={styles.floatingCard}>
                <div className={styles.cardGrid}>
                    <div className={styles.brandCol}>
                        <div className={styles.logoRow}>
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="9" height="9" rx="2" />
                                <rect x="13" y="13" width="9" height="9" rx="2" opacity="0.6" />
                                <rect x="2" y="13" width="9" height="9" rx="2" opacity="0.8" />
                            </svg>
                            <span className={styles.logoText}>SquadStack.ai</span>
                        </div>
                    </div>
                    
                    <div className={styles.linkList}>
                        <a href="#">Solutions</a>
                        <a href="#">Our Complete Stack</a>
                        <a href="#">Blog</a>
                        <a href="#">Webinars</a>
                        <a href="#">Life at SquadStack</a>
                    </div>
                    
                    <div className={styles.linkList}>
                        <a href="#">Careers</a>
                        <a href="#">Industry Reports</a>
                        <a href="#">Contact Us</a>
                    </div>
                    
                    <div className={styles.actionCol}>
                        <button className={styles.demoBtn}>Book a Demo →</button>
                        <a href="mailto:sales@squadstack.com" className={styles.emailText}>sales@squadstack.com</a>
                    </div>
                </div>
                
                <div className={styles.cardBottom}>
                    <div className={styles.address}>
                        Squadrun Solutions Pvt Ltd<br />
                        D-18, Sector 3, Noida, Uttar Pradesh 201301
                    </div>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}>ig</a>
                        <a href="#" className={styles.socialIcon}>xt</a>
                        <a href="#" className={styles.socialIcon}>in</a>
                    </div>
                </div>
            </div>
            
            <div className={styles.bottomLegal}>
                <span className={styles.copyright}>© 2025 — Copyright</span>
                <div className={styles.legalLinks}>
                    <a href="#">ISO Certificate</a>
                    <span className={styles.dot}>•</span>
                    <a href="#">Privacy Policy</a>
                    <span className={styles.dot}>•</span>
                    <a href="#">Terms & Conditions</a>
                    <span className={styles.dot}>•</span>
                    <a href="#">Data Security & Compliance</a>
                </div>
            </div>
        </footer>
    );
}
