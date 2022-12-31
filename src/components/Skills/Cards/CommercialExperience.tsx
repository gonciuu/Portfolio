import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import CardTitle from '../common/CardTitle'
import SkillCard from '../common/SkillCard'

export default function CommercialExperience() {
  return (
    <SkillCard className="col-span-12 row-span-1 sm:col-span-6">
      <Flex className="justify-between">
        <CardTitle className="text-2xl">
          Experience in
          <br /> commercial projects
        </CardTitle>
        <Image alt={'rocket'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
