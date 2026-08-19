import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { techCategories } from '@/src/data/tech-categories'
import CardHeader from '@/src/components/ui/card/card-header'
import TechCategory from '@/src/components/sections/about/tech-stack-tools/tech-category/tech-category'

const TechStackTools = () => {
  return (
    <div>
      <CardHeader
        icon={HiOutlineCodeBracket}
        title="Tech Stack & Tools"
        subtitle="Technologies I work with to bring ideas to life."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {techCategories.map((category) => (
          <TechCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  )
}

export default TechStackTools
