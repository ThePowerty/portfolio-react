import React from 'react'
import './Contact.css'
import { ContactForm } from '../Form';

export const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="contact-section">
        <div className="contact-left">
          <p className="section-kicker">Contacto</p>
          <h2>¿Construimos algo que tenga que durar?</h2>
          <p>
            Estoy abierto a oportunidades backend y colaboraciones técnicas. Cuéntame el contexto y te responderé con los siguientes pasos.
          </p>
          <div className="contact-direct">
            <a href="mailto:w.infanzon.98@gmail.com">w.infanzon.98@gmail.com <span aria-hidden="true">↗</span></a>
            <span>Madrid · disponibilidad remota</span>
          </div>
        </div>
        <ContactForm/>
      </div>
    </section>
  )
}
