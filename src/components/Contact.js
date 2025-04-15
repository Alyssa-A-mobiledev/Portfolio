import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email.includes('@')) {
            setError('Please enter a valid email.');
            return;
        }
        setError('');
        alert('Message submitted! 😊');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {error && <p className="error">{error}</p>}
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
