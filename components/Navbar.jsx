'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    {
        label: 'Product',
        hasDropdown: true,
        items: [
            {
                label: 'Conversational Superintelligence™',
                href: '/conversational-superintelligence',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M10.2 6.2L9 5M17.8 6.2L19 5M10.2 11.8L9 13M14 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 21l9-9" /></svg>,
                color: '#6b7280'
            },
            {
                label: 'Humanoid AI Agent',
                href: '/humanoid-ai-agent-stack',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2"><path d="M12 2l3 5h5l-4 4 1 5-5-3-5 3 1-5-4-4h5z" fill="#d946ef" fillOpacity="0.2" /></svg>,
                color: '#d946ef'
            },
            {
                label: 'In-App Voice AI Assistant', href: '/in-app-voice-ai-assistant', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /><line x1="8" y1="22" x2="16" y2="22" /></svg>
            },
            {
                label: 'Agent Management Platform', href: '/agent-management-platform', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            },
            {
                label: 'AI Call Quality Analysis', href: '/call-quality-analysis', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            },
            {
                label: 'Analytics & Reporting', href: '/analytics-and-reporting', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            },
            {
                label: 'Vetted & Trained Telecallers', href: '/vetted-trained-telecallers', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
            },
            {
                label: 'Lead Management & Omnichannel Outreach', href: '/lead-management', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
            },
        ]
    },
    { 
        label: 'Solutions', 
        hasDropdown: true,
        items: [
            {
                label: 'Sales', href: '/sales', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            },
            {
                label: 'Workforce Hiring & Management', href: '/workforce-hiring-management', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            },
            {
                label: 'Loan EMI Collections', href: '/loan-emi-collections', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="12" y1="2" x2="12" y2="6"/></svg>
            },
            {
                label: 'Customer Support Automation', href: '/customer-support-automation', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            }
        ]
    },
    { label: 'Case Studies', href: '/customer-stories', hasDropdown: false },
    { 
        label: 'Resources', 
        hasDropdown: true,
        isMegaMenu: true,
        megaMenuContent: {
            leftLinks: [
                { label: 'Blogs', href: '/blog', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> },
                { label: 'Success Stories', href: '/customer-stories', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
                { label: 'E-books and White Papers', href: '/e-book', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> },
                { label: 'Events', href: '/resources/events', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
                { label: 'Humanoid Interaction Library', href: '/humanoid-interaction-library', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line></svg> },
                { label: 'NewsLetters', href: '/newsletters', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg> },
                { label: 'Industry Reports', href: '/resources/industry-report', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
                { label: 'Webinars', href: '/resources/webinar', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
                { label: 'View All', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg> },
            ],
            rightCards: [
                {
                    title: 'kissht',
                    imgUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop',
                },
                {
                    title: 'Classplus',
                    imgUrl: 'https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=400&auto=format&fit=crop',
                },
                {
                    title: 'EUREKA FORBES',
                    imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop',
                }
            ]
        }
    },
    { 
        label: 'Company', 
        hasDropdown: true,
        isMegaMenu: true,
        megaMenuLayout: 'company',
        megaMenuContent: {
            imageCard: {
                title: 'Become a Telecaller',
                imgUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop',
                href: '#'
            },
            linksList: [
                { label: 'Company', isTitle: true },
                { label: 'About', href: '#' },
                { label: 'Careers', href: '/careers' },
                { label: 'Life at shyphan.ai', href: '/life' },
                { label: 'Newsroom', href: '/newsroom' }
            ]
        }
    },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [expandedDrawerItem, setExpandedDrawerItem] = useState(null);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                {/* Logo */}
                <a href="/" className={styles.logo}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="9" height="9" rx="2" fill="#7c3aed" />
                        <rect x="13" y="2" width="9" height="9" rx="2" fill="#7c3aed" opacity="0.7" />
                        <rect x="2" y="13" width="9" height="9" rx="2" fill="#7c3aed" opacity="0.7" />
                        <rect x="13" y="13" width="9" height="9" rx="2" fill="#7c3aed" opacity="0.4" />
                    </svg>
                    <span>shyphan.ai</span>
                </a>

                {/* Desktop Nav */}
                <ul className={styles.links}>
                    {navLinks.map((navItem) => (
                        <li key={navItem.label} className={styles.navItem}>
                            <a href={navItem.href || "#"} className={styles.navLink}>
                                {navItem.label}
                                {navItem.hasDropdown && (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </a>

                            {/* Dropdown Menu */}
                            {navItem.items && !navItem.isMegaMenu && (
                                <div className={styles.dropdown}>
                                    {navItem.items.map((dropItem) => (
                                        <a href={dropItem.href} key={dropItem.label} className={styles.dropLink}>
                                            <span className={styles.dropIcon} style={{ color: dropItem.color || 'inherit' }}>
                                                {dropItem.icon}
                                            </span>
                                            <span className={styles.dropText}>{dropItem.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                            
                            {/* Mega Menu - Resources Layout */}
                            {navItem.isMegaMenu && navItem.megaMenuContent && !navItem.megaMenuLayout && (
                                <div className={styles.megaMenu}>
                                    <div className={styles.megaMenuLeft}>
                                        {navItem.megaMenuContent.leftLinks.map((link, idx) => (
                                            <a href={link.href} key={idx} className={styles.megaLink}>
                                                <span className={styles.megaIcon}>{link.icon}</span>
                                                <span className={styles.megaText}>{link.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                    <div className={styles.megaMenuRight}>
                                        <div className={styles.megaMenuRightTitle}>Stories of success</div>
                                        <div className={styles.megaMenuCards}>
                                            {navItem.megaMenuContent.rightCards.map((card, cidx) => (
                                                <a href="/customer-stories" key={cidx} className={styles.megaCard}>
                                                    <img src={card.imgUrl} alt={card.title} className={styles.megaCardImg} />
                                                    <div className={styles.megaCardOverlay}>
                                                        <span className={styles.megaCardBrand}>{card.title}</span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mega Menu - Company Layout */}
                            {navItem.isMegaMenu && navItem.megaMenuContent && navItem.megaMenuLayout === 'company' && (
                                <div className={styles.megaMenuCompany}>
                                    <a href={navItem.megaMenuContent.imageCard.href} className={styles.companyLeftImg}>
                                        <img src={navItem.megaMenuContent.imageCard.imgUrl} alt="Company" />
                                        <div className={styles.companyImgOverlay}>
                                            <span className={styles.companyPill}>{navItem.megaMenuContent.imageCard.title}</span>
                                        </div>
                                    </a>
                                    <div className={styles.companyRightLinks}>
                                        {navItem.megaMenuContent.linksList.map((link, idx) => 
                                            link.isTitle ? (
                                                <div key={idx} className={styles.companyMenuTitle}>{link.label}</div>
                                            ) : (
                                                <a key={idx} href={link.href} className={styles.companyMenuLink}>{link.label}</a>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className={styles.actions}>
                    <div className={styles.navItem}>
                        <div className={styles.launchedBadge}>
                            Just Launched <span className={styles.sparkle}>✦</span>
                        </div>
                        
                        {/* Just Launched Dropdown */}
                        <div className={styles.jlDropdown}>
                            <div className={styles.jlHeader}>Introducing</div>
                            <div className={styles.jlCards}>
                                <a href="/conversational-superintelligence" className={styles.jlCard}>
                                    <div className={`${styles.jlCardBg} ${styles.jlBg1}`}></div>
                                    <div className={styles.jlCardContent}>
                                        <div className={styles.jlCardTitle}>Conversational Superintelligence™</div>
                                        <div className={styles.jlCardDesc}>Voice AI that treats every buyer uniquely.</div>
                                    </div>
                                </a>
                                <a href="/in-app-voice-ai-assistant" className={styles.jlCard}>
                                    <div className={`${styles.jlCardBg} ${styles.jlBg2}`}></div>
                                    <div className={styles.jlCardContent}>
                                        <div className={styles.jlCardTitle}>In-App Voice AI Assistant</div>
                                        <div className={styles.jlCardDesc}>Orchestrate frictionless digital journeys.</div>
                                    </div>
                                </a>
                                <a href="/humanoid-ai-agent-stack" className={styles.jlCard}>
                                    <div className={`${styles.jlCardBg} ${styles.jlBg3}`}></div>
                                    <div className={styles.jlCardContent}>
                                        <div className={styles.jlCardTitle}>Humanoid Agent</div>
                                        <div className={styles.jlCardDesc}>Autonomous AI that handles complex calls easily.</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <a href="/schedule-demo" className={styles.ctaBtn}>
                        Book a Demo &rarr;
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
                </button>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className={styles.drawer}>
                    {navLinks.map((navItem) => (
                        <div key={navItem.label} className={styles.drawerGroup}>
                            <a 
                                href={navItem.href || "#"} 
                                className={styles.drawerLink} 
                                style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                                onClick={(e) => {
                                    if (navItem.hasDropdown) {
                                        e.preventDefault();
                                        setExpandedDrawerItem(expandedDrawerItem === navItem.label ? null : navItem.label);
                                    } else {
                                        setMenuOpen(false);
                                    }
                                }}
                            >
                                <span>{navItem.label}</span>
                                {navItem.hasDropdown && (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{transform: expandedDrawerItem === navItem.label ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>
                                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </a>
                            {expandedDrawerItem === navItem.label && (
                                <>
                                    {navItem.items && !navItem.isMegaMenu && (
                                        <div className={styles.drawerSub}>
                                            {navItem.items.map(subItem => (
                                                <a href={subItem.href} key={subItem.label} className={styles.drawerSubLink} onClick={() => setMenuOpen(false)}>
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    {navItem.isMegaMenu && navItem.megaMenuContent && (
                                        <div className={styles.drawerSub}>
                                            {navItem.megaMenuContent.leftLinks.map((link, subIdx) => (
                                                <a href={link.href} key={subIdx} className={styles.drawerSubLink} onClick={() => setMenuOpen(false)}>
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                    <a href="#" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>Book a Demo →</a>
                </div>
            )}
        </nav>
    );
}
