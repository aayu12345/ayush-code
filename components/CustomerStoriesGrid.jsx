'use client';
import { useState, useMemo } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CustomerStoriesGrid.module.css';

const categories = [
    "All", "Brokerage", "Lending", "Education", "Logistics & E-Commerce", 
    "Health & Wellness", "Travel", "Games", "Insurance"
];

// Mock data array mirroring the exact cards seen in the screenshot
const allStories = [
    {
        id: 1,
        brand: "Quick-Commerce Platform",
        category: "Logistics & E-Commerce",
        title: "Driving 40% Lower Workforce Hiring & Engagement Costs with Voice AI + Human Orchestration",
        imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        brand: "Largest Business Discovery Platform",
        category: "Logistics & E-Commerce",
        title: "How India's Largest Business Discovery Platform Transformed Marketplace Growth and Trust at 60% Lower Cost with Voice AI",
        imgUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        brand: "DELHIVERY",
        category: "Logistics & E-Commerce",
        title: "Discover how Delhivery reduced rider acquisition costs by 4x and sped up onboarding by 3x using SquadStack's AI Voice Agents.",
        imgUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        brand: "Leading General Insurer",
        category: "Insurance",
        title: "India's Leading General Insurer Cuts Renewal Costs by 60% Through Voice AI-Led Automation",
        imgUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        brand: "Shiprocket",
        category: "Logistics & E-Commerce",
        title: "See how Shiprocket used SquadStack's AI Calling Engine to handle 3L+ leads, boost seller ID 5x, scale outreach 4x, and drive 5x First Time Recharge.",
        imgUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 6,
        brand: "Bank-Linked Brokerage",
        category: "Brokerage",
        title: "Learn how a leading bank-linked brokerage in India achieved 3x higher conversions and 3.2x lower handle time with SquadStack's Voice AI, transforming sales operations.",
        imgUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 7,
        brand: "B2B Marketplace",
        category: "Logistics & E-Commerce",
        title: "B2B Marketplace Growth Driven By Deep AI Connectivity Strategies",
        imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 8,
        brand: "STAGE",
        category: "Games",
        title: "STAGE Scales Paid Subscribers by 2x Using Fully Automated PTP Reminders.",
        imgUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 9,
        brand: "AMITY UNIVERSITY",
        category: "Education",
        title: "Amity University Doubles Form Fill Conversions with High-Intent Prioritization Models.",
        imgUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
    }
];

export default function CustomerStoriesGrid() {
    useScrollReveal();
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredStories = useMemo(() => {
        if (activeFilter === "All") return allStories;
        return allStories.filter(story => story.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className={styles.gridSection}>
            <div className={styles.container}>
                
                <h2 className={styles.mainTitle}>SquadStack Success Stories</h2>

                {/* Filter Pills */}
                <div className={`${styles.filterBar} reveal`}>
                    {categories.map((cat) => (
                        <button 
                            key={cat}
                            className={`${styles.filterPill} ${activeFilter === cat ? styles.active : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <div className={`${styles.storyGrid} reveal`}>
                    {filteredStories.map((story) => (
                        <div key={story.id} className={styles.storyCard}>
                            <div className={styles.cardImageArea}>
                                <img src={story.imgUrl} alt={story.brand} className={styles.cardImg} />
                                <div className={styles.cardOverlay}>
                                    <div className={styles.brandTag}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{marginRight: '6px'}}>
                                            <rect x="2" y="2" width="9" height="9" rx="2" fill="white" />
                                            <rect x="13" y="13" width="9" height="9" rx="2" fill="white" opacity="0.6" />
                                            <rect x="2" y="13" width="9" height="9" rx="2" fill="white" opacity="0.8" />
                                        </svg>
                                        SquadStack.ai × <span style={{fontWeight: '700', marginLeft: '4px'}}>{story.brand}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardTextArea}>
                                <p className={styles.cardTitle}>{story.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {filteredStories.length === 0 && (
                    <div className={styles.emptyState}>
                        No case studies found for this category yet. Check back soon!
                    </div>
                )}

            </div>
        </section>
    );
}
