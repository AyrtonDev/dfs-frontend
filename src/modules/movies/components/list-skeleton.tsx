import { Skeleton } from "@/shared/components/ui/skeleton"

export const ListSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton className="h-44 w-full" key={i} />
      ))}
    </div>
  )
}
