import { GalleryGrid } from '../components/features/gallery/GalleryGrid';
import { TestimonialsSection } from '../components/features/testimonials/TestimonialsSection';
import { ContactForm } from '../components/features/contact/ContactForm';
import { ServicesList } from '../components/features/services/ServicesList';
import styles from './Home.module.css';
import contactStyles from '../components/features/contact/Contact.module.css';
import mockupImg from '../assets/LogoMockup.png';

export const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${mockupImg})` }}>
                <div className={styles.shape}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1>Lavage Auto Premium <br /><span style={{ color: 'var(--color-accent)' }}>JEN BUSINESS</span></h1>
                    <p>
                        Service de lavage <strong>Écologique & Rapide</strong> à Goma.
                        <br />Redonnez l'éclat du neuf à votre véhicule dès aujourd'hui.
                    </p>
                    <div className={styles.heroButtons}>
                        <a href="#contact" className={styles.primaryBtn}>Réserver</a>
                        <a href="#services" className={styles.secondaryBtn}>Nos Services</a>
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
                    <h2 className="text-center mb-md">Contactez-nous</h2>
                    <p className="text-center mb-md" style={{ color: 'var(--color-text-muted)' }}>
                        📍 Route Goma-Sake | Q. Mabanga Sud | À côté de la DGI
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
