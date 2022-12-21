import PinkText from '../(common)/PinkText'
import Title from '../(common)/Title'

import ProjectCard from './ProjectCard'

export default function CreatedProjects() {
  return (
    <section className="mx-auto">
      <PinkText className="block text-4xl">Develop</PinkText>
      <Title className="mt-2">What shit I created?</Title>
      <div className="mt-12 grid grid-cols-2 gap-12">
        <ProjectCard
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat ipsum. Curabitur vel porttitor sapien.'
          }
          image={'/rocket.svg'}
          link={'https://github.com'}
          title={'ScanningWorld App'}
        />
        <ProjectCard
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat ipsum. Curabitur vel porttitor sapien.'
          }
          image={'/rocket.svg'}
          link={'https://github.com'}
          title={'ScanningWorld App'}
        />
        <ProjectCard
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat ipsum. Curabitur vel porttitor sapien.'
          }
          image={'/rocket.svg'}
          link={'https://github.com'}
          title={'ScanningWorld App'}
        />
        <ProjectCard
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat ipsum. Curabitur vel porttitor sapien.'
          }
          image={'/rocket.svg'}
          link={'https://github.com'}
          title={'ScanningWorld App'}
        />
      </div>
    </section>
  )
}
