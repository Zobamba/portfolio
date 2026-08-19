import { HiOutlineStar } from 'react-icons/hi2'
import { whyWorkWithMe } from '@/src/data/why-work-with-me'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Reveal from '@/src/components/ui/reveal/reveal'
import WhyWorkWithMeItem from '@/src/components/sections/contact/why-work-with-me/why-work-with-me-item/why-work-with-me-item'

const WhyWorkWithMe = () => {
  return (
    <Card className="p-5">
      <CardHeader
        icon={HiOutlineStar}
        title="Why Work With Me?"
        subtitle="More than just code. I care about your success."
      />

      <div className="grid gap-3 sm:grid-cols-3">
        {whyWorkWithMe.map((item, index) => (
          <Reveal key={item.title} delay={index * 80} className="h-full">
            <WhyWorkWithMeItem item={item} />
          </Reveal>
        ))}
      </div>
    </Card>
  )
}

export default WhyWorkWithMe
