import BikeRide from './Cards/BikeRide'
import CreatedProjects from './Cards/CreatedProjects'
import TechnologyStack from './Cards/TechnologyStack'
import SkillCard from './SkillCard'

export default function SkillsGrid() {
  return (
    <div className="mt-8 grid grid-cols-12 grid-rows-4 gap-4">
      <TechnologyStack />
      <CreatedProjects />
      <BikeRide />
      <SkillCard className="col-span-3 row-span-2">elo1</SkillCard>
      <SkillCard className="col-span-3 row-span-2">elo2</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo3</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo4</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo5</SkillCard>
      <SkillCard className="col-span-2 row-span-1">elo6</SkillCard>
      <SkillCard className="col-span-3 row-span-1">elo7</SkillCard>
      <SkillCard className="col-span-6 row-span-1">elo8</SkillCard>
      <SkillCard className="col-span-3 row-span-1">elo9</SkillCard>gi
    </div>
  )
}
