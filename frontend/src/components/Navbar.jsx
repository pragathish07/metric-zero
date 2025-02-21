import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center shadow">
      <div className="font-semibold text-lg">Dashboard</div>
      <Link href="/invite-admin">
          <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Invite Admin User</button>
      </Link>
      <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
        <UserButton />
      </div>
    </header>
  );
};

export default Navbar;
