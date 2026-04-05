import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  offset: number;
  limit: number;
  total: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export function PaginationControls({
  offset,
  limit,
  total,
  onNextPage,
  onPreviousPage,
}: PaginationControlsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Showing {Math.min(offset + 1, total)} to {Math.min(offset + limit, total)} of {total} results
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPreviousPage}
          disabled={offset === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNextPage}
          disabled={offset + limit >= total}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
