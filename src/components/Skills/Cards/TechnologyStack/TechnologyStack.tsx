import CardTitle from '../../common/CardTitle'
import SkillCard from '../../common/SkillCard'

import TechnologyProgress from './TechnologyProgress'
export default function TechnologyStack() {
  return (
    <SkillCard className="col-span-4 row-span-2 flex flex-col justify-between">
      <CardTitle>
        Technology
        <br /> Stack <span className="text-sweety-blue-400">Knowledge</span>
      </CardTitle>
      <div className="mt-2 space-y-3">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <TechnologyProgress
              experience={''}
              key={index}
              link={''}
              number={0}
              progress={0}
              technology={''}
            />
          )
        })}
      </div>
    </SkillCard>
  )
}
