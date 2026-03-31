'use client';
import useScrollReveal from '@/hooks/useScrollReveal';
import styles from './SalesIntegrations.module.css';

export default function SalesIntegrations() {
    useScrollReveal();

    return (
        <section className={styles.integrationSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Integrates with Everything You Already Use</h2>
                
                <div className={`${styles.nodeMap} reveal`}>
                    
                    {/* SVG Connector Lines */}
                    <svg className={styles.svgConnections} viewBox="0 0 800 400" preserveAspectRatio="none">
                        {/* Lines Left Side */}
                        <path d="M 200,100 C 350,100 350,200 400,200" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        <path d="M 200,200 L 400,200" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        <path d="M 200,300 C 350,300 350,200 400,200" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        {/* Lines Right Side */}
                        <path d="M 400,200 C 450,200 450,100 600,100" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        <path d="M 400,200 L 600,200" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        <path d="M 400,200 C 450,200 450,300 600,300" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        {/* Line Bottom Custom */}
                        <path d="M 400,200 L 400,350" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    </svg>

                    {/* Left Column Nodes */}
                    <div className={styles.colLeft}>
                        <div className={styles.nodeCard}>Salesforce</div>
                        <div className={styles.nodeCard}>LeadSquared</div>
                        <div className={styles.nodeCard}>Zoho</div>
                    </div>

                    {/* Central Hub */}
                    <div className={styles.colCenter}>
                        <div className={styles.hubNode}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="9" height="9" rx="2" fill="#7c3aed" />
                                <rect x="13" y="2" width="9" height="9" rx="2" fill="#d946ef" />
                                <rect x="2" y="13" width="9" height="9" rx="2" fill="#d946ef" />
                                <rect x="13" y="13" width="9" height="9" rx="2" fill="#7c3aed" />
                            </svg>
                        </div>
                        <button className={styles.btnCustom}>+ Custom</button>
                    </div>

                    {/* Right Column Nodes */}
                    <div className={styles.colRight}>
                        <div className={styles.nodeCard}>Freshsales</div>
                        <div className={styles.nodeCard}>HubSpot</div>
                        <div className={styles.nodeCard}>meritto</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
