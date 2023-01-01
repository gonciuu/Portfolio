'use client'

import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import { menuItems } from '@/helpers/menuItems'
import { useScroll } from '@/hooks/useScroll'

import Flex from '../(common)/Flex'

import MenuItem from './MenuItem'

export default function Navbar() {
  const scroll = useScroll()

  const navbar = useMemo(() => {
    const scrolledClasses = 'bg-sweety-gray-900/75 backdrop-blur-lg border-sweety-gray-500 h-14'
    const notScrolledClasses = 'bg-transparent backdrop-blur-none border-transparent h-16'
    return scroll < 150 ? notScrolledClasses : scrolledClasses
  }, [scroll])

  return (
    <nav
      className={twMerge(
        'fixed left-0 top-0 z-10 flex h-14 w-screen items-center border-b border-sweety-gray-500 bg-sweety-gray-900/75 backdrop-blur-lg duration-200',
        navbar
      )}
    >
      <Flex className="w-full justify-center gap-8">
        {menuItems.map((item) => {
          return (
            <MenuItem href={item.path} key={item.path}>
              {item.name}
            </MenuItem>
          )
        })}
      </Flex>
    </nav>
  )
}
