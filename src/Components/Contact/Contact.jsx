import React from 'react'
import './Contact.css'
import { ContactForm } from '../Form';

export const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="contact-section">
        <div className="contact-left">
          <p className="section-kicker">Contacto</p>
          <h2>Hablemos de tu equipo o proyecto</h2>
          <p>
            Estoy abierto a incorporarme a equipos backend o full-stack. Si tienes una posición o una colaboración en mente, cuéntame qué estáis construyendo.
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
