import { personalData } from '../data';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import './Contact.css';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// ... other imports

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Get them from: https://dashboard.emailjs.com/
        const SERVICE_ID = 'service_f8po52j';
        const TEMPLATE_ID = 'template_am16rc5';
        const PUBLIC_KEY = 'Q_WM8yNUpqp0xtnzy';

        if (SERVICE_ID === 'YOUR_SERVICE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
            alert("⚠️ Important: You need to set your EmailJS keys in src/components/Contact.jsx for this form to work!\n\nOpen the file and replace 'YOUR_SERVICE_ID' with your actual keys from emailjs.com.");
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent Successfully! 🚀");
                e.target.reset();
            }, (error) => {
                alert("Failed to send message. Please check your EmailJS configuration.");
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <Reveal>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <form ref={form} className="contact-form" onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn primary">Send Message</button>
                    </form>

                    <div className="social-links-container">
                        {Object.entries(personalData.socials).map(([platform, url], index) => (
                            <motion.a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </motion.a>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
