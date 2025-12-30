import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            {/* Branding */}
            <div className="footer-branding">
                <h2>ESTATE AGENT</h2>
                <p>Making your property search seamless – explore, compare, and find your ideal home today.</p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>

            {/* Property Types */}
            <div className="footer-types">
                <h3>Property Types</h3>
                <ul>
                    <li><Link to="/properties?type=house">Houses</Link></li>
                    <li><Link to="/properties?type=flat">Flats</Link></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>📍 123 Property Street, London, UK</p>
                <p>📞 +44 92 9854 4545</p>
                <p>✉️ info@estateagent.com</p>
            </div>

            {/* Legal */}
            <div className="footer-legal">
                <p>© 2025 Estate Agent. All rights reserved.</p>
                <p>
                    <Link to="/privacy">Privacy Policy</Link> •
                    <Link to="/terms">Terms of Service</Link> •
                    <Link to="/cookies">Cookie Policy</Link>
                </p>
            </div>
        </footer>
    );
}
