import Image from 'next/image'

import Flex from '@/components/(common)/Flex'
import PinkText from '@/components/(common)/PinkText'

import CardTitle from '../common/CardTitle'
import SkillCard from '../common/SkillCard'

export default function CreatedProjects() {
  return (
    <SkillCard className="col-span-12 row-span-1 sm:col-span-6 lg:col-span-4">
      <Flex className="justify-between">
        <CardTitle>
          +15 Created
          <br /> <PinkText className="font-semibold">Projects</PinkText>
        </CardTitle>
        <Image alt={'rocket'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
