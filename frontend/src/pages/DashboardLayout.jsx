
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

const DashboardLayout = () => {

  useEffect(() => {
    console.log("Dashboard Component Loaded!");
  }, []);
  
  return (

    
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-300 flex flex-col">
        <Navbar />
        <section className="flex-1 flex items-center justify-center p-6">
          <Outlet /> {/* This will render different pages inside the dashboard */}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
