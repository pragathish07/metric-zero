import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider, SignedIn, SignIn,SignedOut, useUser } from '@clerk/clerk-react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';


// Replace with your actual Clerk publishable key from your Clerk dashboard.
const clerkPublishableKey = "pk_test_YWJzb2x1dGUtcGlyYW5oYS0xOS5jbGVyay5hY2NvdW50cy5kZXYk"


const LoginPage = () => {
  const { isSignedIn } = useUser(); 

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [isSignedIn]);
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
};


const App = () => (
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
  </ClerkProvider>
);

const container = document.getElementById('login-root');
if (container) {
  createRoot(container).render(<App />);
}
