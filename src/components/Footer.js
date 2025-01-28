import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Your Name</p>
            <div className="social-links">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                {/* Add more social links as needed */}
            </div>
        </footer>
    );
}

export default Footer;
 
