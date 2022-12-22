import Image from 'next/image'

import Flex from '@/components/(common)/Flex'
import PinkText from '@/components/(common)/PinkText'

import SkillCard from '../SkillCard'

export default function CreatedProjects() {
  return (
    <SkillCard className="col-span-4 row-span-1">
      <Flex className="justify-between">
        <h3 className="text-3xl font-semibold leading-[1.3] text-white">
          +15 Created
          <br /> <PinkText className="font-semibold">Projects</PinkText>
        </h3>
        <Image alt={'rocket'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
