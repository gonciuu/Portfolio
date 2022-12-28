import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function CardTitle({ children, className }: Props) {
  return (
    <h3 className={twMerge('text-3xl font-semibold leading-[1.3] text-white', className)}>
      {children}
    </h3>
  )
}
