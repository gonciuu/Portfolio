import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import SkillCard from '../common/SkillCard'
export default function MultiplatformApps() {
  return (
    <SkillCard className="col-span-12 row-span-1 p-4 sm:col-span-6 lg:col-span-3">
      <Flex className="gap-4">
        <Image alt={'rocket'} height={40} src="/rocket.svg" width={40} />
        <Image alt={'rocket'} height={40} src="/rocket.svg" width={40} />
      </Flex>
      <h3 className="mt-4 text-2xl font-semibold leading-[1.3] text-white">
        <span className="text-sweety-gray-200">multiplatform</span> apps
      </h3>
    </SkillCard>
  )
}
