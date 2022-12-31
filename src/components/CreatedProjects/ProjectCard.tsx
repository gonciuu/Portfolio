import Image from 'next/image'

import Button from '../(common)/Button'
import Flex from '../(common)/Flex'

type Props = {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ description, image, link, title }: Props) {
  return (
    <article>
      <Flex className="aspect-square flex-col items-center justify-center rounded-2xl bg-sweety-gray-900">
        <Image alt="img" className=" block" height={200} src={image} width={200} />
      </Flex>
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="mt-4 text-lg text-gray-200 md:text-xl">{description}</p>
      </div>
      <Button className="group mt-3" url={link} variant="ghost">
        <Flex className="group-hover:space-x-1">
          <div>Check this out </div>
          <svg
            className="duration-200"
            fill="none"
            height={28}
            viewBox="0 0 24 24"
            width={28}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10 7 5 5-5 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Flex>
      </Button>
    </article>
  )
}
