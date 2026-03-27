function isModifiedEvent(event) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
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
    window.history.pushState({}, '', to)
    window.dispatchEvent(new Event('popstate'))
    window.dispatchEvent(new Event('codex:navigate'))
  }

  return (
    <a className={className} href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default AppLink
