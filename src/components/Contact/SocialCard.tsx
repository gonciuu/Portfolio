import Image from 'next/image'
import Link from 'next/link'

interface Props {
  image: string
  title: string
  url: string
  titleClassName?: string
}

export default function SocialCard({ image, title, url }: Props) {
  return (
    <Link href={url}>
      <div className="flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-sweety-gray-800 p-5 md:h-40 md:w-40">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image alt="linkedin" src={image} fill />
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
      </div>
    </Link>
  )
}
