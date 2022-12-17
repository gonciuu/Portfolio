'use client'

import Link from 'next/link'

import Flex from '../(common)/Flex'

export default function Navbar() {
  return (
    <Flex className="mx-auto my-8 max-w-[1000px] justify-between rounded-full border-2 border-black bg-white px-8 py-4">
      <h1 className="text-xl font-semibold">Kacper Wojak</h1>
      <Flex>
        <Link className="mx-4 text-base font-semibold" href="#projects">
          Projects
        </Link>
        <Link className="mx-4 text-base font-semibold" href="#resume">
          Resume
        </Link>
        <button>essito</button>
      </Flex>
    </Flex>
  )
}
