import React, { useState } from 'react';
import {Mail, X } from 'lucide-react'; 

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const email = "william.foley41@gmail.com";

    const emailClients = [
        {
            name: "Gmail",
            url: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
        },
        {
            name: "Outlook",
            url: `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`
        },
        {
            name: "Yahoo Mail",
            url: `https://compose.mail.yahoo.com/?to=${email}`
        }
    ];

    const handleEmailClick = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    return (
        <div>
            <div className="contact-container">
                <div className="contact-card">
                    <h1 className="contact-title">Contact</h1>
                    <div>
                        <p className="contact-description">
                            Feel free to email me!
                        </p>
                        <div className="email-container">
                            <Mail size={20} />
                            <button onClick={handleEmailClick} className="email-button">{email}</button>
                        </div>
                    </div>

                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <div className="popup-header">
                                    <h2 className="popup-title">Choose Email Client</h2>
                                    <button onClick={() => setShowPopup(false)} className="close-button"><X size={20} /></button>
                                </div>

                                <div className="email-clients">{emailClients.map((client) => (
                                    <a key={client.name} 
                                    href={client.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="client-button primary-button" 
                                    onClick={() => setShowPopup(false)}
                                    >
                                        Open in {client.name}
                                    </a>
                                    ))}
                                    <a
                                    href={`mailto:${email}`}
                                    className="client-button secondary-button"
                                    onClick={() => setShowPopup(false)}
                                    >
                                        Open in Default Email Client
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    );
};

export default Contact;