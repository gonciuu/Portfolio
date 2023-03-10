import SkillCard from '../common/SkillCard'

export default function UiDesign() {
  return (
    <SkillCard className="col-span-12 row-span-2 items-center sm:col-span-6 lg:col-span-3">
      <h3 className="text-center text-3xl font-bold text-white">
        UI/UX <span className="text-[#22E596]">Design</span> <br />
        Experience
      </h3>
      <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-4">
        <img alt="Figma" className="h-8" src="/rocket.svg" />
        <img alt="Figma" className="h-8" src="/rocket.svg" />
        <img alt="Figma" className="h-8" src="/rocket.svg" />
        <img alt="Figma" className="h-8" src="/rocket.svg" />
      </div>
    </SkillCard>
  )
}
