import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'
import './Navbar.css'

const links = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#journey',  label: 'Journey'  },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        {personal.shortName}<span>.</span>
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
        Hire Me
      </a>

      <button
        className="nav-ham"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>
    </nav>
  )
}
