'use client'

import Button from '../(common)/Button'
import Flex from '../(common)/Flex'

import MenuItem from './MenuItem'

export default function Navbar() {
  return (
    <Flex className="mx-auto my-8 max-w-4xl justify-between rounded-full border-2 border-black bg-white px-8 py-3">
      <h1 className="text-xl font-bold">Kacper Wojak</h1>

      <Flex className="space-x-4">
        <MenuItem link="/esa">Resume</MenuItem>
        <MenuItem link="/esa">Projects</MenuItem>
        <Button variant="primary">Contact me</Button>
      </Flex>
    </Flex>
  )
}
