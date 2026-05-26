import { personal } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            {personal.shortName}<span>.</span>
          </div>

          <div className="footer-copy">
            © 2026 {personal.name} · Built with React
          </div>

          <div className="footer-links">
            <a href={personal.github}   target="_blank" rel="noreferrer">GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`https://mail.google.com/mail/?view=cm&to=${personal.email}`} target="_blank" rel="noreferrer">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
