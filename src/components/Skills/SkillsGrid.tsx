import BikeRide from './Cards/BikeRide'
import CommercialExperience from './Cards/CommercialExperience'
import CreatedProjects from './Cards/CreatedProjects'
import MultiplatformApps from './Cards/MultiplatformApps'
import NpmLibraries from './Cards/NpmLibraries'
import OpenMinded from './Cards/OpenMinded'
import TechnologyStack from './Cards/TechnologyStack/TechnologyStack'
import UiDesign from './Cards/UiDesign'
import VideoEditing from './Cards/VideoEditing'
import ContactCard from './common/ContactCard'

export default function SkillsGrid() {
  return (
    <div className="mt-8 grid auto-rows-min  grid-cols-12 gap-4">
      <TechnologyStack />
      <CreatedProjects />
      <BikeRide />
      <NpmLibraries />
      <UiDesign />
      <ContactCard
        image={'/rocket.svg'}
        textClassName="bg-gradient-to-b from-sweety-orange-100 to-sweety-orange-400 bg-clip-text text-transparent"
        title={'github'}
        url={'https  ://google.com'}
      />
      <ContactCard
        image={'/rocket.svg'}
        textClassName="bg-gradient-to-b from-sweety-orange-100 to-sweety-orange-400 bg-clip-text text-transparent"
        title={'github'}
        url={'https  ://google.com'}
      />
      <OpenMinded />
      <ContactCard
        image={'/rocket.svg'}
        textClassName="bg-gradient-to-b from-sweety-orange-100 to-sweety-orange-400 bg-clip-text text-transparent"
        title={'github'}
        url={'https  ://google.com'}
      />
      <VideoEditing />
      <CommercialExperience />
      <MultiplatformApps />
    </div>
  )
}
