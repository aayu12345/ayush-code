'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CollectionsFooterCTA.module.css';

export default function CollectionsFooterCTA() {
    useScrollReveal();

    return (
        <section className={styles.footerSection}>
            <div className={styles.container}>
                
                <h2 className={styles.heading}>
                    Experience Collections at Scale<br />Like Never Before.
                </h2>
                
                <div className={`${styles.footerBlock} reveal`}>
                    <div className={styles.topRow}>
                        
                        <div className={styles.colBranding}>
                            <div className={styles.logo}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="#1e293b" />
                                    <rect x="13" y="2" width="9" height="9" rx="2" fill="#475569" />
                                    <rect x="2" y="13" width="9" height="9" rx="2" fill="#475569" />
                                    <rect x="13" y="13" width="9" height="9" rx="2" fill="#cbd5e1" />
                                </svg>
                                <span>shyphan.ai</span>
                            </div>
                        </div>

                        <div className={styles.colLinks}>
                            <ul>
                                <li><a href="#">Solutions</a></li>
                                <li><a href="#">Our Complete Stack</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Webinars</a></li>
                                <li><a href="/life">Life at shyphan.ai</a></li>
                            </ul>
                        </div>

                        <div className={styles.colLinks}>
                            <ul>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Industry Reports</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div className={styles.colContact}>
                            <button className={styles.btnPrimary}>
                                Book a Demo <span style={{marginLeft: "8px"}}>→</span>
                            </button>
                            <a href="mailto:sales@shyphan.ai" className={styles.emailText}>sales@shyphan.ai</a>
                        </div>
                    </div>

                    <div className={styles.bottomRow}>
                        <div className={styles.address}>
                            Squadrun Solutions Pvt Ltd<br/>
                            D-18, Sector 3, Noida, Uttar Pradesh 201301
                        </div>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}>IN</a>
                            <a href="#" className={styles.socialIcon}>X</a>
                            <a href="#" className={styles.socialIcon}>IG</a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyrightBar}>
                    <div className={styles.copyText}>© 2025 — Copyright</div>
                    <div className={styles.legalLinks}>
                        <a href="#">ISO Certificate</a> • <a href="#">Privacy Policy</a> • <a href="#">Terms & Conditions</a> • <a href="#">Data Security & Compliance</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
