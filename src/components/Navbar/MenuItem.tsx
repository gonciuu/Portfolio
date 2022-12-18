/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { useTailwindColor } from '@/hooks/useTailwindColor'

interface Props {
  children: React.ReactNode
  className?: string
  link?: string
}

export default function MenuItem({ children, className, link }: Props) {
  const orange500 = useTailwindColor('mainOrange', 500)
  return (
    <Link
      className={twMerge(
        `text-base font-semibold shadow-[inset_0_0_0_0_${orange500}] hover:shadow-[inset_100px_0_0_0_${orange500}] duration-300 px-3 py-1 hover:text-white`,
        className
      )}
      href={link || '#'}
    >
      {children}
    </Link>
  )
}
