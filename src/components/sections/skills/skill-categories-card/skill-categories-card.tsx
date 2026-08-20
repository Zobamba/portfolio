import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { skillCategories } from '@/src/data/skill-categories'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Reveal from '@/src/components/ui/reveal/reveal'
import SkillCategoryItem from '@/src/components/sections/skills/skill-categories-card/skill-category-item/skill-category-item'

const SkillCategoriesCard = () => {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <CardHeader
          icon={HiOutlineSquares2X2}
          title="Skill Categories"
          subtitle="Technologies grouped by area of expertise"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {skillCategories.map((category, index) => (
          <Reveal key={category.name} delay={index * 60} distance={12} className="h-full">
            <SkillCategoryItem category={category} />
          </Reveal>
        ))}
      </div>
    </Card>
  )
}

export default SkillCategoriesCard
