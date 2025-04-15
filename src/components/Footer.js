import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Alyssa Allen. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://github.com/Alyssa-A-mobiledev" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/alyssa-allen01/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;