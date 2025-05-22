
import { Button } from "@/components/ui/button";

interface SubmissionFiltersProps {
  filter: "all" | "unread" | "read" | "archived";
  setFilter: (filter: "all" | "unread" | "read" | "archived") => void;
}

export const SubmissionFilters = ({ filter, setFilter }: SubmissionFiltersProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={filter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "unread" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("unread")}
        className={filter === "unread" ? "bg-amber-500 hover:bg-amber-600" : ""}
      >
        Unread
      </Button>
      <Button
        variant={filter === "read" ? "default" : "outline"}
        size="sm" 
        onClick={() => setFilter("read")}
      >
        Read
      </Button>
      <Button
        variant={filter === "archived" ? "default" : "outline"}
        size="sm"
        onClick={() => setFilter("archived")}
      >
        Archived
      </Button>
    </div>
  );
};
