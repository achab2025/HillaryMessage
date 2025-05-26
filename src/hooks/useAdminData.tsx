
import { useState, useEffect } from "react";

// Mock data for appointments
const mockAppointments = [
  {
    id: "1",
    client: "John Doe",
    service: "Deep Tissue Massage",
    date: "2025-04-20",
    time: "14:00",
    duration: 60,
    therapist: "Jane Smith",
    status: "confirmed"
  },
  {
    id: "2",
    client: "Alice Johnson",
    service: "Swedish Massage",
    date: "2025-04-20",
    time: "10:30",
    duration: 90,
    therapist: "Michael Johnson",
    status: "confirmed"
  },
  {
    id: "3",
    client: "Robert Brown",
    service: "Hot Stone Therapy",
    date: "2025-04-21",
    time: "16:00",
    duration: 60,
    therapist: "Sarah Williams",
    status: "pending"
  },
  {
    id: "4",
    client: "Emma Wilson",
    service: "Aromatherapy Massage",
    date: "2025-04-21",
    time: "13:00",
    duration: 60,
    therapist: "Jane Smith",
    status: "confirmed"
  }
];

// Mock data for customers
const mockCustomers = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "555-1234", appointments: 8 },
  { id: "2", name: "Alice Johnson", email: "alice@example.com", phone: "555-5678", appointments: 4 },
  { id: "3", name: "Robert Brown", email: "robert@example.com", phone: "555-9012", appointments: 2 },
  { id: "4", name: "Emma Wilson", email: "emma@example.com", phone: "555-3456", appointments: 6 },
];

export const useAdminData = () => {
  const [appointments, setAppointments] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [contactCount, setContactCount] = useState(0);

  // Load appointments and customers
  useEffect(() => {
    setAppointments(mockAppointments);
    setCustomers(mockCustomers);
  }, []);

  // Load contact submissions count
  useEffect(() => {
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    const unreadSubmissions = submissions.filter(sub => sub.status === "unread");
    setContactCount(unreadSubmissions.length);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredAppointments = appointments.filter(appointment => 
    appointment.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    appointments,
    customers,
    searchTerm,
    setSearchTerm,
    contactCount,
    formatDate,
    filteredAppointments,
    filteredCustomers
  };
};
