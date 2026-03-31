'use client';
import { useState } from 'react';
import styles from './VettedCallersTrainingOverview.module.css';

const tabData = [
    {
        id: 'context',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2" ry="2"/></svg>,
        title: "Context",
        subtitle: "CONTEXT TRAINING",
        heading: "Context about shyphan.ai is given through a series of informational videos",
        bgClass: styles.bgContext
    },
    {
        id: 'telecalling_test',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>,
        title: "Telecalling Test",
        subtitle: "TELECALLING ASSESSMENT",
        heading: "Thorough test which assesses theoretical knowledge on telecalling",
        bgClass: styles.bgTelecalling
    },
    {
        id: 'language_test',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
        title: "Language Test",
        subtitle: "LANGUAGE ASSESSMENT",
        heading: "English speaking test assessing speech, fluency, vocabulary, pronunciation, and grammar",
        bgClass: styles.bgLanguage
    },
    {
        id: 'app_training',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
        title: "App Training",
        subtitle: "TOOL PROFICIENCY",
        heading: "Comprehensive training on the proprietary agent application and workflows",
        bgClass: styles.bgApp
    },
    {
        id: 'interview',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
        title: "Interview",
        subtitle: "LIVE SCREENING",
        heading: "One-on-one virtual interview to assess communication skills and culture fit",
        bgClass: styles.bgInterview
    },
    {
        id: 'campaign_training',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
        title: "Campaign Training",
        subtitle: "CLIENT ONBOARDING",
        heading: "Specific deep-dive into the client's campaign, FAQs, and handling objections",
        bgClass: styles.bgCampaign
    },
    {
        id: 'calling_test',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
        title: "Calling Test",
        subtitle: "FINAL AUDIT",
        heading: "Mock calls evaluated by Quality Assurance before the agent goes live",
        bgClass: styles.bgCalling
    }
];

export default function VettedCallersTrainingOverview() {
    const [activeTab, setActiveTab] = useState('context');

    const currentData = tabData.find(t => t.id === activeTab);

    return (
        <section className={styles.trainingSection}>
            {/* Scrollable Tab Navigation */}
            <div className={styles.tabNavWrapper}>
                <div className={styles.tabNavContainer}>
                    <div className={styles.tabsContainer}>
                        {tabData.map(tab => (
                            <button 
                                key={tab.id}
                                className={`${styles.tabItem} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className={styles.tabIcon}>{tab.icon}</span>
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className={styles.contentContainer}>
                <div className={styles.textColumn}>
                    <p className={styles.subtitle}>{currentData.subtitle}</p>
                    <h2 className={styles.heading}>{currentData.heading}</h2>
                    
                    <div className={styles.smallIcons}>
                        <div className={styles.iconCirclePurple}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2l3 5h5l-4 4 1 5-5-3-5 3 1-5-4-4h5z"/></svg>
                        </div>
                        <div className={styles.iconCircleTeal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                    </div>
                </div>
                
                <div className={styles.visualColumn}>
                    <div className={`${styles.illustrationMock} ${currentData.bgClass}`}>
                        {/* Dynamic illustration based on tab (Abstracted visuals) */}
                        <div className={styles.mockContent}>
                            {activeTab === 'context' && (
                                <div className={styles.videoMock}>
                                    <div className={styles.playBtn}>▶</div>
                                </div>
                            )}
                            {activeTab === 'telecalling_test' && (
                                <div className={styles.testMock}>
                                    <div className={styles.checklist}>
                                        <div className={styles.checkItem}></div>
                                        <div className={styles.checkItem}></div>
                                        <div className={styles.checkItem}></div>
                                    </div>
                                    <div className={styles.bigCheck}>✓</div>
                                </div>
                            )}
                            {activeTab === 'language_test' && (
                                <div className={styles.languageMock}>
                                    <div className={styles.waveform}>
                                        <div className={styles.waveBar}></div><div className={styles.waveBar}></div><div className={styles.waveBar}></div><div className={styles.waveBar}></div><div className={styles.waveBar}></div>
                                    </div>
                                </div>
                            )}
                            {(activeTab !== 'context' && activeTab !== 'telecalling_test' && activeTab !== 'language_test') && (
                                <div className={styles.genericMock}>
                                     <div className={styles.screenPlaceholder}></div>
                                </div>
                            )}
                            
                            {/* The agent portrait floating */}
                            <div className={styles.agentPortrait}>
                                <div className={styles.agentPortraitHead}></div>
                                <div className={styles.agentPortraitBody}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
