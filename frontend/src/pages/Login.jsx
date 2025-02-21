import { SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <SignedOut>
        <SignIn />
      </SignedOut>

      
    </div>
  );
};

export default Login;