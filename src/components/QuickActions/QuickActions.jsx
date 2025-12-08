import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h3 className="font-semibold text-lg mb-4 text-gray-900">
        Quick Actions
      </h3>

      <div className="flex flex-col md:flex-row gap-3 items-center">
        <button
          className="bg-[#2BED8C] hover:bg-emerald-500 text-[#121714] px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm w-full md:w-auto"
          onClick={() => navigate("/chat")}
        >
          Chat with AI Therapist
        </button>
        <button className="hover:bg-gray-50 text-black px-6 py-2.5 rounded-md font-medium text-sm transition-colors bg-[#F0F5F2] w-full md:w-auto">
          Mood Check-in
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
