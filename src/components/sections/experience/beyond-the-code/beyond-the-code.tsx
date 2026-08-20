import { TbHeartbeat } from 'react-icons/tb'
import { beyondTheCode } from '@/src/data/beyond-the-code'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import BeyondTheCodeItem from '@/src/components/sections/experience/beyond-the-code/beyond-the-code-item/beyond-the-code-item'

const BeyondTheCode = () => {
  return (
    <Card className="p-5">
      <CardHeader
        icon={TbHeartbeat}
        title="Beyond the Code"
        subtitle="What drives me outside of writing code."
      />

      <div className="grid gap-3 sm:grid-cols-3">
        {beyondTheCode.map((item) => (
          <BeyondTheCodeItem key={item.title} item={item} />
        ))}
      </div>
    </Card>
  )
}

export default BeyondTheCode
