import Button from '../(common)/Button'
import Flex from '../(common)/Flex'
import PinkText from '../(common)/PinkText'
import ShakeHand from '../(common)/ShakeHand'
import Title from '../(common)/Title'

import SocialGrid from './SocialGrid'

export default function Contact() {
  return (
    <section className="mx-auto py-12">
      <PinkText className="block text-4xl">Get In Touch</PinkText>
      <Title className="mt-2">Contact</Title>
      <Flex className="mt-8 space-x-12 rounded-2xl bg-sweety-gray-900 px-10 py-5">
        <div className="flex-[2]">
          <Title className="text-start text-5xl font-bold">Thanks for watching.</Title>
          <Title className="text-start text-5xl font-bold">Contact me chosen way.</Title>
          <h5 className="mt-2 text-xl text-sweety-gray-200">
            You can find me on my linkedin, github, <br />
            send me an email. Whatever you want.
          </h5>
          <Button className="mt-8" size="sm" url="mailto:kacperwojak17@gmail.com">
            <Flex>
              <span className="mr-2">Send me a message</span>
              <ShakeHand />
            </Flex>
          </Button>
        </div>
        <SocialGrid />
      </Flex>
    </section>
  )
}
