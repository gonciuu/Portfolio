import { twMerge } from 'tailwind-merge'

import type React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Title({ children, className }: Props) {
  return (
    <h2
      className={twMerge(
        'text-center font-extrabold leading-[1.3] text-white text-3xl sm:text-5xl md:text-6xl',
        className
      )}
    >
      {children}
    </h2>
  )
}
