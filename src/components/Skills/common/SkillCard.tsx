import Link from 'next/link'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  className?: string
  url?: string
}

export default function SkillCard({ children, className, url }: Props) {
  const card = useMemo(() => {
    if (url) {
      return (
        <Link
          className={twMerge(
            'col-span-1 row-span-2 rounded-2xl bg-sweety-gray-900 px-6 flex flex-col justify-evenly py-6',
            className
          )}
          href={url}
        >
          {children}
        </Link>
      )
    }
    return (
      <div
        className={twMerge(
          'col-span-1 row-span-2 rounded-2xl bg-sweety-gray-900 px-6 flex flex-col justify-evenly py-6',
          className
        )}
      >
        {children}
      </div>
    )
  }, [children, className, url])

  return card
}
