import Flex from '@/components/(common)/Flex'

type Props = {
  technology: string
  progress: number
  link: string
  experience: string
  number: number
}

export default function TechnologyProgress({}: Props) {
  return (
    <Flex className="w-full justify-between rounded-lg bg-sweety-gray-800">
      <Flex className="w-1/2 rounded-lg  bg-gradient-to-b  from-sweety-blue-500 to-sweety-blue-600 p-[6px]">
        <Flex className="flex h-8 w-8 justify-center rounded-full border-2 border-white/50 font-bold text-white">
          1
        </Flex>
        <a className="ml-2 text-sm font-semibold text-white" href="https://google.com">
          React
        </a>
      </Flex>
      <div className="text-center">
        <div className="px-3 text-sm font-semibold text-white">2.5y</div>
        <div className="px-3 text-xs font-normal text-sweety-gray-100">Exp</div>
      </div>
    </Flex>
  )
}
