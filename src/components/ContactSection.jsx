import AppLink from './AppLink'
import { companyInfo } from '../data/siteContent'

function ContactSection({ compact = false, standalone = false }) {
  return (
    <section className={standalone ? 'contact-shell contact-shell-standalone' : 'contact-shell'}>
      <div className={compact ? 'contact-grid contact-grid-compact' : 'contact-grid'}>
        <div className="contact-panel">
          <p className="section-eyebrow">Planta y Ventas</p>
          <h2 className="section-title text-ink">
            Hablemos de su
            <span className="text-brand"> próximo remolque</span>
          </h2>
          <p className="section-copy">
            Atendemos proyectos estándar y fabricación a medida. Responderemos con la
            configuración más adecuada para su operación.
          </p>
          <div className="contact-meta">
            <p>{companyInfo.address}</p>
            <p>{companyInfo.schedule}</p>
            <p>{companyInfo.phonePrimary}</p>
            <p>{companyInfo.phoneSecondary}</p>
            <p>{companyInfo.email}</p>
          </div>
          <div className="hero-actions">
            <a className="btn-primary" href={companyInfo.whatsappHref}>
              Escribir por WhatsApp
            </a>
            <AppLink className="btn-secondary btn-secondary-dark" to="/">
              Ver categorías
            </AppLink>
          </div>
        </div>

        <form className="form-panel">
          <label className="form-field">
            <span>Nombre</span>
            <input name="name" placeholder="Tu nombre o empresa" type="text" />
          </label>
          <label className="form-field">
            <span>Teléfono</span>
            <input name="phone" placeholder="+51 999 999 999" type="tel" />
          </label>
          <label className="form-field">
            <span>Categoría de interés</span>
            <input name="category" placeholder="Ej. Remolques para minería" type="text" />
          </label>
          <label className="form-field">
            <span>Detalle del proyecto</span>
            <textarea
              name="message"
              placeholder="Capacidad, dimensiones, tipo de carga, uso y cualquier dato técnico."
              rows="5"
            />
          </label>
          <button className="btn-primary justify-center" type="submit">
            Solicitar cotización
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
