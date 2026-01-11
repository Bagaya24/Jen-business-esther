import styles from './Layout.module.css';
import logoBlanc from '../../assets/LogoBlanc.png';
import logoBleu from '../../assets/LogoBleu.png';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
                <div className={styles.logo}>
                    <picture>
                        {/* 
                User Request: LogoBlanc for Light Mode, LogoBleu for Dark Mode.
                Logic: If system prefers dark, show Bleu. If light, show Blanc.
                WAIT: User said "LogoBlanc pour mode claire".
                So: Light Mode -> LogoBlanc. Dark Mode -> LogoBleu.
             */}
                        <source srcSet={logoBleu} media="(prefers-color-scheme: dark)" />
                        <source srcSet={logoBlanc} media="(prefers-color-scheme: light)" />
                        {/* Fallback */}
                        <img src={logoBlanc} alt="JEN Business" className={styles.logoImg} />
                    </picture>
                </div>
                <nav className={styles.nav}>
                    <a href="#services">Services</a>
                    <a href="#gallery">Galerie</a>
                    <a href="#testimonials">Avis</a>
                    <a href="#contact" className={styles.ctaButton}>Réserver</a>
                </nav>
            </div>
        </header>
    );
};
