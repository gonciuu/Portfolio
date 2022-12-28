import Image from 'next/image'

import Flex from '@/components/(common)/Flex'

import CardTitle from '../common/CardTitle'
import SkillCard from '../common/SkillCard'

export default function VideoEditing() {
  return (
    <SkillCard className="col-span-3 row-span-1">
      <Flex className="justify-between">
        <CardTitle className="text-2xl">
          Basic Video
          <br /> <span className="text-[#22E596]">Editing</span>
        </CardTitle>
        <Image alt={'rocket'} height={70} src="/rocket.svg" width={70} />
      </Flex>
    </SkillCard>
  )
}
