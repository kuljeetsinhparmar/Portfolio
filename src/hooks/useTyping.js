import { useState, useEffect } from 'react'

export function useTyping(phrases, typingSpeed = 85, deletingSpeed = 42, pauseMs = 2000) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout

    if (!deleting) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(i => i + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseMs)
        }
      }, typingSpeed)
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setPhraseIndex(i => (i + 1) % phrases.length)
        }
      }, deletingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs])

  return text
}
