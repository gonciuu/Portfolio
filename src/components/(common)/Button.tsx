'use client'
import Link from 'next/link'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'filled' | 'outlined' | 'ghost'
  className?: string
  onClick?: () => void
  url?: string
}

export default function Button({ children, type, className, onClick, variant, size, url }: Props) {
  const commonClassName =
    'flex items-center justify-center transition duration-300 ease-in-out rounded-xl'
  const variantClassName = useMemo(() => {
    const variants = {
      filled: 'bg-white text-black font-semibold hover:bg-white/70',
      outlined: 'text-white border border-white hover:bg-white/10',
      ghost: 'text-sweety-blue-600 hover:text-sweety-blue-600/70 py-2 px-0',
    }

    const sizes = {
      sm: 'text-lg py-[10px] px-6',
      md: 'text-xl py-3 px-10',
      lg: 'text-2xl  py-4 px-12',
    }

    const variantClass = variant ? variants[variant] : variants.filled
    const sizeClass = size ? sizes[size] : sizes.md

    return twMerge(commonClassName, sizeClass, variantClass, className)
  }, [variant, className, size])

  const button = useMemo(() => {
    const btn = (
      <button className={variantClassName} type={type} onClick={onClick}>
        {children}
      </button>
    )

    return url ? <Link href={url}>{btn}</Link> : btn
  }, [variantClassName, type, onClick, children, url])

  return button
}
