import styles from './Layout.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '2rem' }}>

                    <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ marginBottom: '1rem' }}>JEN BUSINESS ETS</h3>
                        <p className={styles.subtext}>
                            Lavage et nettoyage professionnel de véhicules.<br />
                            Abordable. Écologique. Rapide.
                        </p>
                    </div>

                    <div style={{ flex: '1 1 300px' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Contact</h4>
                        <p className={styles.subtext}>📞 +243 977 556 531</p>
                        <p className={styles.subtext}>📞 +243 990 018 820</p>
                        <p className={styles.subtext} style={{ marginTop: '0.5rem' }}>
                            📍 Route Goma-Sake | À côté de la DGI<br />
                            Q. Mabanga Sud, Av. Circulaire
                        </p>
                    </div>

                </div>
                <div className="text-center" style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className={styles.subtext}>&copy; {new Date().getFullYear()} JEN Business. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
