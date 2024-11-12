// components/BlogCard.js
import { Card, Skeleton } from "@nextui-org/react";

export default function BlogCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-[#1a1c2a] p-6 space-y-5 rounded-lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-[#2d2f45] animate-pulse"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-[#3e405a] animate-pulse"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-[#3e405a] animate-pulse"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-[#2d2f45] animate-pulse"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
