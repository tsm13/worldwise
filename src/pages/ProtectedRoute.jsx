import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  // since the useEffect hook only runs after the component has rendered, a validation is necessary to prevent null User properties!
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
