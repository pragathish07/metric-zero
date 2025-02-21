import { useState, useEffect } from "react";

const InviteAdmin = () => {
  const [email, setEmail] = useState("");
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch admin users (dummy data for now)
    setAdmins([
      { name: "Lindsey Stroud", email: "lindsey.stroud@metricszero.com", role: "Admin" },
      { name: "Sarah Browen", email: "sarah.brown@metricszero.com", role: "Admin" },
      { name: "Micael Owen", email: "michael.owen@gmail.com", role: "Admin" },
    ]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/invite-admin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Invitation sent successfully!");
        setEmail("");
        setShowModal(false);
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <ul className="mt-4">
          <li className="text-gray-600 font-semibold">Admin Users</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-300 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Admin Users</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Invite Admin User
          </button>
        </div>

        {/* Table */}
        <div className="bg-white mt-4 p-4 rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Email Address</th>
                <th className="text-left p-2">Role</th>
                <th className="text-left p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{admin.name}</td>
                  <td className="p-2">{admin.email}</td>
                  <td className="p-2">{admin.role}</td>
                  <td className="p-2 text-red-500 cursor-pointer">❌</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Admin Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Invite an Admin</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border rounded w-full"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Send Invite
                </button>
              </div>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteAdmin;
