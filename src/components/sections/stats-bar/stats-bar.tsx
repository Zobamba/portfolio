import { stats } from '@/src/data/stats'
import Card from '@/src/components/ui/card/card'
import StatItem from '@/src/components/sections/stats-bar/stat-item/stat-item'
import Container from '@/src/components/ui/container/container'

const StatsBar = () => {
  return (
    <Container className="pb-16">
      <Card className="grid grid-cols-2 gap-8 bg-surface p-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </Card>
    </Container>
  )
}

export default StatsBar
