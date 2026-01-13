import { GalleryGrid } from '../components/features/gallery/GalleryGrid';
import { TestimonialsSection } from '../components/features/testimonials/TestimonialsSection';
import { ContactForm } from '../components/features/contact/ContactForm';
import { ServicesList } from '../components/features/services/ServicesList';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import styles from './Home.module.css';
import contactStyles from '../components/features/contact/Contact.module.css';

export const Home = () => {
    const { t } = useLanguage();

    return (
        <div>
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url('/LogoMockup.png')` }}>
                <div className={styles.shape}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1>{t('hero.title')} <br /><span style={{ color: 'var(--color-accent)' }}>JEN BUSINESS</span></h1>
                    <p>
                        <strong>{t('hero.subtitleStrong')}</strong> {t('hero.subtitleRest')}
                        <br />{t('hero.description')}
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="#contact" className={styles.primaryBtn}>{t('hero.ctaBook')}</a>
                        <a href="#services" className={styles.secondaryBtn}>{t('hero.ctaServices')}</a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <ServicesList />

            {/* Gallery Section */}
            <GalleryGrid />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Contact Section */}
            <section id="contact" className={`section ${contactStyles.section}`}>
                <div className="container">
                    <h2 className="text-center mb-md">{t('contact.title')}</h2>
                    <p className="text-center mb-md" style={{ color: 'var(--color-text-muted)' }}>
                        {t('contact.address')}
                        <br />📞 +243 977 556 531
                    </p>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
};
