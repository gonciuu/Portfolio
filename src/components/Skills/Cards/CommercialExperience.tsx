import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import SkillCard from '../SkillCard'

export default function CommercialExperience() {
  return (
    <SkillCard className="col-span-6 row-span-1">
      <Flex className="justify-between">
        <h3 className="text-2xl font-semibold leading-[1.3] text-white">
          Experience in
          <br /> commercial projects
        </h3>
        <Image alt={'rocket'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
