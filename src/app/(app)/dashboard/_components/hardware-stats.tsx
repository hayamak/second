// src/app/(app)/dashboard/_components/hardware-stats.tsx

export function HardwareStats({ stats }: { stats: { name: string; count: number }[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-background px-4 py-6 sm:px-6 lg:px-8"
        >
          <p className="text-sm/6 font-medium text-muted-foreground">{stat.name}</p>
          <p className="mt-2 flex items-baseline gap-x-2">
            <span className="text-4xl font-semibold tracking-tight text-foreground">
              {stat.count}
            </span>
            <span className="text-sm text-muted-foreground">台</span>
          </p>
        </div>
      ))}
    </div>
  )
}
