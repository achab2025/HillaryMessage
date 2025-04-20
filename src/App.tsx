
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Booking from "./pages/Booking";
import PublicBooking from "./pages/PublicBooking";
import NotFound from "./pages/NotFound";

// Create auth context
export const AuthContext = createContext<{
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

// User type
export type User = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

const queryClient = new QueryClient();

const App = () => {
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Auth functions
  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    // In a real app, you'd store tokens in localStorage or cookies
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  // Check for saved login on app startup
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (err) {
        // Handle invalid stored data
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/book-now" element={<PublicBooking />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
