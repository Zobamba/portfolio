'use client'

import { useState } from 'react'
import { HiOutlineBriefcase } from 'react-icons/hi2'
import { FiCheck } from 'react-icons/fi'
import { helpOptions } from '@/src/data/help-options'
import { hexToRgba, cn } from '@/src/lib/utils'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'

const HelpOptions = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <Card className="p-5">
      <CardHeader
        icon={HiOutlineBriefcase}
        title="What can I help you with?"
        subtitle="Select the option that best describes what you need."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {helpOptions.map((option) => {
          const isSelected = selected === option.label
          return (
            <button
              key={option.label}
              type="button"
              onClick={() => setSelected(isSelected ? null : option.label)}
              className={cn(
                'relative flex flex-col items-center gap-2 rounded-lg border p-3 text-center text-xs font-medium transition-all duration-200',
                isSelected ? 'text-foreground' : 'border-border text-muted-foreground hover:border-primary/40',
              )}
              style={
                isSelected
                  ? { borderColor: option.accentColor, backgroundColor: hexToRgba(option.accentColor, 0.06) }
                  : undefined
              }
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-shadow duration-200"
                style={{
                  backgroundColor: hexToRgba(option.accentColor, 0.15),
                  color: option.accentColor,
                  boxShadow: isSelected ? `0 0 12px ${hexToRgba(option.accentColor, 0.5)}` : undefined,
                }}
              >
                <option.icon size={16} />
              </span>
              {option.label}

              <span
                className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-200 ease-signature"
                style={{
                  backgroundColor: option.accentColor,
                  transform: isSelected ? 'scale(1)' : 'scale(0.8)',
                  opacity: isSelected ? 1 : 0,
                }}
              >
                <FiCheck size={12} />
              </span>
            </button>
          )
        })}
      </div>
    </Card>
  )
}

export default HelpOptions
