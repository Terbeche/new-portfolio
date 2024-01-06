import React, { useState, useEffect } from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [state, handleSubmit] = useForm("mzbokdyd");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setFormData({
                fullName: '',
                email: '',
                message: ''
            });
            setShowSuccessMessage(true);
        }
    }, [state.succeeded]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
        <div className="contact-container">
            <div className="left-column">
                <p className='contact-text'>
                    I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
                </p>
            </div>
            <div className="right-column">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="fullName" name="fullName" placeholder="Full Name" className="contact-input" onChange={handleChange} value={formData.fullName}/>

                    <input type="email" id="email" name="email" placeholder="Email Address" className="contact-input" onChange={handleChange} value={formData.email}/>

                    <textarea id="message" name="message" placeholder="Message" className="contact-input" onChange={handleChange} value={formData.message}></textarea>

                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" id="contact-button" disabled={state.submitting}>Get in touch</button>
                    {showSuccessMessage && <p style={{color: 'green'}}>Email sent</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
