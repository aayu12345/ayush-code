'use client';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './WorkforceFAQ.module.css';

const faqs = [
    {
        q: "How does Voice AI help in high-volume hiring?",
        a: "It automatically calls, screens, and follows up with thousands of applicants in parallel, removing manual bottlenecks and lead drop-offs."
    },
    {
        q: "Is this suitable for delivery rider and gig hiring?",
        a: "Yes. Our engines are specifically optimized for gig economy metrics where time-to-hire directly translates to gross revenue."
    },
    {
        q: "Can shyphan.ai reduce early worker churn?",
        a: "Absolutely. By accurately detailing job expectations upfront and standardizing the information shared on the call, candidates have realistic expectations."
    },
    {
        q: "How fast can we start hiring at scale?",
        a: "Integration takes less than 48 hours for most standard ATS platforms. You can scale from 100 to 100,000 calls instantly."
    },
    {
        q: "Can it handle peak hiring demand?",
        a: "Yes. Voice AI handles infinite, parallel calls without crashing, taking breaks, or degrading interaction quality."
    },
    {
        q: "Does it work with our existing ATS or HRMS?",
        a: "Our API allows webhook triggers directly from platforms like Workday, Greenhouse, Darwinbox, and custom proprietary CRMs."
    }
];

export default function WorkforceFAQ() {
    useScrollReveal();
    const [openIdx, setOpenIdx] = useState(0); 

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                
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
