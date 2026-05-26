import { personal, stats } from '../data/portfolio'
import { useTyping } from '../hooks/useTyping'
import './Hero.css'

export default function Hero() {
  const typed = useTyping(personal.typingPhrases)

  return (
    <section id="hero" className="hero">
      <div className="bg-grid" />
      <div className="hero-glow" />

      <div className="wrap">
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to opportunities · Pune, India
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Hi, I'm <span className="accent">{personal.name}</span>
            <br />
            <span className="dim">I turn </span> the web.
          </h1>

          {/* Typing */}
          <div className="hero-typing">
            <span className="typing-prefix">&gt;_</span>
            <span className="typed-text">{typed}</span>
            <span className="cursor-blink" />
          </div>

          {/* Bio */}
          <p className="hero-bio">
            Computer Engineering graduate with hands-on experience in{' '}
            <strong>React, Node.js, and JavaScript</strong>. I shipped my first
            full-stack project and I'm looking for a team where I can{' '}
            <strong>keep learning and contribute for real</strong>.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Project
            </a>
            <a href={personal.resumeUrl} download className="btn btn-outline">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          {/* Stats bar */}
          <div className="hero-stats">
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <div className="stat-val">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
