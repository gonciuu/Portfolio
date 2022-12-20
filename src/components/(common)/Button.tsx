'use client'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'filled' | 'outlined'
  className?: string
  onClick?: () => void
}

export default function Button({ children, type, className, onClick, variant, size }: Props) {
  const commonClassName =
    'flex items-center justify-center transition duration-300 ease-in-out rounded-xl'
  const variantClassName = useMemo(() => {
    const variants = {
      filled: 'bg-white text-black font-semibold hover:bg-opacity-80',
      outlined:
        'text-sweety-purple-300 border border-sweety-purple-300 hover:bg-sweety-purple-300 hover:text-white',
    }

    const sizes = {
      sm: 'text-sm py-1 px-4',
      md: 'text-xl py-3 px-10',
      lg: 'text-xl  py-[10px] px-8',
    }

    const variantClass = variant ? variants[variant] : variants.filled
    const sizeClass = size ? sizes[size] : sizes.md

    return twMerge(commonClassName, variantClass, className, sizeClass)
  }, [variant, className, size])

  return (
    <button className={variantClassName} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
