import { journey } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Journey.css'

export default function Journey() {
  const titleRef = useScrollReveal()

  return (
    <section id="journey">
      <div className="wrap">
        <p className="section-label">My Journey</p>
        <h2 className="section-title reveal" ref={titleRef}>
          How I got here.
        </h2>
        <p className="section-sub">
          
        </p>

        <div className="timeline">
          {journey.map((item, i) => {
            const ref = useScrollReveal()
            return (
              <div
                className={`timeline-item reveal d${Math.min(i + 1, 4)}`}
                key={i}
                ref={ref}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-org">{item.org}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
