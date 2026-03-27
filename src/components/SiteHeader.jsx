import AppLink from './AppLink'
import { productCategories } from '../data/siteContent'

function SiteHeader({ currentCategory }) {
  const currentProduct = productCategories.find((category) => category.slug === currentCategory)

  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <AppLink className="logo-mark" to="/">
          <img alt="Remolques Ato & Peña" className="logo-image" src="/assets/logo.png" />
        </AppLink>

        <nav className="site-nav" aria-label="Navegación principal">
          <AppLink className="site-nav-link" to="/">
            Inicio
          </AppLink>
          <AppLink className="site-nav-link" to={currentProduct ? `/productos/${currentProduct.slug}` : '/productos/remolques-para-sector-agricola'}>
            Productos
          </AppLink>
          <AppLink className="site-nav-link" to="/#catalogo">
            Categorías
          </AppLink>
          <AppLink className="site-nav-link" to="/contacto">
            Contáctenos
          </AppLink>
        </nav>

        <AppLink className="btn-primary btn-header" to="/contacto">
          Solicitar cotización
        </AppLink>
      </div>
    </header>
  )
}

export default SiteHeader
