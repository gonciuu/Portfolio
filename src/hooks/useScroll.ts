import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    setScroll(window.scrollY)
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      return window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}
