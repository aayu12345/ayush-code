'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './CustomerStoriesHero.module.css';

export default function CustomerStoriesHero() {
    useScrollReveal();

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                
                {/* Carousel Slider Layout - Large Featured Item */}
                <div className={`${styles.featuredCard} reveal`}>
                    <div className={styles.imageCol}>
                        <img 
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" 
                            alt="Voice AI Delivered Higher Connectivity" 
                            className={styles.featureImg}
                        />
                        <div className={styles.overlayBrand}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{marginRight: '8px'}}>
                                <rect x="2" y="2" width="9" height="9" rx="2" fill="white" />
                                <rect x="13" y="13" width="9" height="9" rx="2" fill="white" opacity="0.5" />
                                <rect x="2" y="13" width="9" height="9" rx="2" fill="white" opacity="0.8" />
                            </svg>
                            shyphan.ai × <span className={styles.boldBrand}>DELHIVERY</span>
                        </div>
                    </div>
                    <div className={styles.contentCol}>
                        <h1 className={styles.title}>
                            Voice AI Delivered 70% Higher Connectivity and 50% Higher Conversion for a Leading B2B Marketplace
                        </h1>
                        <div className={styles.navControls}>
                            <button className={styles.navBtn}>{'<'}</button>
                            <button className={styles.navBtn}>{'>'}</button>
                        </div>
                    </div>
                </div>

                {/* Trusted Brands Strip */}
                <div className={`${styles.brandsArea} reveal`}>
                    <h3 className={styles.brandsHeading}>TRUSTED BY LEADING BUSINESSES</h3>
                    
                    <div className={styles.logoFlex}>
                        <div className={styles.logoItem} style={{ color: '#002060', fontWeight: '800' }}>
                            <span style={{color: '#ed1c24', fontSize: '1.2em'}}>∞</span> kotak
                            <div style={{fontSize: '0.5em', color: '#666'}}>Kotak Securities</div>
                        </div>
                        
                        <div className={styles.logoItem} style={{ color: '#16a34a', fontWeight: '800', letterSpacing: '-1px' }}>
                            <span style={{fontSize: '1.4em', marginRight: '4px'}}>M</span>moneyview
                        </div>
                        
                        <div className={styles.logoItem} style={{ color: '#9f1239', fontWeight: '700' }}>
                            <span style={{fontSize: '1.2em'}}>▲</span> AXIS SECURITIES
                        </div>

                        <div className={styles.logoItem} style={{ color: '#dc2626', fontWeight: '800' }}>
                            <span style={{ background: '#dc2626', color: 'white', padding: '2px 8px', borderRadius: '12px', marginRight: '4px' }}>redBus</span>.in
                        </div>

                        <div className={styles.logoItem} style={{ color: '#1e3a8a', fontWeight: '800' }}>
                           <span style={{color: '#3b82f6'}}>+</span> EUREKA FORBES
                        </div>

                        <div className={styles.logoItem} style={{ color: '#ea580c', fontWeight: '700' }}>
                           <span style={{ color: '#10b981', marginRight: '4px'}}>▲</span> Angel<span style={{fontWeight: '400'}}>One</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
