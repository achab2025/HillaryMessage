
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail } from "lucide-react";
import { SubmissionItem } from "./SubmissionItem";
import { ContactSubmission } from "./types";

interface SubmissionsTableProps {
  submissions: ContactSubmission[];
  markAsRead: (id: string) => void;
  archiveSubmission: (id: string) => void;
  deleteSubmission: (id: string) => void;
  formatDate: (dateString: string) => string;
}

export const SubmissionsTable = ({
  submissions,
  markAsRead,
  archiveSubmission,
  deleteSubmission,
  formatDate
}: SubmissionsTableProps) => {
  if (submissions.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Mail className="h-12 w-12 mx-auto mb-4 opacity-20" />
        <p>No contact submissions to display</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.map((submission) => (
          <SubmissionItem
            key={submission.id}
            submission={submission}
            markAsRead={markAsRead}
            archiveSubmission={archiveSubmission}
            deleteSubmission={deleteSubmission}
            formatDate={formatDate}
          />
        ))}
      </TableBody>
    </Table>
  );
};
