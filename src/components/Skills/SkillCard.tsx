import { twMerge } from 'tailwind-merge'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function SkillCard({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'col-span-1 row-span-2 rounded-2xl bg-sweety-gray-900 px-6 flex flex-col justify-center',
        className
      )}
    >
      {children}
    </div>
  )
}
