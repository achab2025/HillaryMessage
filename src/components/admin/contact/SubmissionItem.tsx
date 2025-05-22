
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle, AlertCircle, Trash2, Clock } from "lucide-react";
import { ContactSubmission } from "./types";

interface SubmissionItemProps {
  submission: ContactSubmission;
  markAsRead: (id: string) => void;
  archiveSubmission: (id: string) => void;
  deleteSubmission: (id: string) => void;
  formatDate: (dateString: string) => string;
}

export const SubmissionItem = ({
  submission,
  markAsRead,
  archiveSubmission,
  deleteSubmission,
  formatDate
}: SubmissionItemProps) => {
  return (
    <TableRow className={submission.status === "unread" ? "bg-blue-50" : ""}>
      <TableCell className="font-medium">{submission.name}</TableCell>
      <TableCell>{submission.email}</TableCell>
      <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
      <TableCell className="whitespace-nowrap">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-muted-foreground" />
          {formatDate(submission.date)}
        </div>
      </TableCell>
      <TableCell>
        {submission.status === "unread" ? (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
            Unread
          </Badge>
        ) : submission.status === "read" ? (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
            Read
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
            Archived
          </Badge>
        )}
      </TableCell>
      <TableCell className="text-right space-x-1">
        {submission.status === "unread" && (
          <Button
            onClick={() => markAsRead(submission.id)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Mark as read</span>
            <CheckCircle className="h-4 w-4" />
          </Button>
        )}
        {submission.status !== "archived" && (
          <Button
            onClick={() => archiveSubmission(submission.id)}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <span className="sr-only">Archive</span>
            <AlertCircle className="h-4 w-4" />
          </Button>
        )}
        <Button
          onClick={() => deleteSubmission(submission.id)}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
        >
          <span className="sr-only">Delete</span>
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
