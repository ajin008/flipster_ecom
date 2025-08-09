"use client";
import { Skeleton } from "@/components/ui/skeleton";

export function ListingSkeleton() {
  return (
    <div className="border p-4 rounded-lg shadow">
      <Skeleton className="h-40 w-full rounded" />
      <Skeleton className="h-5 w-3/4 mt-4" />
      <Skeleton className="h-4 w-1/2 mt-2" />
      <Skeleton className="h-5 w-1/4 mt-2" />
      <Skeleton className="h-4 w-1/3 mt-2" />
      <div className="flex gap-2 mt-4">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
      </div>
    </div>
  );
}
