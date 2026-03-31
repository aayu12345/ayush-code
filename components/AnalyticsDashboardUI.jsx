'use client';
import styles from './AnalyticsDashboardUI.module.css';

export default function AnalyticsDashboardUI() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.textColumn}>
                    <div className={styles.badge}>Live Reporting</div>
                    <h2 className={styles.title}>Track what matters, in real time.</h2>
                    <p className={styles.description}>
                        Our advanced dashboard visualizes every touchpoint. From connectivity rates to the nuanced quality of each AI conversation, gain full spectrum visibility across all operations.
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Real-time AI caller performance graphs
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Automated drop-off point identification
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Customizable data exports for your CRM
                        </li>
                    </ul>
                </div>
                
                <div className={styles.visualColumn}>
                    <div className={styles.dashboardMock}>
                        <div className={styles.dashHeader}>
                            <div className={styles.dashDots}>
                                <span></span><span></span><span></span>
                            </div>
                            <div className={styles.dashTitle}>Campaign Performance</div>
                        </div>
                        <div className={styles.dashBody}>
                            <div className={styles.statsRow}>
                                <div className={styles.statBox}>
                                    <span className={styles.statLabel}>Total Leads</span>
                                    <span className={styles.statValue}>12,405</span>
                                    <span className={styles.statTrend}>+14% <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span>
                                </div>
                                <div className={styles.statBox}>
                                    <span className={styles.statLabel}>Connectivity</span>
                                    <span className={styles.statValue}>78.2%</span>
                                    <span className={styles.statTrend}>+5% <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span>
                                </div>
                                <div className={styles.statBox}>
                                    <span className={styles.statLabel}>Conversion</span>
                                    <span className={styles.statValue}>22.4%</span>
                                    <span className={styles.statTrend}>+2.1% <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span>
                                </div>
                            </div>
                            
                            <div className={styles.chartArea}>
                                <div className={styles.chartHeader}>Lead Sources breakdown</div>
                                <div className={styles.chartBars}>
                                    <div className={styles.barGroup}>
                                        <div className={styles.bar} style={{height: '80%'}}></div>
                                        <div className={styles.barLabel}>Organic</div>
                                    </div>
                                    <div className={styles.barGroup}>
                                        <div className={styles.bar} style={{height: '60%', background: '#a78bfa'}}></div>
                                        <div className={styles.barLabel}>Paid</div>
                                    </div>
                                    <div className={styles.barGroup}>
                                        <div className={styles.bar} style={{height: '90%'}}></div>
                                        <div className={styles.barLabel}>Referral</div>
                                    </div>
                                    <div className={styles.barGroup}>
                                        <div className={styles.bar} style={{height: '40%', background: '#a78bfa'}}></div>
                                        <div className={styles.barLabel}>Social</div>
                                    </div>
                                    <div className={styles.barGroup}>
                                        <div className={styles.bar} style={{height: '70%'}}></div>
                                        <div className={styles.barLabel}>Direct</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
