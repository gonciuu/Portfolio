import Image from 'next/image'

import Button from '../(common)/Button'
import Flex from '../(common)/Flex'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-20 max-w-5xl">
        <h1 className=" text-center text-5xl font-bold leading-[1.3]">
          &ldquo;The best{' '}
          <span className="mx-1 inline-block rotate-[-8deg] rounded-full border-[2px] border-black bg-mainOrange-500 p-[6px] text-white">
            <span className="inline-block rounded-full border-[2px] border-black p-3 text-4xl">
              error
            </span>
          </span>{' '}
          message is the one <br /> that never shows up&bdquo;
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis malesuada dictum.
          Vestibulum lacinia placerat tempus. Mauris ultrices eros eget massa rhoncus, et feugiat
          ipsum porta.
        </p>
        <Button className="group mx-auto mt-12 block" size="lg">
          <Flex className="justify-center space-x-2 text-lg">
            <div>Take a tour</div>{' '}
            <div className="duration-300 group-hover:pl-2">
              <Image alt="rocket" height={24} src="/rocket.svg" width={24} />
            </div>
          </Flex>
        </Button>
      </div>
    </div>
  )
}
