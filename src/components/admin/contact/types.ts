
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  status: "read" | "unread" | "archived";
}
