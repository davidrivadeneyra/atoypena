function isModifiedEvent(event) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
}

function isProductRoute(pathname) {
  return pathname.startsWith('/productos/')
}

function scrollToHash(hash) {
  if (!hash) {
    return
  }

  const id = hash.replace('#', '')

  window.requestAnimationFrame(() => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

function AppLink({ children, className, to, ...props }) {
  const handleClick = (event) => {
    if (
      props.target === '_blank' ||
      isModifiedEvent(event) ||
      event.button !== 0 ||
      to.startsWith('http') ||
      to.startsWith('mailto:')
    ) {
      return
    }

    event.preventDefault()

    const nextUrl = new URL(to, window.location.origin)
    const currentPath = window.location.pathname
    const nextPath = nextUrl.pathname
    const shouldPreserveScroll =
      isProductRoute(currentPath) && isProductRoute(nextPath) && !nextUrl.hash

    if (!shouldPreserveScroll && !nextUrl.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    window.history.pushState({}, '', to)
    window.dispatchEvent(new Event('popstate'))
    window.dispatchEvent(new Event('codex:navigate'))
    scrollToHash(window.location.hash)
  }

  return (
    <a className={className} href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default AppLink
