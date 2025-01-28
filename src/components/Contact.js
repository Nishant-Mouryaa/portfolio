import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Clear form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact-section">
            <div className="contact-container fadeInUp">
                {/* Left Side: Contact Info */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        Have a question or want to work together? Feel free to send me a
                        message!
                    </p>
                    <div className="info-details">
                        <div className="info-item">
                            <span className="info-label">Email:</span>
                            <span className="info-value">example@email.com</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Phone:</span>
                            <span className="info-value">+1 123 456 7890</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Location:</span>
                            <span className="info-value">City, Country</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form with Glassmorphism & Floating Labels */}
                <div className="contact-form-wrapper">
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        {/* Name Field */}
                        <div className="form-group">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Name</label>
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        {/* Message Field */}
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                placeholder=" "
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            />
                            <label htmlFor="message">Message</label>
                        </div>

                        <button type="submit" className="form-button">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
