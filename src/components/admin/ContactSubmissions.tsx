
import { useState, useEffect } from "react";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, Trash2, CheckCircle, AlertCircle } from "lucide-react";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  status: "read" | "unread" | "archived";
}

export const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filter, setFilter] = useState<"all" | "unread" | "read" | "archived">("all");
  
  useEffect(() => {
    // Load submissions from localStorage
    const loadSubmissions = () => {
      const storedSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
      setSubmissions(storedSubmissions);
    };
    
    loadSubmissions();
    
    // Set up an interval to refresh data every 30 seconds
    const interval = setInterval(loadSubmissions, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  const markAsRead = (id: string) => {
    const updatedSubmissions = submissions.map(submission => 
      submission.id === id ? { ...submission, status: "read" } : submission
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));
  };
  
  const archiveSubmission = (id: string) => {
    const updatedSubmissions = submissions.map(submission => 
      submission.id === id ? { ...submission, status: "archived" } : submission
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));
  };
  
  const deleteSubmission = (id: string) => {
    const updatedSubmissions = submissions.filter(submission => submission.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));
  };
  
  const filteredSubmissions = filter === "all" 
    ? submissions 
    : submissions.filter(submission => submission.status === filter);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <Mail className="h-5 w-5 text-spa-blue" />
            <span>Contact Form Submissions</span>
          </h3>
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
        </div>
        
        {filteredSubmissions.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Mail className="h-12 w-12 mx-auto mb-4 opacity-20" />
            <p>No contact submissions to display</p>
          </div>
        ) : (
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
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id} className={submission.status === "unread" ? "bg-blue-50" : ""}>
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
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};
