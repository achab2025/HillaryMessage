
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="wave-animation absolute inset-0 z-0"></div>
      
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen z-10 px-4">
        <div className="w-full max-w-md animate-fade-in">
          <Link to="/" className="flex items-center justify-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-gray-800">Serene Touch</h1>
          </Link>
          
          <Card className="backdrop-blur-md bg-white/80 border-none shadow-2xl">
            <CardHeader className="space-y-3">
              <CardTitle className="text-3xl font-playfair text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center text-base">
                Sign in to your wellness journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-spa-blue hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-spa-blue to-spa-teal hover:opacity-90 transition-all duration-300" 
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 text-center">
              <div className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-spa-blue hover:underline font-medium">
                  Create an account
                </Link>
              </div>
              <div className="text-xs text-muted-foreground">
                <p>Demo credentials</p>
                <p>User: user@example.com / password</p>
                <p>Admin: admin@example.com / admin</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
