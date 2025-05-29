
import { useState, useEffect } from "react";
import Authentication from "@/components/Authentication";
import Friends from "@/components/Friends";

const FriendsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user was previously authenticated in this session
    const wasAuthenticated = sessionStorage.getItem('friendsAuthenticated') === 'true';
    setIsAuthenticated(wasAuthenticated);
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('friendsAuthenticated', 'true');
  };

  if (!isAuthenticated) {
    return <Authentication onAuthenticated={handleAuthenticated} />;
  }

  return <Friends />;
};

export default FriendsPage;
