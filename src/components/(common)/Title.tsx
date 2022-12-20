import { twMerge } from 'tailwind-merge'

import type React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Title({ children, className }: Props) {
  return (
    <h2
      className={twMerge('text-center text-6xl font-extrabold leading-[1.3] text-white', className)}
    >
      {children}
    </h2>
  )
}
