import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { personal } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

// ─────────────────────────────────────────────────────────────
//  EMAILJS SETUP — fill these in after following SETUP.md
//  Get them free at https://www.emailjs.com
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'AbCdEfGh1234'

export default function Contact() {
  const formRef    = useRef(null)
  const titleRef   = useScrollReveal()
  const leftRef    = useScrollReveal()
  const rightRef   = useScrollReveal()

  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title reveal" ref={titleRef}>
          Let's talk.
        </h2>

        <div className="contact-grid">
          {/* Left: info */}
          <div className="contact-info reveal d1" ref={leftRef}>
            <p>
              I'm actively looking for my <strong>first software engineering
              role</strong> — frontend, full-stack, or anywhere I can learn
              and contribute. If you have an opportunity or just want to
              connect, reach out.
            </p>

            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <span className="cl-icon">✉️</span>
                <span>{personal.email}</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="cl-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="cl-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <a
                href={personal.resumeUrl}
                download
                className="contact-link"
              >
                <span className="cl-icon">📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrap reveal d2" ref={rightRef}>
            {status === 'sent' ? (
              <div className="form-success">
                <span>✅</span>
                <div>
                  <div className="success-title">Message sent!</div>
                  <p>Thanks for reaching out — I'll reply to your Gmail within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="from_name">NAME</label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reply_to">EMAIL</label>
                    <input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">SUBJECT</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Job opportunity / Collaboration / Just saying hi"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role or what you're working on..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="form-error">
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
