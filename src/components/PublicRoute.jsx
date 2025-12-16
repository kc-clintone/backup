import LoaderPage from "@/pages/shared/LoaderPage";
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <>
        <LoaderPage />
      </>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
