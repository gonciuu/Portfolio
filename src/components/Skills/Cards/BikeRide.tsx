import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import CardTitle from '../common/CardTitle'
import SkillCard from '../common/SkillCard'

export default function BikeRide() {
  return (
    <SkillCard className="col-span-12 row-span-1 sm:col-span-6 lg:col-span-4">
      <Flex className="justify-between">
        <CardTitle>
          Bike Riding <br />
          <span className="text-gray-300">enjoyer</span>
        </CardTitle>
        <Image alt={'bike'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
