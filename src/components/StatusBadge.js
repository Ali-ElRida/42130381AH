import React from "react";

function StatusBadge({ status = "" }) {
  const normalizedStatus = status.toLowerCase();

  const statusStyles = {
    "complete": { bg: "bg-green-100", text: "text-green-700" },
    "under review": { bg: "bg-yellow-100", text: "text-yellow-700" },
    "lack of papers": { bg: "bg-red-100", text: "text-red-700" },
    "popular": { bg: "bg-blue-100", text: "text-blue-700" },
    "unacceptable": { bg: "bg-purple-100", text: "text-purple-700" },
  };

  const { bg, text } = statusStyles[normalizedStatus] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${bg} ${text}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
