import React from 'react'
import './Footer.css'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <div className='footer'>
        <hr />
        <div className="footer-content">
            <p className="footer-content-left">© {currentYear} - Williams Infanzón. Todos los derechos reservados </p>
            <p className="footer-content-right">Connect with me</p>
        </div>
      </div>
    )
}

