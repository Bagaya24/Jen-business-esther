import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export const ContactForm = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );
            console.log('Email sent successfully');
            setStatus('success');
            e.target.reset(); // Clear form
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.successMessage}>
                <h3>Message Envoyé !</h3>
                <p>Nous avons bien reçu votre demande et vous répondrons sous 24h.</p>
                <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Envoyer un autre message</button>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            {/* Hidden input for "to_name" if needed by template, defaulting to Admin */}
            <input type="hidden" name="to_name" value="JEN Business Team" />

            <div className={styles.group}>
                <label htmlFor="c-name">Nom</label>
                <input
                    id="c-name"
                    name="user_name" /* Standard EmailJS name */
                    type="text"
                    required
                    placeholder="Votre nom"
                />
            </div>
            <div className={styles.group}>
                <label htmlFor="c-email">Email</label>
                <input
                    id="c-email"
                    name="user_email" /* Standard EmailJS email */
                    type="email"
                    required
                    placeholder="votre@email.com"
                />
            </div>
            <div className={styles.group}>
                <label htmlFor="c-msg">Message</label>
                <textarea
                    id="c-msg"
                    name="message" /* Standard EmailJS message */
                    rows="4"
                    required
                    placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
            </div>

            {status === 'error' && (
                <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                    Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                </p>
            )}

            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
        </form>
    );
};
