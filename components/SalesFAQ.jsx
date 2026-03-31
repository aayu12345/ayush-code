'use client';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SalesFAQ.module.css';

const faqs = [
    {
        q: "What is Voice AI for consumer sales?",
        a: "Voice AI for consumer sales uses conversational AI agents to call, qualify, follow up, and convert leads at scale. It automates high-volume sales conversations while routing high-intent prospects to human agents."
    },
    {
        q: "How does Voice AI increase sales conversion?",
        a: "By ensuring zero missed follow-ups, instantaneous lead response times, and consistent, high-quality, data-driven conversations at any scale."
    },
    {
        q: "How is Voice AI different from IVR or robocalls?",
        a: "Unlike static IVRs, Voice AI utilizes natural language processing (NLP) to understand context, handle interruptions, and hold dynamic, human-like sales conversations."
    },
    {
        q: "Is Voice AI suitable for Indian consumer sales use cases?",
        a: "Absolutely. Our engine supports multilingual regional dialects spanning English, Hindi, Tamil, Telugu, and more specifically tuned for Indian demographics."
    },
    {
        q: "Does Voice AI replace human sales agents?",
        a: "No. It acts as a force multiplier, automating the top-of-funnel qualification and follow-ups. It then utilizes Live Call Transfers to hand off qualified, high-intent leads to your human closers."
    },
    {
        q: "How fast does Voice AI contact new leads?",
        a: "Within seconds. Our API triggers the AI agent instantly as soon as a lead is ingested into your CRM."
    }
];

export default function SalesFAQ() {
    useScrollReveal();
    const [openIdx, setOpenIdx] = useState(0); // The first one is open by default like the screenshot

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
