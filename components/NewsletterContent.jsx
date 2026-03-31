"use client";
import { useState } from 'react';
import styles from './NewsletterContent.module.css';

export default function NewsletterContent() {
    const [activeTab, setActiveTab] = useState('DialedIN');

    return (
        <section className={styles.contentSection}>
            <div className={styles.header}>
                <h2 className={styles.mainTitle}>Latest NewsLetters</h2>
                <p className={styles.subtitle}>Inside the AI Revolution: SquadStack's Take on the Future</p>
                
                <div className={styles.tabsContainer}>
                    <button 
                        className={`${styles.tabBtn} ${activeTab === 'DialedIN' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('DialedIN')}
                    >
                        DialedIN
                    </button>
                    <button 
                        className={`${styles.tabBtn} ${activeTab === 'InnoWave' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('InnoWave')}
                    >
                        InnoWave
                    </button>
                </div>
            </div>

            {activeTab === 'DialedIN' && (
                <div className={styles.tabContent}>
                    <div className={styles.brandLogoGraphic}>
                        <div className={styles.logoTop}>
                            <span className={styles.logoLight}>dialed</span>
                            <span className={styles.logoDark}>in</span>
                        </div>
                        <div className={styles.logoBottom}>
                            <span className={styles.byLine}>by SquadStack</span>
                        </div>
                    </div>

                    <div className={styles.columnsBlock}>
                        <div className={styles.column}>
                            <span className={styles.dateLabel}>JULY 14, 2025</span>
                            <h3 className={styles.editionTitle}>Dialed In - Second Edition</h3>
                            <p className={styles.desc}>
                                Welcome to the June edition of Dialed In - your inside track to what's shifting the ground beneath CX, AI, and customer-facing innovation.
                            </p>
                            <a href="#" className={styles.readMore}>Read More</a>
                        </div>
                        
                        <div className={styles.column}>
                            <span className={styles.dateLabel}>JUNE 16, 2025</span>
                            <h3 className={styles.editionTitle}>Dialed In - First Edition</h3>
                            <p className={styles.desc}>
                                Welcome to the first edition of Dialed In by SquadStack - your go-to source for cutting-edge insights on CX and AI innovation.
                            </p>
                            <a href="#" className={styles.readMore}>Read More</a>
                        </div>
                    </div>
                </div>
            )}
            
            {activeTab === 'InnoWave' && (
                <div className={styles.tabContent}>
                    <div className={styles.brandLogoGraphic} style={{opacity: 0.5}}>
                        <div className={styles.logoTop}>
                            <span className={styles.logoDark} style={{color: '#475569'}}>Inno</span>
                            <span className={styles.logoLight} style={{color: '#8b5cf6'}}>Wave</span>
                        </div>
                        <div className={styles.logoBottom}>
                            <span className={styles.byLine}>Insights by SquadStack</span>
                        </div>
                    </div>
                    <div className={styles.columnsBlock}>
                        <div className={styles.column}>
                            <span className={styles.dateLabel}>COMING SOON</span>
                            <h3 className={styles.editionTitle}>InnoWave - Launch Edition</h3>
                            <p className={styles.desc}>
                                Stay tuned for the launch of our new quarterly insight publication focusing purely on algorithmic transformations.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
