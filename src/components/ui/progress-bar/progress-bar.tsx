interface ProgressBarProps {
  label: string
  percentage: number
}

const ProgressBar = ({ label, percentage }: ProgressBarProps) => {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground">{label}</span>
        <span className="text-subtle">{percentage}%</span>
      </div>
      <div className="h-[2px] w-full overflow-hidden bg-muted">
        <div
          className="h-full bg-brand-gradient"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
