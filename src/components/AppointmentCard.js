import React from "react";
import { Clock, MapPin, CheckCircle } from "lucide-react"; 

function AppointmentCard({ date, time, location, status }) {

  let statusColor = "bg-gray-200 text-gray-800";
  if (status.toLowerCase() === "upcoming") statusColor = "bg-blue-100 text-blue-700";
  if (status.toLowerCase() === "completed") statusColor = "bg-green-100 text-green-700";
  if (status.toLowerCase() === "canceled") statusColor = "bg-red-100 text-red-700";

  return (
    <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl hover:scale-[1.02] duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{status}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor}`}>
          {status}
        </span>
      </div>

      <div className="space-y-2 text-gray-700">
        <p className="flex items-center gap-2">
          <Clock size={16} /> {time} on {date}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={16} /> {location}
        </p>
      </div>
    </div>
  );
}

export default AppointmentCard;
