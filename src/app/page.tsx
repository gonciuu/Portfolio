import CreatedProjects from '@/components/CreatedProjects/CreatedProjects'
import Header from '@/components/Header/Header'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <Header />
      <CreatedProjects />
    </div>
  )
}
