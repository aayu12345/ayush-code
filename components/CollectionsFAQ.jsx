'use client';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CollectionsFAQ.module.css';

const faqs = [
    {
        q: "How does Voice AI improve Promise-To-Pay (PTP) rates?",
        a: "Our AI agents engage debtors consistently with empathetic yet firm tone-mapping. By persistently following up via omnichannel strategies (Call, WhatsApp, SMS), we drastically reduce missed contacts and effectively negotiate repayment timelines without human fatigue."
    },
    {
        q: "Is shyphan.ai's AI compliant with RBI & TRAI regulations?",
        a: "Absolutely. Our platform has built-in DND scrubbing, enforces strictly regulated calling hours (e.g., 8 AM - 7 PM), and maintains 100% audit-ready interaction logs. We do not use aggressive or harassing language, ensuring total compliance with fair practices."
    },
    {
        q: "Can the AI negotiate settlements or handle disputes?",
        a: "The AI easily handles standard PTP tracking and due-date reminders. For complex disputes, hostility, or settlement negotiations, the system instantly triggers a seamless 'Live Agent Escalation' to your specialized human team armed with the full context."
    },
    {
        q: "Which Loan Buckets are best suited for Voice AI?",
        a: "Voice AI excels in the Pre-Due, Early Bucket (1-30 DPD), and Mid Bucket (31-60 DPD) stages. These stages rely heavily on volume and persistence, where our engine can autonomously resolve up to 70% of standard delays."
    },
    {
        q: "Does it support regional Indian languages for rural debtors?",
        a: "Yes. Our conversational AI fluidly speaks Hindi, English, Marathi, Tamil, Telugu, Kannada, and Bengali. It auto-detects caller preferences and switches dialects to build trust with regional borrowers."
    }
];

export default function CollectionsFAQ() {
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
