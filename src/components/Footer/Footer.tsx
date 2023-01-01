'use client'
import Button from '../(common)/Button'
import Flex from '../(common)/Flex'

export default function Footer() {
  return (
    <div>
      <Button
        className="mx-auto mt-24"
        size="sm"
        variant="outlined"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        <Flex>Back to top 👆</Flex>
      </Button>
      <Flex className="justify-between pt-12 pb-4">
        <p className="text-sweety-gray-200">&#169; Kacper Wojak, 2023</p>
        <p className="text-center text-sweety-gray-200">Made with ❤️</p>
      </Flex>
    </div>
  )
}
