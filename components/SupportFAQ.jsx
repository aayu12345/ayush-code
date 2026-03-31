'use client';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SupportFAQ.module.css';

const faqs = [
    {
        q: "How does Voice AI improve customer support compared to human-only teams?",
        a: "Voice AI handles thousands of conversations in parallel, resolves repetitive queries instantly, preserves full context across channels, and eliminates wait times. This leads to faster resolutions, higher first-call resolution, and significantly lower support costs."
    },
    {
        q: "Will Voice AI replace my customer support team?",
        a: "No. Voice AI works alongside your human team to deflect 60-80% of routine queries, freeing up your agents to focus on complex emotional or high-value discussions that require human empathy and nuanced problem-solving via Smart Human Escalation."
    },
    {
        q: "What kinds of customer support queries can your Voice AI handle?",
        a: "Our AI can handle order tracking updates, return and refund processing, billing inquiries, KYC document verification, subscription modifications, and even standard tech-support troubleshooting based on your knowledge base."
    },
    {
        q: "How does it integrate with Zendesk or Salesforce?",
        a: "Our system features deep API integrations with all major ticketing and CRM platforms including Zendesk, Salesforce, Freshdesk, and Zoho. All interactions are automatically logged, transcribed, and appended to the relevant user profiles in real-time."
    }
];

export default function SupportFAQ() {
    useScrollReveal();
    const [openIdx, setOpenIdx] = useState(0); 

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Frequently Asked Questions</h2>
                <div className={`${styles.faqList} reveal`}>
                    {faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`${styles.faqItem} ${openIdx === idx ? styles.active : ''}`}
                        >
                            <button 
                                className={styles.faqButton} 
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                            >
                                <span className={styles.faqQuestion}>{faq.q}</span>
                                <span className={styles.faqIcon}>{openIdx === idx ? '^' : 'v'}</span>
                            </button>
                            <div className={styles.faqAnswerWrapper}>
                                <div className={styles.faqAnswer}>
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
