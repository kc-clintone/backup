import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-9xl sm:text-[12rem] font-extrabold text-red-600 mb-6">
        404
      </h1>

      <p className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
        Oops!, That Page Does Not Exist
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-red-600 rounded-full font-medium hover:bg-red-500 transition"
      >
        Back to home
      </button>
    </div>
  );
}

export default NotFoundPage;
