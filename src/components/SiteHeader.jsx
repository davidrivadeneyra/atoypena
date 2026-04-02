import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import AppLink from './AppLink'
import { companyInfo, productCategories } from '../data/siteContent'

function SiteHeader({ currentCategory, isHome = false }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  useEffect(() => {
    setIsMenuOpen(false)
  }, [currentCategory, isHome])

  return (
    <header className={isScrolled ? 'site-header site-header-scrolled' : 'site-header'}>
      <div className="site-container site-header-inner relative">
        <AppLink className="logo-mark" to="/">
          <img alt="Remolques Ato & Peña" className="logo-image" src="/assets/logo.png" />
        </AppLink>

        <nav className="site-nav" aria-label="Navegación principal">
          <AppLink className="site-nav-link" to="/productos">
            Productos
          </AppLink>
          <AppLink className="site-nav-link" to="/#catalogo">
            Categorías
          </AppLink>
        </nav>

        <AppLink className="btn-primary btn-header" href={companyInfo.whatsappHref}>
          Solicitar cotización
        </AppLink>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="mobile-nav-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mobile-nav-shell">
          <nav className="mobile-nav" aria-label="Navegación móvil">
            <AppLink className="mobile-nav-link" to="/productos">
              Productos
            </AppLink>
            <AppLink className="mobile-nav-link" to="/#catalogo">
              Categorías
            </AppLink>
            <AppLink className="btn-primary mobile-nav-cta" href={companyInfo.whatsappHref}>
              Solicitar cotización
            </AppLink>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
