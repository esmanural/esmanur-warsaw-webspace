
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, EyeOff, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthenticationProps {
  onAuthenticated: () => void;
}

const Authentication = ({ onAuthenticated }: AuthenticationProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === "War$aw!") {
      toast({
        title: "Welcome, friend! 💕",
        description: "Access granted to the friends-only section.",
      });
      onAuthenticated();
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Only friends know the secret!",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fdf2f8" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-2xl border-0 relative z-10">
        <CardHeader className="text-center pb-2">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-stone-800 mb-2">
            Friends Only Area
          </CardTitle>
          <p className="text-stone-600 text-sm">
            This section contains personal memories and moments shared with close friends and family.
          </p>
        </CardHeader>
        
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-stone-700">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter the secret password..."
                  className="pr-10 border-stone-200 focus:border-pink-300 focus:ring-pink-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Enter Friends Zone
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-pink-50 rounded-lg">
            <p className="text-xs text-stone-600 text-center">
              💡 Hint: The password is related to the city where Esmanur lives, with some special characters for security!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Authentication;
