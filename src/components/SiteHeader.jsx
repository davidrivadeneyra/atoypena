import { useEffect, useState } from 'react'
import AppLink from './AppLink'
import { productCategories } from '../data/siteContent'

function SiteHeader({ currentCategory, isHome = false }) {
  const currentProduct = productCategories.find((category) => category.slug === currentCategory)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false)
      return undefined
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome])

  return (
    <header className={isScrolled ? 'site-header site-header-scrolled' : 'site-header'}>
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
