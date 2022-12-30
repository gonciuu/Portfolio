import Button from '../(common)/Button'
import Flex from '../(common)/Flex'
import PinkText from '../(common)/PinkText'
import ShakeHand from '../(common)/ShakeHand'

export default function Header() {
  return (
    <header className="relative flex h-screen flex-col items-center justify-center text-white">
      <div className="absolute z-[-1] rounded-full opacity-20 blur-3xl">
        <div className="h-60 w-60 rounded-full bg-gradient-radial from-sweety-pink-500 to-sweety-purple-300 " />
      </div>
      <h1 className="text-center text-4xl font-extrabold leading-[1.3] sm:text-5xl md:text-7xl">
        Nothing will <PinkText>work</PinkText>
        <br />
        unless you do.
      </h1>
      <h5 className="mt-8 max-w-xl text-center text-lg text-sweety-gray-200 sm:text-xl">
        Lorem ipsum <b>dolor</b> sit amet, consectetur adipiscing elit. Donec porttitor, urna sit
        amet fermentum gravida, elit elit dictum purus.
      </h5>
      <Button className="group mt-16 duration-200">
        <Flex>
          <span className="mr-2">Say Hello!</span>
          <ShakeHand />
        </Flex>
      </Button>
    </header>
  )
}
