'use client'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({ children, type, className, onClick, variant, size }: Props) {
  const variantClassName = useMemo(() => {
    const commonClassName =
      'rounded-full border-[2px] border-black text-lg font-semibold text-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] duration-200 hover:translate-x-1 hover:translate-y-1  hover:shadow-none text-white'

    const variants = {
      primary: 'bg-mainPurple-500 hover:bg-mainPurple-600',
      secondary: 'bg-mainOrange-500 hover:bg-mainOrange-600',
    }

    const sizes = {
      sm: 'text-sm py-1 px-4',
      md: 'text-base py-2 px-6',
      lg: 'text-lg  py-[10px] px-8',
    }

    const variantClass = variant ? variants[variant] : variants.primary
    const sizeClass = size ? sizes[size] : sizes.md

    return twMerge(commonClassName, variantClass, className, sizeClass)
  }, [variant, className, size])

  return (
    <button className={variantClassName} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
