import Button from '../(common)/Button'
import Flex from '../(common)/Flex'
import PinkText from '../(common)/PinkText'
import ShakeHand from '../(common)/ShakeHand'
import Title from '../(common)/Title'

import SocialGrid from './SocialGrid'

export default function Contact() {
  return (
    <section className="mx-auto py-12" id="contact">
      <PinkText className="block">Get In Touch</PinkText>
      <Title className="mt-2">Contact</Title>
      <Flex className="mt-8 flex-col items-start space-y-8 rounded-2xl bg-sweety-gray-900 px-4 py-6 md:flex-row md:items-center md:space-x-4 md:space-y-0 md:px-8">
        <div className="w-full flex-1">
          <Title className="text-start text-2xl font-bold sm:text-3xl md:text-5xl md:leading-[1.2]">
            Thanks for watching. <br />
            Contact me chosen way.
          </Title>
          <h5 className="mt-4 max-w-md text-lg text-sweety-gray-200 sm:text-xl">
            You can find me on my linkedin, github, send me an email. Whatever you want.
          </h5>
          <Button className="mt-8 w-full md:w-auto" size="sm" url="mailto:kacperwojak17@gmail.com">
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
