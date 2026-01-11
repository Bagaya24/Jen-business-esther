import styles from './Services.module.css';

const SERVICES = [
    { id: 1, title: 'Aspirateur habitacle & coffre', icon: '🧹' },
    { id: 2, title: 'Nettoyage vapeur plastiques', icon: '💨' },
    { id: 3, title: 'Nettoyage vapeur portes', icon: '🚪' },
    { id: 4, title: 'Vapeur vitres & jantes', icon: '🪟' },
    { id: 5, title: 'Lavage carrosserie à sec', icon: '✨' },
    { id: 6, title: 'Shampouineuse tissus/tapis', icon: '🧼' },
    { id: 7, title: 'Traitement anti-odeurs', icon: '🌿' },
    { id: 8, title: 'Nettoyage moteur vapeur', icon: '⚙️' }
];


export const ServicesList = () => {
    return (
        <section id="services" className={`section ${styles.section}`}>
            <div className="container">
                <h2 className="text-center mb-md">Nos Services <span style={{ color: 'var(--color-primary)' }}>ECO & CLEAN</span></h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
                        <p className="mb-md">
                            Chez <strong>JEN BUSINESS ETS</strong>, nous révolutionnons le lavage auto avec notre approche <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Écologique & Rapide</span>.
                            Nous utilisons la vapeur pour nettoyer en profondeur, désinfecter et protéger votre véhicule, tout en préservant l'environnement.
                        </p>
                        <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--color-text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Économie d'eau drastique</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Élimination de 99.9% des bactéries</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Service mobile ou sur site</li>
                        </ul>
                    </div>
                    <div style={{ flex: '0 1 300px' }}>
                        <img src="/Pictogramme.jpg" alt="Services Pictogramme" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    </div>
                </div>

                <div className={styles.grid}>
                    {SERVICES.map(s => (
                        <div key={s.id} className={styles.card}>
                            <div className={styles.icon}>{s.icon}</div>
                            <h3 className={styles.title}>{s.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
