import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import SkillCard from './SkillCard'

type Props = {
  image: string
  title: string
  url: string
  textClassName?: string
}

export default function ContactCard({ image, title, url, textClassName }: Props) {
  return (
    <SkillCard
      className="col-span-6 row-span-1 min-h-0 min-w-0 items-center py-5 sm:col-span-4 lg:col-span-2"
      url={url}
    >
      <Image alt={title} className="block" height={100} src={image} width={70} />
      <h3 className={twMerge('mt-4 text-xl font-bold text-white', textClassName)}>{title}</h3>
    </SkillCard>
  )
}
