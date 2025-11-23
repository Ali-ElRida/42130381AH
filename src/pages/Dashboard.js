import React from "react";
import { useAuth } from "../hooks/AuthContext";
import AppointmentCard from "../components/AppointmentCard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user,logout } = useAuth();
  const navigate = useNavigate();

  const fakeQueuePosition = 12;
  const fakeRemainingTime = "45 min";
  const fakeStatus = "Under Review";
  const fakeMissingDocs = ["ID picture is not clear", "The record is missing"];
  const hasMissing = fakeMissingDocs.length > 0;

  const handleUploadClick = () => {
    navigate("/upload-docs");
  }

  const handleLogout = () => {
    logout();          // clear user and auth state
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      <div className="w-full bg-white shadow-md p-4 rounded-2xl mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        <p className="text-lg text-gray-700">
          Welcome, <span className="font-semibold">{user?.fullName}</span>
        </p>
        <p className="text-gray-500">Here is your application overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl hover:scale-[1.02] duration-300">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Waiting Queue Position</h2>
          <p className="text-gray-700 font-semibold">{fakeQueuePosition} people before you</p>
          <p className="text-gray-600 mt-1">Estimated Time: {fakeRemainingTime}</p>
          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
            View Result
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl hover:scale-[1.02] duration-300">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Application Status</h2>
          <p className="text-gray-700 font-semibold">{fakeStatus}</p>
          <p className="text-sm text-gray-500 mt-2">Possible statuses: Complete, Lack of Papers, Under Review, Popular, Unacceptable</p>
        </div>


        <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl hover:scale-[1.02] duration-300">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Missing Documents</h2>
          {hasMissing ? (
            <ul className="list-disc ml-5 text-red-600">
              {fakeMissingDocs.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600 font-semibold">No missing documents</p>
          )}
        </div>
      </div>

      <AppointmentCard
        date="2025-11-25"
        time="10:00 AM"
        location="Main Office"
        status="Upcoming"
      />

      <button
        onClick={handleUploadClick}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Upload Files
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition ml-10"
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;


