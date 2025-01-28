import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., send to API or EmailJS
        console.log('Form submitted:', formData);
        // Clear form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
