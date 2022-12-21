import Image from 'next/image'

import Flex from '../(common)/Flex'
import PinkText from '../(common)/PinkText'

import SkillCard from './SkillCard'

export default function SkillsGrid() {
  return (
    <div className="mt-8 grid grid-cols-12 grid-rows-4 gap-4">
      <SkillCard className="col-span-4 row-span-2 py-6">
        <h3 className="text-3xl font-semibold leading-[1.3] text-white">
          Technology
          <br /> Stack <span className="text-sweety-blue-400">Knowledge</span>
        </h3>
        <div className="h-40">eslo</div>
      </SkillCard>
      <SkillCard className="col-span-4 row-span-1">
        <Flex className="justify-between">
          <h3 className="text-3xl font-semibold leading-[1.3] text-white">
            +15 Created
            <br /> <PinkText className="font-semibold">Projects</PinkText>
          </h3>
          <Image alt={'rocket'} height={70} src="/rocket.svg" width={70} />
        </Flex>
      </SkillCard>
      <SkillCard className="col-span-4 row-span-1">
        <Flex className="justify-between">
          <h3 className="text-3xl font-semibold leading-[1.3] text-white">
            Bike Riding <br />
            <span className="text-gray-300">enjoyer</span>
          </h3>
          <Image alt={'bike'} height={70} src="/rocket.svg" width={70} />
        </Flex>
      </SkillCard>
      <SkillCard className="col-span-3 row-span-2">elo1</SkillCard>
      <SkillCard className="col-span-3 row-span-2">elo2</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo3</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo4</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo5</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo6</SkillCard>
      <SkillCard className="col-span-3 row-span-1">elo7</SkillCard>
      <SkillCard className="col-span-6 row-span-1">elo8</SkillCard>
      <SkillCard className="col-span-3 row-span-1">elo9</SkillCard>
    </div>
  )
}
