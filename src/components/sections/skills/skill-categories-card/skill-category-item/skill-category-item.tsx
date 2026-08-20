import { skillLevels } from '@/src/data/skill-levels'
import { hexToRgba } from '@/src/lib/utils'
import type { SkillCategoryItem as SkillCategoryItemType } from '@/src/data/skill-categories'

interface SkillCategoryItemProps {
  category: SkillCategoryItemType
}

const SkillCategoryItem = ({ category }: SkillCategoryItemProps) => {
  const level = skillLevels[category.level]

  return (
    <div className="group flex h-full flex-col items-center rounded-lg border border-border p-3 text-center transition-all duration-300 ease-signature hover:-translate-y-[3px] hover:border-primary/40">
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-deepest">
        <span
          className="absolute inset-0 rounded-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${hexToRgba(category.glowColor, 0.18)} 0%, ${hexToRgba(category.glowColor, 0.06)} 35%, transparent 70%)`,
          }}
        />
        <span
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ease-signature group-hover:opacity-100"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${hexToRgba(category.glowColor, 0.18)} 0%, ${hexToRgba(category.glowColor, 0.06)} 35%, transparent 70%)`,
          }}
        />
        <category.icon className="relative" size={18} style={{ color: category.glowColor }} />
      </span>
      <p className="mt-2 text-xs font-semibold leading-tight text-foreground">{category.name}</p>
      <p className="mt-1 text-lg font-bold text-foreground">{category.count}</p>
      <p className="text-[10px] text-muted-foreground">Technologies</p>
      <span
        className="mt-1.5 rounded px-2 py-0.5 text-[10px] font-medium"
        style={{ color: level.dotColor, backgroundColor: `color-mix(in srgb, ${level.dotColor} 15%, transparent)` }}
      >
        {category.level}
      </span>
    </div>
  )
}

export default SkillCategoryItem
