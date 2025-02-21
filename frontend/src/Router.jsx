import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

import DashboardLayout from "./pages/DashboardLayout";
import Onboarding from "./pages/Onboarding";
import Settings from "./pages/Dashboard/Settings";
import Reports from "./pages/Dashboard/Report";
import Home from "./pages/Dashboard/Home";
import { useEffect, useState } from "react";
import InviteAdmin from "./pages/InviteAdmin";

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  const [isOnboarded, setIsOnboarded] = useState(null);

  useEffect(() => {
    if (user?.id) {
      const onboarded = localStorage.getItem("onboarded") === "true";
      setIsOnboarded(onboarded);
    }
  }, [user?.id]);
  
  

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isOnboarded === null) {
    return null; // Loading state or spinner
  }

  return isOnboarded ? children : <Navigate to="/onboarding" replace />;
};

const Router = () => {
  return (
    <Routes>

    <Route
        path="/"
        element={
         <>Main App</>
        }
        />   
      <Route
        path="/onboarding"
        element={
          <>
          <SignedIn>
            <Onboarding />
          </SignedIn>
          <SignedOut>
            <Navigate to="/login" replace />
          </SignedOut>
        </>
        }
      />
       <Route
        path="/invite-admin"
        element={
          <>
          <SignedIn>
            <InviteAdmin />
          </SignedIn>
          <SignedOut>
            <Navigate to="/login" replace />
          </SignedOut>
        </>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <>
          <SignedIn>
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          </SignedIn>
          <SignedOut> 
            <Navigate to="/login" replace />
          </SignedOut>
        </>
        }
      >

        
        {
        /* Nested Routes for Dashboard Pages */}
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="report" element={<Reports />} />   {/* ✅ Report Page */}

      </Route>
      <Route path="*" element={<DashboardLayout/>} />
    </Routes>
  );
};

export default Router;
