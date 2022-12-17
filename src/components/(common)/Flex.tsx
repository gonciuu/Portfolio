import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Flex({ children, className }: Props) {
  return <div className={twMerge('flex items-center justify-start', className)}>{children}</div>
}
