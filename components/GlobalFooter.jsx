import styles from './GlobalFooter.module.css';

export default function GlobalFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <div className={styles.brandRow}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                            <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.6" />
                            <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.8" />
                        </svg>
                        <span className={styles.brandText}>SquadStack.ai</span>
                    </div>
                    
                    <h2 className={styles.ctaTitle}>Revolutionize Your Sales Process Today!</h2>
                    
                    <button className={styles.bookDemo}>
                        BOOK A DEMO →
                    </button>
                    
                    <div className={styles.bottomBrand}>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                            <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.6" />
                            <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.8" />
                        </svg>
                        <span>SquadStack.ai</span>
                    </div>
                </div>
                
                <div className={styles.rightPanel}>
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Solutions</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#">How it Works?</a></li>
                            <li className={styles.listSubtitle}>Our Complete Stack</li>
                            <li><a href="/agent-management-platform">Agent Management Platform</a></li>
                            <li><a href="/call-quality-analysis">Call Quality Analysis</a></li>
                            <li><a href="/analytics-and-reporting">Analytics and Reporting</a></li>
                            <li><a href="/vetted-trained-telecallers">Vetted and Trained Telecallers</a></li>
                            <li><a href="/lead-management">Lead Management & Omnichannel</a></li>
                        </ul>
                        
                        <h4 className={styles.colTitle} style={{marginTop: '32px'}}>Industries</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#">Brokerage</a></li>
                            <li><a href="#">Lending</a></li>
                            <li><a href="#">E-commerce</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Health and Wellness</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Use Cases</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#">Onboarding & Welcome Calls</a></li>
                            <li><a href="#">Informational & Operational Calls</a></li>
                            <li><a href="#">Pre-Sales Calls</a></li>
                            <li><a href="#">Sales & Renewals Calls</a></li>
                        </ul>
                        
                        <h4 className={styles.colTitle} style={{marginTop: '32px'}}>Resources</h4>
                        <ul className={styles.linkList}>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="#">Webinars</a></li>
                            <li><a href="#">Industry Reports</a></li>
                            <li><a href="#">Guides & More</a></li>
                            <li><a href="#">Business Process Outsourcing</a></li>
                            <li><a href="#">Telecalling</a></li>
                            <li><a href="#">Call Center</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.column}>
                        <a href="#" className={styles.becomeCaller}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Become a Telecaller
                        </a>
                        
                        <h4 className={styles.colTitle} style={{marginTop: '48px'}}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#">Life at SquadStack</a></li>
                            <li><a href="#">Team & Investors</a></li>
                            <li>
                                <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    Careers <span className={styles.hiringBadge}>We're Hiring!</span>
                                </a>
                            </li>
                        </ul>
                        
                        <h4 className={styles.colTitle} style={{marginTop: '32px'}}>Connect</h4>
                        <a href="mailto:sales@squadstack.com" className={styles.emailLink}>sales@squadstack.com</a>
                        <div className={styles.socialRow}>
                            <a href="#" className={styles.socialIcon}>fb</a>
                            <a href="#" className={styles.socialIcon}>ig</a>
                            <a href="#" className={styles.socialIcon}>in</a>
                            <a href="#" className={styles.socialIcon}>xt</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
