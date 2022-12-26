import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import SkillCard from '../SkillCard'

export default function NpmLibraries() {
  return (
    <SkillCard className="col-span-3 row-span-2 items-center justify-evenly">
      <h3 className="text-xl font-bold text-white">Know more than</h3>
      <Flex className="items-center space-x-4">
        <h1 className="bg-gradient-to-b from-sweety-orange-100 to-sweety-orange-400 bg-clip-text text-8xl font-extrabold text-transparent">
          50
        </h1>
        <Image alt={'thunder'} height={50} src="/thunder.svg" width={50} />
      </Flex>
      <h3 className="text-2xl font-bold text-white">NPM libraries</h3>
    </SkillCard>
  )
}
