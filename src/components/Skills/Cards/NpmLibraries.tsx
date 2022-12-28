import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import CardTitle from '../common/CardTitle'
import SkillCard from '../SkillCard'

export default function NpmLibraries() {
  return (
    <SkillCard className="col-span-3 row-span-2 items-center justify-evenly">
      <CardTitle className="text-2xl font-bold">Know more than</CardTitle>
      <Flex className="items-center space-x-4">
        <h1 className="bg-gradient-to-b from-sweety-orange-100 to-sweety-orange-400 bg-clip-text text-8xl font-extrabold text-transparent">
          50
        </h1>
        <Image alt={'thunder'} height={50} src="/thunder.svg" width={50} />
      </Flex>
      <CardTitle className="text-2xl font-bold">NPM libraries</CardTitle>
    </SkillCard>
  )
}
