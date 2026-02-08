import { cn } from "@/lib/utils"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-gray-200/50", className)}
            {...props}
        />
    )
}

function CardSkeleton() {
    return (
        <div className="flex flex-col space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                <Skeleton className="h-full w-full" />
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20"></div> {/* Branding hint */}
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export { Skeleton, CardSkeleton }
