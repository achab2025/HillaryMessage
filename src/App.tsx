import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import PublicBooking from "./pages/PublicBooking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAppointments from "./pages/admin/AdminAppointments";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminFinances from "./pages/admin/AdminFinances";
import AdminContact from "./pages/admin/AdminContact";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";
import "./App.css";

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

// Mock users for demonstration
const mockUsers = [
  { id: "1", email: "user@example.com", isAdmin: false },
  { id: "2", email: "admin@example.com", isAdmin: true }
];

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {}
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/book" element={<PublicBooking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/appointments" element={<AdminAppointments />} />
            <Route path="/admin/customers" element={<AdminCustomers />} />
            <Route path="/admin/contact" element={<AdminContact />} />
            <Route path="/admin/finances" element={<AdminFinances />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export { AuthContext };
export default App;
