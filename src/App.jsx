import { useEffect, useMemo, useState } from 'react'
import AppLink from './components/AppLink'
import ContactSection from './components/ContactSection'
import ProductCategoryCard from './components/ProductCategoryCard'
import SiteHeader from './components/SiteHeader'
import {
  companyInfo,
  homeHeroSlides,
  homeStats,
  homeStrengths,
  productCategories,
  siteFooterLinks,
} from './data/siteContent'

function getPathname() {
  if (typeof window === 'undefined') {
    return '/'
  }

  return window.location.pathname || '/'
}

function usePathname() {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    const handleChange = () => setPathname(getPathname())

    window.addEventListener('popstate', handleChange)
    window.addEventListener('codex:navigate', handleChange)

    return () => {
      window.removeEventListener('popstate', handleChange)
      window.removeEventListener('codex:navigate', handleChange)
    }
  }, [])

  return pathname
}

function SectionHeading({ eyebrow, title, accent, description, centered = false }) {
  return (
    <div className={centered ? 'section-heading section-heading-center' : 'section-heading'}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">
        {title}
        {accent ? <span className="text-brand">{` ${accent}`}</span> : null}
      </h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  )
}

function HeroSection() {
  const primarySlide = homeHeroSlides[0]

  return (
    <section className="hero-shell">
      <div className="hero-media">
        <img
          alt={primarySlide.alt}
          className="hero-image"
          src={primarySlide.image}
        />
      </div>
      <div className="hero-overlay" />
      <div className="site-container hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">{primarySlide.kicker}</p>
          <h1 className="hero-title">
            Remolques para
            <span className="text-brand"> mini cargadores</span>
          </h1>
          <p className="hero-description">
            Diseñamos y fabricamos remolques personalizados de alta calidad para
            agricultura, minería, construcción, logística e industria pesada.
          </p>
          <div className="hero-actions">
            <AppLink className="btn-primary" to="/productos/remolques-para-sector-agricola">
              Explorar catálogo
            </AppLink>
            <AppLink className="btn-secondary" to="/contacto">
              Solicitar cotización
            </AppLink>
          </div>
        </div>
        <div className="hero-side-panel">
          {homeHeroSlides.map((slide) => (
            <div className="hero-side-item" key={slide.title}>
              <p className="hero-side-label">{slide.title}</p>
              <p className="hero-side-copy">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section className="stats-shell">
      <div className="site-container stats-grid">
        {homeStats.map((item) => (
          <article className="stat-card" key={item.label}>
            <p className="stat-value">{item.value}</p>
            <p className="stat-label">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function StrengthsSection() {
  return (
    <section className="section-light">
      <div className="site-container stack-20">
        <SectionHeading
          accent="Ato & Peña?"
          description="No solo construimos remolques. Diseñamos soluciones de transporte con lógica estructural, acabados durables y foco en operación intensiva."
          eyebrow="Ventaja Competitiva"
          title="¿Por qué elegir"
        />
        <div className="strength-grid">
          {homeStrengths.map((item) => (
            <article className="strength-card" key={item.title}>
              <div className="strength-icon">{item.icon}</div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductionSection() {
  const featureImages = [
    {
      image: '/assets/site-images/home/category11.avif',
      label: 'Energía',
    },
    {
      image: '/assets/site-images/home/category4.avif',
      label: 'Carga pesada',
    },
    {
      image: '/assets/site-images/home/category7.avif',
      label: 'Especializados',
    },
    {
      image: '/assets/site-images/home/category8.avif',
      label: 'Todo terreno',
    },
  ]

  return (
    <section className="section-light">
      <div className="site-container stack-20">
        <SectionHeading
          eyebrow="Líneas de Producción"
          title="Nuestros remolques nacen"
          accent="para durar"
          description="Cada solución responde a una necesidad concreta de carga, arrastre, maniobra y resistencia en campo."
        />
        <div className="editorial-grid">
          <article className="editorial-card editorial-card-lg">
            <img
              alt="Remolques Ato & Peña"
              className="editorial-image"
              src="/assets/site-images/home/aboutUs.png"
            />
            <div className="editorial-overlay">
              <p className="editorial-kicker">Fabricación a medida</p>
              <h3 className="editorial-title">Ingeniería aplicada desde el primer corte.</h3>
            </div>
          </article>
          <div className="editorial-subgrid">
            {featureImages.map((item) => (
              <article className="editorial-card editorial-card-sm" key={item.label}>
                <img alt={item.label} className="editorial-image" src={item.image} />
                <div className="editorial-pill">{item.label}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeCatalogSection() {
  return (
    <section className="section-light" id="catalogo">
      <div className="site-container stack-20">
        <SectionHeading
          centered
          eyebrow="Catálogo"
          title="Nuestros"
          accent="Remolques"
          description="Cada card abre una vista de producto con la galería, familias y variantes disponibles según la categoría."
        />
        <div className="product-grid">
          {productCategories.map((category) => (
            <ProductCategoryCard category={category} key={category.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCtaSection() {
  return (
    <section className="section-dark">
      <div className="site-container project-panel">
        <div className="project-media">
          <img
            alt="Proyecto a medida"
            className="project-image"
            src="/assets/site-images/home/category10.avif"
          />
          <img
            alt="Proyecto estructural"
            className="project-image project-image-offset"
            src="/assets/site-images/home/category11.avif"
          />
        </div>
        <div className="project-copy">
          <p className="section-eyebrow">Proyectos Especiales</p>
          <h2 className="section-title text-on-dark">
            Diseñamos el remolque que su
            <span className="text-brand"> negocio necesita</span>
          </h2>
          <p className="section-copy text-on-dark-soft">
            Desarrollamos remolques bajo especificación técnica, carga requerida y
            tipo de maniobra. Desde un único prototipo hasta series productivas.
          </p>
          <ul className="bullet-list">
            <li>Cálculo estructural con criterio de uso real.</li>
            <li>Fabricación sobre acero de calidad industrial.</li>
            <li>Acabados personalizados para operación intensiva.</li>
          </ul>
          <AppLink className="btn-primary" to="/contacto">
            Iniciar mi proyecto
          </AppLink>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="stack-10">
          <img alt="Logo Remolques Ato & Peña" className="footer-logo" src="/assets/logo.png" />
          <p className="footer-copy">
            {companyInfo.description}
          </p>
        </div>
        <div className="stack-10">
          <p className="footer-label">Enlaces</p>
          {siteFooterLinks.map((link) => (
            <AppLink className="footer-link" key={link.href} to={link.href}>
              {link.label}
            </AppLink>
          ))}
        </div>
        <div className="stack-10">
          <p className="footer-label">Contacto</p>
          <p className="footer-copy">{companyInfo.address}</p>
          <p className="footer-copy">{companyInfo.schedule}</p>
          <p className="footer-copy">{companyInfo.phonePrimary}</p>
          <a className="footer-link" href={`mailto:${companyInfo.email}`}>
            {companyInfo.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <StrengthsSection />
      <ProductionSection />
      <HomeCatalogSection />
      <ProjectCtaSection />
      <ContactSection />
    </>
  )
}

function ProductTabs({ activeSlug }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Categorías de remolques">
      {productCategories.map((category) => {
        const isActive = category.slug === activeSlug

        return (
          <AppLink
            aria-selected={isActive}
            className={isActive ? 'category-tab category-tab-active' : 'category-tab'}
            key={category.slug}
            to={`/productos/${category.slug}`}
          >
            {category.name}
          </AppLink>
        )
      })}
    </div>
  )
}

function ProductPage({ slug }) {
  const activeCategory =
    productCategories.find((category) => category.slug === slug) ?? productCategories[0]

  return (
    <>
      <section className="product-hero">
        <div className="product-hero-media">
          <img
            alt={activeCategory.name}
            className="product-hero-image"
            src={activeCategory.coverImage}
          />
          <div className="product-hero-overlay" />
        </div>
        <div className="site-container product-hero-content">
          <AppLink className="back-link" to="/">
            Volver al home
          </AppLink>
          <p className="section-eyebrow">Catálogo de productos</p>
          <h1 className="page-title">{activeCategory.name}</h1>
          <p className="page-copy">{activeCategory.pageDescription}</p>
        </div>
      </section>

      <section className="section-light">
        <div className="site-container stack-20">
          <ProductTabs activeSlug={activeCategory.slug} />
          <div className="product-layout">
            <aside className="product-summary">
              <p className="summary-label">Resumen</p>
              <h2 className="summary-title">{activeCategory.name}</h2>
              <p className="summary-copy">{activeCategory.description}</p>
              <div className="stack-10">
                <p className="summary-label">Modelos o variantes</p>
                <ul className="summary-list">
                  {activeCategory.productLines.map((line) => (
                    <li key={line.name}>{line.name}</li>
                  ))}
                </ul>
              </div>
              <AppLink className="btn-primary w-full justify-center" to="/contacto">
                Solicitar cotización
              </AppLink>
            </aside>

            <div className="product-gallery-stack">
              {activeCategory.productLines.map((line) => (
                <article className="gallery-group" key={line.name}>
                  <div className="gallery-group-heading">
                    <h3 className="gallery-group-title">{line.name}</h3>
                    <p className="gallery-group-copy">{activeCategory.lineDescription}</p>
                  </div>
                  <div className="gallery-grid">
                    {line.images.map((image, index) => (
                      <figure
                        className={index === 0 ? 'gallery-item gallery-item-featured' : 'gallery-item'}
                        key={image}
                      >
                        <img alt={line.name} className="gallery-image" src={image} />
                      </figure>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection compact />
    </>
  )
}

function ContactPage() {
  return (
    <section className="section-light">
      <div className="site-container pt-page">
        <SectionHeading
          eyebrow="Contacto"
          title="Solicita una"
          accent="cotización"
          description="Cuéntanos qué tipo de remolque necesitas, capacidad de carga, uso y tiempos de entrega esperados."
        />
        <ContactSection standalone />
      </div>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="section-light">
      <div className="site-container empty-state">
        <p className="section-eyebrow">Ruta no encontrada</p>
        <h1 className="page-title text-ink">Esta página no existe.</h1>
        <AppLink className="btn-primary" to="/">
          Volver al inicio
        </AppLink>
      </div>
    </section>
  )
}

function renderRoute(pathname) {
  if (pathname === '/' || pathname === '/home') {
    return <HomePage />
  }

  if (pathname === '/contacto') {
    return <ContactPage />
  }

  if (pathname.startsWith('/productos/')) {
    const slug = pathname.replace('/productos/', '')
    return <ProductPage slug={slug} />
  }

  return <NotFoundPage />
}

function App() {
  const pathname = usePathname()
  const currentCategory = useMemo(() => {
    if (!pathname.startsWith('/productos/')) {
      return null
    }

    return pathname.replace('/productos/', '')
  }, [pathname])

  return (
    <div className="app-shell">
      <SiteHeader currentCategory={currentCategory} isHome={pathname === '/' || pathname === '/home'} />
      {renderRoute(pathname)}
      <Footer />
    </div>
  )
}

export default App
