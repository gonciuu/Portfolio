import Button from '../(common)/Button'
import Flex from '../(common)/Flex'

export default function Footer() {
  return (
    <div>
      <Button className="mx-auto mt-24" size="sm" variant="outlined">
        <Flex>Back to top 👆</Flex>
      </Button>
    </div>
  )
}
