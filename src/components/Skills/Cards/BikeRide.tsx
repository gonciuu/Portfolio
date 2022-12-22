import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import SkillCard from '../SkillCard'

export default function BikeRide() {
  return (
    <SkillCard className="col-span-4 row-span-1">
      <Flex className="justify-between">
        <h3 className="text-3xl font-semibold leading-[1.3] text-white">
          Bike Riding <br />
          <span className="text-gray-300">enjoyer</span>
        </h3>
        <Image alt={'bike'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
