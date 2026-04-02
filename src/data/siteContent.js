const whatsappMessage =
  'Hola Remolques Ato & Peña, deseo información para fabricar un remolque a medida.'

const PRODUCT_IMAGE_GLOB = import.meta.glob(
  '/public/assets/site-images/productos/**/*.{avif,webp,png,jpg,jpeg,gif,svg}',
)

const productImagePaths = Object.keys(PRODUCT_IMAGE_GLOB)
const naturalCollator = new Intl.Collator('es', { numeric: true, sensitivity: 'base' })

function toPublicUrl(path) {
  return path.replace('/public', '')
}

function titleCase(text) {
  return text
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function humanizeSlug(slug) {
  return titleCase(slug.replace(/^remolques-/, '').replace(/-/g, ' '))
}

function defaultCategoryName(slug) {
  const label = humanizeSlug(slug)
  return label.toLowerCase().startsWith('de ')
    ? `Remolques ${label}`
    : `Remolques para ${label}`
}

function createDefaultCategoryMeta(slug) {
  const name = defaultCategoryName(slug)

  return {
    description: `Catálogo disponible para ${name.toLowerCase()}.`,
    lineDescription: 'Galería generada automáticamente desde las imágenes disponibles en esta categoría.',
    lineName: name,
    name,
    pageDescription: `Explora los modelos disponibles de ${name.toLowerCase()}.`,
  }
}

function normalizeGroup(slug, group) {
  const images = group.files.map((file) => `/assets/site-images/productos/${slug}/${file}`)

  return {
    images,
    name: group.name,
  }
}

function buildProductLines(slug, files, meta) {
  if (!meta.groups?.length) {
    return [
      {
        images: files.map((file) => `/assets/site-images/productos/${slug}/${file}`),
        name: meta.lineName ?? meta.name,
      },
    ]
  }

  const fileSet = new Set(files)
  const matchedFiles = new Set()
  const groups = []

  for (const group of meta.groups) {
    const existingFiles = group.files.filter((file) => fileSet.has(file))

    if (!existingFiles.length) {
      continue
    }

    existingFiles.forEach((file) => matchedFiles.add(file))
    groups.push(normalizeGroup(slug, { ...group, files: existingFiles }))
  }

  const remainingFiles = files.filter((file) => !matchedFiles.has(file))

  if (remainingFiles.length) {
    const remainingImages = remainingFiles.map((file) => `/assets/site-images/productos/${slug}/${file}`)

    if (groups.length) {
      groups[0] = {
        ...groups[0],
        images: [...groups[0].images, ...remainingImages],
      }
    } else {
      groups.push({
        images: remainingImages,
        name: meta.lineName ?? meta.name,
      })
    }
  }

  return groups
}

function buildDiscoveredCategories(metaBySlug) {
  const directoryToFiles = new Map()

  for (const path of productImagePaths) {
    const cleanPath = path.replace('/public/assets/site-images/productos/', '')
    const parts = cleanPath.split('/')

    if (parts.length !== 2) {
      continue
    }

    const [slug, file] = parts

    if (!directoryToFiles.has(slug)) {
      directoryToFiles.set(slug, [])
    }

    directoryToFiles.get(slug).push(file)
  }

  const knownSlugs = Object.keys(metaBySlug)
  const discoveredSlugs = Array.from(directoryToFiles.keys()).sort(naturalCollator.compare)
  const orderedSlugs = [
    ...knownSlugs.filter((slug) => directoryToFiles.has(slug)),
    ...discoveredSlugs.filter((slug) => !knownSlugs.includes(slug)),
  ]

  return orderedSlugs.map((slug) => {
    const files = (directoryToFiles.get(slug) ?? []).sort(naturalCollator.compare)
    const meta = metaBySlug[slug] ?? createDefaultCategoryMeta(slug)
    const productLines = buildProductLines(slug, files, meta)
    const coverImage = productLines[0]?.images[0] ?? null

    return {
      coverImage,
      description: meta.description,
      homeImage: meta.homeImage ?? coverImage,
      lineDescription: meta.lineDescription,
      name: meta.name,
      pageDescription: meta.pageDescription,
      productLines,
      slug,
    }
  })
}

export const companyInfo = {
  address: 'Av. Los Olivos, Mz. F, lote 26, San Martín de Porres, Lima, Perú.',
  description:
    'Fabricación y diseño de remolques de alta resistencia para agricultura, minería, energía, logística y proyectos especiales.',
  email: 'ventas@fabricaremolquesato.com',
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

const productCategoryMetaBySlug = {
  'remolques-para-sector-agricola': {
    description: 'Diseñado para satisfacer las demandas del sector agrícola.',
    groups: [
      {
        files: [
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
        name: 'Remolque para sector agrícola',
      },
    ],
    homeImage: '/assets/site-images/home/category1.avif',
    lineDescription: 'Configuraciones orientadas a trabajo agrícola y carga funcional.',
    name: 'Remolques para Sector Agrícola',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-para-mineria-y-construccion': {
    description: 'Capacidad para soportar equipos pesados con seguridad.',
    groups: [
      { files: ['construccion-y-mineria.avif', 'construccion-y-mineria1.avif'], name: 'Remolque para retroexcavadora' },
      { files: ['construccion-y-mineria2.avif'], name: 'Remolque para montacarga' },
      { files: ['construccion-y-mineria3.avif', 'construccion-y-mineria4.avif'], name: 'Remolque para autonivelador' },
      { files: ['construccion-y-mineria5.avif', 'construccion-y-mineria6.avif'], name: 'Remolque con tornamesa' },
      {
        files: ['construccion-y-mineria7.avif', 'construccion-y-mineria13.avif', 'construccion-y-mineria8.avif'],
        name: 'Remolque para minicargador',
      },
      { files: ['construccion-y-mineria9.avif', 'construccion-y-mineria10.avif'], name: 'Remolque para rodillo' },
      { files: ['construccion-y-mineria11.avif', 'construccion-y-mineria12.avif'], name: 'Remolque para elevador tijera' },
    ],
    homeImage: '/assets/site-images/home/category2.avif',
    lineDescription: 'Versiones listas para maquinaria, obra y operación de alto esfuerzo.',
    name: 'Remolques para Minería y Construcción',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para minería y construcción.',
  },
  'remolques-para-tanque-ibc': {
    description: 'Especialmente diseñados para el transporte seguro y eficiente de tanques IBC.',
    groups: [{ files: ['tanques_ibc.avif', 'tanques_ibc1.avif', 'tanques_ibc2.avif', 'tanques_ibc3.avif'], name: 'Remolque para tanques IBC' }],
    homeImage: '/assets/site-images/home/category12.avif',
    lineDescription: 'Modelos orientados a contenedores IBC y operación industrial ligera.',
    name: 'Remolques para Tanques IBC',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-de-1-eje': {
    description: 'Versátil y eficiente para múltiples usos industriales.',
    groups: [{
      files: [
        '01_eje.avif', '01_eje1.avif', '01_eje2.avif', '01_eje3.avif', '01_eje4.avif', '01_eje5.avif', '01_eje6.avif', '01_eje7.avif', '01_eje8.avif', '01_eje9.avif', '01_eje10.avif', '01_eje11.avif', '01_eje12.avif', '01_eje13.avif', '01_eje14.avif', '01_eje15.avif',
      ],
      name: 'Remolque de 01 EJE',
    }],
    homeImage: '/assets/site-images/home/category3.avif',
    lineDescription: 'Alternativas compactas de una sola línea de eje para carga eficiente.',
    name: 'Remolques de 1 Eje',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-de-2-ejes': {
    description: 'Mayor capacidad de carga para proyectos industriales exigentes.',
    groups: [{
      files: [
        '02_ejes.avif', '02_ejes1.avif', '02_ejes2.avif', '02_ejes3.avif', '02_ejes4.avif', '02_ejes5.avif', '02_ejes6.avif', '02_ejes7.avif', '02_ejes8.avif', '02_ejes9.avif', '02_ejes10.avif', '02_ejes11.avif', '02_ejes12.avif', '02_ejes13.avif',
      ],
      name: 'Remolque de 02 EJES',
    }],
    homeImage: '/assets/site-images/home/category4.avif',
    lineDescription: 'Mayor estabilidad y capacidad para trayectos y cargas de alta demanda.',
    name: 'Remolques de 2 Ejes',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-para-bote': {
    description: 'Transporta tu bote de forma segura y eficiente.',
    groups: [{ files: ['bote.avif', 'bote1.avif', 'bote2.avif'], name: 'Remolque para botes' }],
    homeImage: '/assets/site-images/home/category5.avif',
    lineDescription: 'Soluciones náuticas para traslado confiable y maniobra estable.',
    name: 'Remolques para Bote',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-porta-bobina': {
    description: 'Especializado en el transporte de bobinas de gran tamaño.',
    groups: [
      { files: ['porta_bobina.avif'], name: 'Remolque porta Bobina con Winche' },
      { files: ['porta_bobina1.avif'], name: 'Remolque porta Bobina con Sistema de Freno' },
      { files: ['porta_bobina2.avif'], name: 'Remolque porta Bobina con Sistema Fijo' },
    ],
    homeImage: '/assets/site-images/home/category6.avif',
    lineDescription: 'Versiones con configuración específica según sistema de maniobra.',
    name: 'Remolques Porta Bobina',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-porta-escalera': {
    description: 'Optimizado para el transporte de escaleras y herramientas.',
    groups: [
      { files: ['porta_escalera.avif', 'porta_escalera1.avif'], name: 'Remolque porta Escalera modelo extensión' },
      { files: ['porta_escalera2.avif'], name: 'Remolque porta Escalera modelo fijo' },
    ],
    homeImage: '/assets/site-images/home/category7.avif',
    lineDescription: 'Modelos especializados para instalaciones, energía y telecom.',
    name: 'Remolques Porta Escalera',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-para-cuatrimoto': {
    description: 'Diseño ideal para transportar cuatrimotos con facilidad.',
    groups: [{
      files: [
        'cuatrimoto.avif', 'cuatrimoto1.avif', 'cuatrimoto2.avif', 'cuatrimoto3.avif', 'cuatrimoto4.avif', 'cuatrimoto5.avif', 'cuatrimoto6.avif', 'cuatrimoto7.avif', 'cuatrimoto8.avif', 'cuatrimoto9.avif', 'cuatrimoto10.avif',
      ],
      name: 'Remolque porta Cuatrimoto',
    }],
    homeImage: '/assets/site-images/home/category8.avif',
    lineDescription: 'Capacidad y estabilidad pensadas para equipos recreativos y utilitarios.',
    name: 'Remolques para Cuatrimoto',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-para-moto': {
    description: 'Perfecto para el transporte seguro de motocicletas.',
    groups: [{ files: ['moto.avif', 'moto1.avif', 'moto2.avif', 'moto3.avif'], name: 'Remolque porta Moto' }],
    homeImage: '/assets/site-images/home/category9.avif',
    lineDescription: 'Formatos compactos para traslado seguro y fácil amarre.',
    name: 'Remolques para Moto',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-para-caballo-y-ganaderia': {
    description: 'Especializado en el transporte de animales de granja.',
    groups: [
      { files: ['caballo_y_ganaderia.avif', 'caballo_y_ganaderia1.avif', 'caballo_y_ganaderia2.avif', 'caballo_y_ganaderia3.avif'], name: 'Remolque porta Caballos' },
      { files: ['caballo_y_ganaderia4.avif', 'caballo_y_ganaderia5.avif', 'caballo_y_ganaderia6.avif', 'caballo_y_ganaderia7.avif', 'caballo_y_ganaderia8.avif'], name: 'Remolque para Ganadería' },
    ],
    homeImage: '/assets/site-images/home/category10.avif',
    lineDescription: 'Soluciones para bienestar animal, estabilidad y ventilación funcional.',
    name: 'Remolques para Caballo y Ganadería',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-porta-grupo-electrogeno-y-compresores': {
    description: 'Soluciones ideales para equipos industriales de energía.',
    groups: [
      { files: ['electrogenos_y_compresores.avif', 'electrogenos_y_compresores1.avif', 'electrogenos_y_compresores2.avif', 'electrogenos_y_compresores3.avif'], name: 'Remolque con llantas fijas' },
      { files: ['electrogenos_y_compresores4.avif', 'electrogenos_y_compresores5.avif', 'electrogenos_y_compresores6.avif', 'electrogenos_y_compresores7.avif'], name: 'Remolque con tornamesa' },
    ],
    homeImage: '/assets/site-images/home/category11.avif',
    lineDescription: 'Versiones configuradas para compresores y grupos electrógenos.',
    name: 'Remolques para Grupo Electrógeno y Compresores',
    pageDescription:
      'Encuentra el remolque perfecto diseñado específicamente para cada sector y necesidad.',
  },
  'remolques-para-elevador-tijera': {
    description: 'Remolques diseñados para trasladar elevadores tijera con estabilidad y seguridad.',
    lineDescription: 'Categoría detectada automáticamente desde el directorio de imágenes.',
    lineName: 'Remolque para elevador tijera',
    name: 'Remolques para Elevador Tijera',
    pageDescription: 'Explora los modelos disponibles para elevadores tijera.',
  },
  'remolques-para-grupo-electrogenos-con-tornamesa': {
    description: 'Configuraciones con tornamesa para grupos electrógenos y equipos industriales.',
    lineDescription: 'Categoría detectada automáticamente desde el directorio de imágenes.',
    lineName: 'Remolque para grupo electrógeno con tornamesa',
    name: 'Remolques para Grupo Electrógenos con Tornamesa',
    pageDescription: 'Explora los modelos disponibles con tornamesa.',
  },
  'remolques-para-grupo-eletrogenos-llantas-fijas': {
    description: 'Versiones de llantas fijas para traslado estable de grupos electrógenos.',
    lineDescription: 'Categoría detectada automáticamente desde el directorio de imágenes.',
    lineName: 'Remolque para grupo electrógeno de llantas fijas',
    name: 'Remolques para Grupo Electrógenos Llantas Fijas',
    pageDescription: 'Explora los modelos disponibles de llantas fijas.',
  },
}

export const productCategories = buildDiscoveredCategories(productCategoryMetaBySlug)

export const siteFooterLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' },
  { href: '/#contacto', label: 'Contáctenos' },
]
