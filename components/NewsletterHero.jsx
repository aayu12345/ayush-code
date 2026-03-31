"use client";
import styles from './NewsletterHero.module.css';

export default function NewsletterHero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    <h1 className={styles.title}>
                        Step into the <span className={styles.highlight}>Future of CX</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Get insights, trends and ideas into what's changing, what's working, and what's next in AI-led customer experience.
                    </p>
                    
                    <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="xyz@abc.com" 
                            className={styles.inputField} 
                            required 
                        />
                        <button type="submit" className={styles.submitBtn}>
                            Subscribe
                        </button>
                    </form>
                </div>
                
                <div className={styles.contentRight}>
                    <div className={styles.pillsContainer}>
                        <div className={styles.pill} style={{transform: 'rotate(-5deg)', top: '10%', right: '10%'}}>
                            <span className={styles.dot} style={{background: '#1e293b'}}></span> Agent Training
                        </div>
                        <div className={styles.pill} style={{transform: 'rotate(45deg)', top: '5%', right: '55%'}}>
                            <span className={styles.dot} style={{background: '#ffffff'}}></span> CX Ecosystem
                        </div>
                        <div className={styles.pill} style={{transform: 'rotate(-25deg)', top: '50%', right: '40%'}}>
                            <span className={styles.dot} style={{background: '#ffffff'}}></span> Lead Prioritization
                        </div>
                        <div className={styles.pill} style={{transform: 'rotate(25deg)', bottom: '15%', right: '25%'}}>
                            <span className={styles.dot} style={{background: '#6366f1'}}></span> Voicebot
                        </div>
                        <div className={styles.pill} style={{transform: 'rotate(0deg)', bottom: '0%', right: '0%'}}>
                            <span className={styles.dot} style={{background: '#1e293b'}}></span> AI Agents
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.logosBlock}>
                <h3 className={styles.logosTitle}>Join a community of 10,000+ readers from top organizations like</h3>
                <div className={styles.logosMatrix}>
                    <span className={styles.logoItem}>SmartCoin</span>
                    <span className={styles.logoItem}>solar square</span>
                    <span className={styles.logoItem}>DELHIVERY</span>
                    <span className={styles.logoItem}>moneyview</span>
                    <span className={styles.logoItem}>AMITY UNIVERSITY</span>
                    <span className={styles.logoItem}>kissht</span>
                </div>
            </div>
        </section>
    );
}
