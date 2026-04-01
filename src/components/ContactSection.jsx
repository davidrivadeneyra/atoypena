import AppLink from './AppLink'
import { companyInfo } from '../data/siteContent'
import { Map, Calendar, Phone, Mail } from 'lucide-react'

function ContactSection({ compact = false, standalone = false }) {
  return (
    <section className={standalone ? 'contact-shell contact-shell-standalone' : 'contact-shell'} id="contacto">
      <div className={compact ? 'contact-grid contact-grid-compact site-container' : 'contact-grid site-container'}>
        <div className="contact-panel">
          <p className="section-eyebrow pb-6">Planta y Ventas</p>
          <h2 className="section-title text-ink pb-6">
            Hablemos de su
            <span className="text-brand"> próximo remolque</span>
          </h2>
          <p className="section-copy pb-6">
            Atendemos proyectos estándar y fabricación a medida. Responderemos con la
            configuración más adecuada para su operación.
          </p>
          <ul className="contact-meta pb-6">
            <li className='flex gap-2'>
< Map size={24} color={'#59ba56'}/><p>{companyInfo.address}</p>
            </li>
             <li className='flex gap-2'>< Calendar size={24} color={'#59ba56'}/><p>{companyInfo.schedule}</p></li>
            <li className='flex gap-2'> < Phone size={24} color={'#59ba56'}/><p>{companyInfo.phonePrimary}</p></li>
            <li className='flex gap-2'> < Mail size={24} color={'#59ba56'}/><p>{companyInfo.email}</p></li>
           
          </ul>
          <div className="hero-actions">
            <a className="btn-primary" href={companyInfo.whatsappHref}>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="form-panel map-panel">
          <iframe
            allowFullScreen=""
            className="map-embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8497723907226!2d-77.0947839!3d-11.984895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf7544ddeaef%3A0xb819d1eb27df07f3!2sRemolques%20Ato%20%26%20Pe%C3%B1a%20-%20Fabricaci%C3%B3n%20de%20Remolques.!5e0!3m2!1ses!2spe!4v1774990134023!5m2!1ses!2spe"
            title="Mapa de Remolques Ato & Peña"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
