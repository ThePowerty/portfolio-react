import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import { ContactForm } from '../Form';

export const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contácteme</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Es hora de conectar</h1>
            <p>Actualmente estoy disponible para asumir nuevos proyectos, así que no dude en enviarme un mensaje sobre cualquier cosa en la que quiera que trabaje. Puedes contactar en cualquier momento.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>w.infanzon.98@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+34 681044219</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Madrid, España</p>
                </div>
            </div>
        </div>
        <ContactForm/>

      </div>
    </div>
  )
}
