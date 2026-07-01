import { useEffect, useState } from 'react'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&$*01'

export function useDecryptText(target: string, speed = 28) {
  const [output, setOutput] = useState(target.replace(/[^\s]/g, '_'))

  useEffect(() => {
    let frame = 0
    const totalFrames = target.length * 3
    const interval = setInterval(() => {
      frame++
      const revealCount = Math.floor((frame / totalFrames) * target.length)
      setOutput(
        target
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            if (i < revealCount) return ch
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join(''),
      )
      if (revealCount >= target.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [target, speed])

  return output
}
