'use client';
import styles from './SalesBrands.module.css';

const brands = [
    { name: "AngelOne", color: "#f97316" },
    { name: "EUREKA FORBES", color: "#1e3a8a" },
    { name: "Indiamart", color: "#dc2626" },
    { name: "TATA DIGITAL", color: "#0f172a" },
    { name: "AMITY UNIVERSITY", color: "#1e40af" },
    { name: "bankbazaar", color: "#3b82f6" },
    { name: "PhonePe", color: "#6b21a8" },
    { name: "NIIT", color: "#1e3a8a" },
    { name: "AXIS SECURITIES", color: "#9f1239" },
    { name: "super.money", color: "#4338ca" },
    { name: "moneyview", color: "#166534" },
    { name: "Buddy Loan", color: "#0ea5e9" }
];

export default function SalesBrands() {
    return (
        <section className={styles.brandsSection}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Trusted by India’s Top Brands</h2>
                
                <div className={styles.gridOuter}>
                    <div className={styles.grid}>
                        {brands.map((brand, idx) => (
                            <div key={idx} className={styles.gridItem}>
                                <div className={styles.logoPlaceholder} style={{ color: brand.color }}>
                                    {/* Using stylized text to simulate logos */}
                                    <span style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.5px" }}>
                                        {brand.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
