import { HiOutlineUserCircle } from 'react-icons/hi2'
import { whatIDo } from '@/src/data/what-i-do'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Reveal from '@/src/components/ui/reveal/reveal'
import WhatIDoItem from '@/src/components/sections/experience/what-i-do/what-i-do-item/what-i-do-item'

const WhatIDo = () => {
  return (
    <Card className="p-5">
      <CardHeader
        icon={HiOutlineUserCircle}
        title="What I Do"
        subtitle="Areas where I add value and solve real-world problems."
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {whatIDo.map((item, index) => (
          <Reveal key={item.title} delay={index * 60} className="h-full">
            <WhatIDoItem item={item} />
          </Reveal>
        ))}
      </div>
    </Card>
  )
}

export default WhatIDo
