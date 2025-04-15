
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // In a real app, you would call an API endpoint here
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login for demo purposes
      if (email === "user@example.com" && password === "password") {
        login({
          id: "1",
          name: "John Doe",
          email: "user@example.com",
          isAdmin: false
        });
        navigate("/dashboard");
      } else if (email === "admin@example.com" && password === "admin") {
        login({
          id: "2",
          name: "Admin User",
          email: "admin@example.com",
          isAdmin: true
        });
        navigate("/admin");
      } else {
        setError("Invalid credentials. Try user@example.com/password or admin@example.com/admin");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background */}
      <div className="wave-animation absolute inset-0 z-0"></div>
      
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen z-10 px-4">
        <div className="w-full max-w-md animate-fade-in">
          <Link to="/" className="flex items-center justify-center mb-8">
            <h1 className="text-3xl font-bold text-white">Serene Touch</h1>
          </Link>
          
          <Card className="bg-white/90 backdrop-blur-sm border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-primary underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && (
                    <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-sm text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-4 text-center text-white/70 text-sm">
            <p>Demo credentials</p>
            <p>User: user@example.com / password</p>
            <p>Admin: admin@example.com / admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
