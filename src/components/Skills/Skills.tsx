import PinkText from '../(common)/PinkText'
import Title from '../(common)/Title'

import SkillsGrid from './SkillsGrid'

const Skills = () => {
  return (
    <section className="mx-auto py-32" id="skills">
      <PinkText className="block text-4xl">Other Hand</PinkText>
      <Title className="mt-2">There&apos;s more...</Title>
      <SkillsGrid />
    </section>
  )
}

export default Skills
