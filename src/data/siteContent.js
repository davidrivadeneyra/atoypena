const whatsappMessage =
  'Hola Remolques Ato & Peña, deseo información para fabricar un remolque a medida.'

const asset = (path) => path

const lines = (slug, groups) =>
  groups.map((group) => ({
    name: group.name,
    images: group.images.map((image) => asset(`/assets/site-images/productos/${slug}/${image}`)),
  }))

export const companyInfo = {
  address: 'Av. Los Olivos, Mz. F, lote 26, San Martín de Porres, Lima, Perú.',
  description:
    'Fabricación y diseño de remolques de alta resistencia para agricultura, minería, energía, logística y proyectos especiales.',
  email: 'ventas@estructurametalicaato.com',
  phonePrimary: '(+51) 995 374 449',
  phoneSecondary: '(+51) 989 403 067',
  schedule: 'Lunes a sábado, 8:00 AM a 7:00 PM.',
  whatsappHref: `https://wa.me/51995374449?text=${encodeURIComponent(whatsappMessage)}`,
}

export const homeHeroSlides = [
  {
    alt: 'Remolques para sector agrícola',
    description: 'Diseño robusto para trabajo continuo en campo y rutas mixtas.',
    image: '/assets/site-images/home/hero.jpeg',
    kicker: 'Ingeniería de precisión',
    title: 'Sector agrícola',
  },
  {
    alt: 'Remolques para sector minero',
    description: 'Configuraciones para maquinaria pesada y operación exigente.',
    image: '/assets/site-images/home/slide2.avif',
    kicker: 'Trabajo pesado',
    title: 'Minería y construcción',
  },
  {
    alt: 'Soluciones de transporte para telefonía y redes',
    description: 'Plataformas compactas para equipos, herramientas y maniobra urbana.',
    image: '/assets/site-images/home/slide3.avif',
    kicker: 'Soluciones especiales',
    title: 'Industria y servicios',
  },
]

export const homeStats = [
  { label: 'Años de experiencia', value: '15+' },
  { label: 'Unidades fabricadas', value: '500+' },
  { label: 'Acero de calidad', value: '100%' },
  { label: 'Respuesta comercial', value: '24/7' },
]

export const homeStrengths = [
  {
    description:
      'Diseños optimizados para balance de carga, maniobrabilidad y rendimiento estructural.',
    icon: '01',
    title: 'Ingeniería CAD/CAM',
  },
  {
    description:
      'Acabados, soldadura y selección de materiales pensados para operación intensiva.',
    icon: '02',
    title: 'Calidad estructural',
  },
  {
    description:
      'Adaptamos configuración, capacidad y accesorios según la necesidad del cliente.',
    icon: '03',
    title: 'Soluciones personalizadas',
  },
]

export const productCategories = [
  {
    coverImage: '/assets/site-images/productos/remolques-para-sector-agricola/sector-agricola.avif',
    description: 'Diseñado para satisfacer las demandas del sector agrícola.',
    homeImage: '/assets/site-images/home/category1.avif',
    lineDescription: 'Configuraciones orientadas a trabajo agrícola y carga funcional.',
    name: 'Remolques para Sector Agrícola',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-para-sector-agricola', [
      {
        name: 'Remolque para sector agrícola',
        images: [
          'sector-agricola.avif',
          'sector-agricola1.avif',
          'sector-agricola2.avif',
          'sector-agricola3.avif',
          'sector-agricola4.avif',
          'sector-agricola5.avif',
          'sector-agricola6.avif',
          'sector-agricola7.avif',
          'sector-agricola8.avif',
        ],
      },
    ]),
    slug: 'remolques-para-sector-agricola',
  },
  {
    coverImage:
      '/assets/site-images/productos/remolques-para-mineria-y-construccion/construccion-y-mineria.avif',
    description: 'Capacidad para soportar equipos pesados con seguridad.',
    homeImage: '/assets/site-images/home/category2.avif',
    lineDescription: 'Versiones listas para maquinaria, obra y operación de alto esfuerzo.',
    name: 'Remolques para Minería y Construcción',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para minería y construcción.',
    productLines: lines('remolques-para-mineria-y-construccion', [
      {
        name: 'Remolque para retroexcavadora',
        images: ['construccion-y-mineria.avif', 'construccion-y-mineria1.avif'],
      },
      { name: 'Remolque para montacarga', images: ['construccion-y-mineria2.avif'] },
      {
        name: 'Remolque para autonivelador',
        images: ['construccion-y-mineria3.avif', 'construccion-y-mineria4.avif'],
      },
      {
        name: 'Remolque con tornamesa',
        images: ['construccion-y-mineria5.avif', 'construccion-y-mineria6.avif'],
      },
      {
        name: 'Remolque para minicargador',
        images: [
          'construccion-y-mineria7.avif',
          'construccion-y-mineria13.avif',
          'construccion-y-mineria8.avif',
        ],
      },
      {
        name: 'Remolque para rodillo',
        images: ['construccion-y-mineria9.avif', 'construccion-y-mineria10.avif'],
      },
      {
        name: 'Remolque para elevador tijera',
        images: ['construccion-y-mineria11.avif', 'construccion-y-mineria12.avif'],
      },
    ]),
    slug: 'remolques-para-mineria-y-construccion',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-para-tanque-ibc/tanques_ibc.avif',
    description: 'Especialmente diseñados para el transporte seguro y eficiente de tanques IBC.',
    homeImage: '/assets/site-images/home/category12.avif',
    lineDescription: 'Modelos orientados a contenedores IBC y operación industrial ligera.',
    name: 'Remolques para Tanques IBC',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-para-tanque-ibc', [
      {
        name: 'Remolque para tanques IBC',
        images: ['tanques_ibc.avif', 'tanques_ibc1.avif', 'tanques_ibc2.avif', 'tanques_ibc3.avif'],
      },
    ]),
    slug: 'remolques-para-tanque-ibc',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-de-1-eje/01_eje.avif',
    description: 'Versátil y eficiente para múltiples usos industriales.',
    homeImage: '/assets/site-images/home/category3.avif',
    lineDescription: 'Alternativas compactas de una sola línea de eje para carga eficiente.',
    name: 'Remolques de 1 Eje',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-de-1-eje', [
      {
        name: 'Remolque de 01 EJE',
        images: [
          '01_eje.avif',
          '01_eje1.avif',
          '01_eje2.avif',
          '01_eje3.avif',
          '01_eje4.avif',
          '01_eje5.avif',
          '01_eje6.avif',
          '01_eje7.avif',
          '01_eje8.avif',
          '01_eje9.avif',
          '01_eje10.avif',
          '01_eje11.avif',
          '01_eje12.avif',
          '01_eje13.avif',
          '01_eje14.avif',
          '01_eje15.avif',
        ],
      },
    ]),
    slug: 'remolques-de-1-eje',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-de-2-ejes/02_ejes.avif',
    description: 'Mayor capacidad de carga para proyectos industriales exigentes.',
    homeImage: '/assets/site-images/home/category4.avif',
    lineDescription: 'Mayor estabilidad y capacidad para trayectos y cargas de alta demanda.',
    name: 'Remolques de 2 Ejes',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-de-2-ejes', [
      {
        name: 'Remolque de 02 EJES',
        images: [
          '02_ejes.avif',
          '02_ejes1.avif',
          '02_ejes2.avif',
          '02_ejes3.avif',
          '02_ejes4.avif',
          '02_ejes5.avif',
          '02_ejes6.avif',
          '02_ejes7.avif',
          '02_ejes8.avif',
          '02_ejes9.avif',
          '02_ejes10.avif',
          '02_ejes11.avif',
          '02_ejes12.avif',
          '02_ejes13.avif',
        ],
      },
    ]),
    slug: 'remolques-de-2-ejes',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-para-bote/bote.avif',
    description: 'Transporta tu bote de forma segura y eficiente.',
    homeImage: '/assets/site-images/home/category5.avif',
    lineDescription: 'Soluciones náuticas para traslado confiable y maniobra estable.',
    name: 'Remolques para Bote',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-para-bote', [
      {
        name: 'Remolque para botes',
        images: ['bote.avif', 'bote1.avif', 'bote2.avif'],
      },
    ]),
    slug: 'remolques-para-bote',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-porta-bobina/porta_bobina.avif',
    description: 'Especializado en el transporte de bobinas de gran tamaño.',
    homeImage: '/assets/site-images/home/category6.avif',
    lineDescription: 'Versiones con configuración específica según sistema de maniobra.',
    name: 'Remolques Porta Bobina',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-porta-bobina', [
      {
        name: 'Remolque porta Bobina con Winche',
        images: ['porta_bobina.avif'],
      },
      {
        name: 'Remolque porta Bobina con Sistema de Freno',
        images: ['porta_bobina1.avif'],
      },
      {
        name: 'Remolque porta Bobina con Sistema Fijo',
        images: ['porta_bobina2.avif'],
      },
    ]),
    slug: 'remolques-porta-bobina',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-porta-escalera/porta_escalera.avif',
    description: 'Optimizado para el transporte de escaleras y herramientas.',
    homeImage: '/assets/site-images/home/category7.avif',
    lineDescription: 'Modelos especializados para instalaciones, energía y telecom.',
    name: 'Remolques Porta Escalera',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-porta-escalera', [
      {
        name: 'Remolque porta Escalera modelo extensión',
        images: ['porta_escalera.avif', 'porta_escalera1.avif'],
      },
      {
        name: 'Remolque porta Escalera modelo fijo',
        images: ['porta_escalera2.avif'],
      },
    ]),
    slug: 'remolques-porta-escalera',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-para-cuatrimoto/cuatrimoto.avif',
    description: 'Diseño ideal para transportar cuatrimotos con facilidad.',
    homeImage: '/assets/site-images/home/category8.avif',
    lineDescription: 'Capacidad y estabilidad pensadas para equipos recreativos y utilitarios.',
    name: 'Remolques para Cuatrimoto',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-para-cuatrimoto', [
      {
        name: 'Remolque porta Cuatrimoto',
        images: [
          'cuatrimoto.avif',
          'cuatrimoto1.avif',
          'cuatrimoto2.avif',
          'cuatrimoto3.avif',
          'cuatrimoto4.avif',
          'cuatrimoto5.avif',
          'cuatrimoto6.avif',
          'cuatrimoto7.avif',
          'cuatrimoto8.avif',
          'cuatrimoto9.avif',
          'cuatrimoto10.avif',
        ],
      },
    ]),
    slug: 'remolques-para-cuatrimoto',
  },
  {
    coverImage: '/assets/site-images/productos/remolques-para-moto/moto.avif',
    description: 'Perfecto para el transporte seguro de motocicletas.',
    homeImage: '/assets/site-images/home/category9.avif',
    lineDescription: 'Formatos compactos para traslado seguro y fácil amarre.',
    name: 'Remolques para Moto',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-para-moto', [
      {
        name: 'Remolque porta Moto',
        images: ['moto.avif', 'moto1.avif', 'moto2.avif', 'moto3.avif'],
      },
    ]),
    slug: 'remolques-para-moto',
  },
  {
    coverImage:
      '/assets/site-images/productos/remolques-para-caballo-y-ganaderia/caballo_y_ganaderia.avif',
    description: 'Especializado en el transporte de animales de granja.',
    homeImage: '/assets/site-images/home/category10.avif',
    lineDescription: 'Soluciones para bienestar animal, estabilidad y ventilación funcional.',
    name: 'Remolques para Caballo y Ganadería',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-para-caballo-y-ganaderia', [
      {
        name: 'Remolque porta Caballos',
        images: [
          'caballo_y_ganaderia.avif',
          'caballo_y_ganaderia1.avif',
          'caballo_y_ganaderia2.avif',
          'caballo_y_ganaderia3.avif',
        ],
      },
      {
        name: 'Remolque para Ganadería',
        images: [
          'caballo_y_ganaderia4.avif',
          'caballo_y_ganaderia5.avif',
          'caballo_y_ganaderia6.avif',
          'caballo_y_ganaderia7.avif',
          'caballo_y_ganaderia8.avif',
        ],
      },
    ]),
    slug: 'remolques-para-caballo-y-ganaderia',
  },
  {
    coverImage:
      '/assets/site-images/productos/remolques-porta-grupo-electrogeno-y-compresores/electrogenos_y_compresores.avif',
    description: 'Soluciones ideales para equipos industriales de energía.',
    homeImage: '/assets/site-images/home/category11.avif',
    lineDescription: 'Versiones configuradas para compresores y grupos electrógenos.',
    name: 'Remolques para Grupo Electrógeno y Compresores',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
    productLines: lines('remolques-porta-grupo-electrogeno-y-compresores', [
      {
        name: 'Remolque con llantas fijas',
        images: [
          'electrogenos_y_compresores.avif',
          'electrogenos_y_compresores1.avif',
          'electrogenos_y_compresores2.avif',
          'electrogenos_y_compresores3.avif',
        ],
      },
      {
        name: 'Remolque con tornamesa',
        images: [
          'electrogenos_y_compresores4.avif',
          'electrogenos_y_compresores5.avif',
          'electrogenos_y_compresores6.avif',
          'electrogenos_y_compresores7.avif',
        ],
      },
    ]),
    slug: 'remolques-porta-grupo-electrogeno-y-compresores',
  },
]

export const siteFooterLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/productos/remolques-para-sector-agricola', label: 'Productos' },
  { href: '/contacto', label: 'Contáctenos' },
]
