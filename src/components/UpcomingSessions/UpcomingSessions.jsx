import React from "react";
import { Calendar } from "lucide-react";

const UpcomingSessions = () => {
  return (
    <div className="bg-white p-6 rounded-xl ">
      <h3 className="font-semibold text-lg mb-4 text-[#121714]">
        Upcoming Sessions
      </h3>

      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Calendar size={20} className="text-gray-700" />
        </div>
        <div>
          <p className="font-medium text-gray-900">Thursday, 2 PM</p>
          <p className="text-sm text-gray-500">Next Session</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Session Progress</span>
          <span className="font-semibold color-[#121714]">60%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gray-900 h-2.5 rounded-full transition-all"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSessions;
