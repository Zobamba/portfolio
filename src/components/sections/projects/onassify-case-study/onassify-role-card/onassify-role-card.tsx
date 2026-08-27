import { FiCheck } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import { myRole } from '@/src/data/onassify-case-study'

const OnassifyRoleCard = () => {
  return (
    <Card className="p-5 border-none bg-inherit">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <myRole.icon size={17} />
        </span>
        <h2 className="font-semibold text-foreground">{myRole.title}</h2>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {myRole.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <FiCheck className="mt-0.5 shrink-0 text-primary" size={15} />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default OnassifyRoleCard
