import { twMerge } from 'tailwind-merge'

import type React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function PinkText({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'inline-block bg-gradient-to-r from-sweety-pink-500 to-sweety-purple-300 bg-clip-text text-transparent text-center font-extrabold',
        className
      )}
    >
      {children}
    </div>
  )
}
