import { skills } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const dotColor = {
  green:  '#10b981',
  teal:   '#14b8a6',
  lime:   '#84cc16',
  sky:    '#38bdf8',
}

export default function Skills() {
  const titleRef = useScrollReveal()

  return (
    <section id="skills">
      <div className="wrap">
        <p className="section-label">Skills</p>
        <h2 className="section-title reveal" ref={titleRef}>
          What I can do.
        </h2>
        <p className="section-sub">
          Here's what I actually know — honestly categorised.
        </p>

        <div className="skills-list">
          {skills.map((group, gi) => {
            const groupRef = useScrollReveal()
            return (
              <div
                className={`skill-group reveal d${gi + 1}`}
                key={gi}
                ref={groupRef}
              >
                <div className="skill-category">
                  <span
                    className="cat-dot"
                    style={{ background: dotColor[group.color] }}
                  />
                  {group.category}
                </div>

                <div className="skill-pills">
                  {group.items.map((item, ii) => (
                    <span className="skill-pill" key={ii}>
                      <span
                        className="pill-dot"
                        style={{ background: dotColor[group.color] }}
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Learning note */}
        <div className="skills-note reveal d4">
          <span>📚</span>
          <p>
            Currently learning: <strong>TypeScript</strong>, deeper{' '}
            <strong>Node.js patterns</strong>, and{' '}
            <strong>SQL databases</strong>. Always adding to this list.
          </p>
        </div>
      </div>
    </section>
  )
}
