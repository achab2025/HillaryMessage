
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { SubmissionFilters } from "./contact/SubmissionFilters";
import { SubmissionsTable } from "./contact/SubmissionsTable";
import { ContactSubmission } from "./contact/types";

export const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filter, setFilter] = useState<"all" | "unread" | "read" | "archived">("all");
  
  useEffect(() => {
    // Load submissions from localStorage
    const loadSubmissions = () => {
      const storedSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
      // Type cast the submissions to ensure they conform to ContactSubmission type
      const typedSubmissions = storedSubmissions.map((sub: any) => ({
        ...sub,
        status: sub.status as "read" | "unread" | "archived"
      }));
      setSubmissions(typedSubmissions);
    };
    
    loadSubmissions();
    
    // Set up an interval to refresh data every 30 seconds
    const interval = setInterval(loadSubmissions, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  const markAsRead = (id: string) => {
    const updatedSubmissions = submissions.map(submission => 
      submission.id === id ? { ...submission, status: "read" as const } : submission
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem("contactSubmissions", JSON.stringify(updatedSubmissions));
  };
  
  const archiveSubmission = (id: string) => {
    const updatedSubmissions = submissions.map(submission => 
      submission.id === id ? { ...submission, status: "archived" as const } : submission
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
          <SubmissionFilters filter={filter} setFilter={setFilter} />
        </div>
        
        <SubmissionsTable 
          submissions={filteredSubmissions}
          markAsRead={markAsRead}
          archiveSubmission={archiveSubmission}
          deleteSubmission={deleteSubmission}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};
