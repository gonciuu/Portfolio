interface Props {
  href: string
  children: React.ReactNode
}

export default function MenuItem({ href, children }: Props) {
  return (
    <button
      className="font-semibold text-white/75 duration-200 hover:text-white"
      onClick={() => {
        // scroll into view of the element with the id of the href
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      {children}
    </button>
  )
}
