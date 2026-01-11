import { BeforeAfterCard } from './BeforeAfterCard';
import styles from './Gallery.module.css';

// Assets
import imgAvantPolissage from '../../../assets/voitureAvantPolissage.png';
import imgApresPolissage from '../../../assets/voitureApresPolissage.png';
import imgSalle from '../../../assets/voitureSalle.png';
import imgNettoye from '../../../assets/voitureNettoye.png';

const REAL_GALLERY = [
    {
        id: 1,
        before: imgSalle,
        after: imgNettoye,
        label: 'Nettoyage Extérieur & Intérieur'
    },
    {
        id: 2,
        before: imgAvantPolissage,
        after: imgApresPolissage,
        label: 'Polissage & Rénovation Carrosserie'
    }
];

export const GalleryGrid = () => {
    return (
        <section id="gallery" className={`section ${styles.gallerySection}`}>
            <div className="container">
                <h2 className="text-center mb-md">Nos Réalisations</h2>
                <p className="text-center mb-md text-muted">Découvrez l'efficacité de nos services vapeur.</p>
                <div className={styles.grid}>
                    {REAL_GALLERY.map(item => (
                        <BeforeAfterCard
                            key={item.id}
                            beforeImg={item.before}
                            afterImg={item.after}
                            label={item.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
