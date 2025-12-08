import React from "react";
import { Wind, BookOpen } from "lucide-react";

const SavedItems = () => {
  return (
    <div className="bg-white p-6 rounded-xl ">
      <h3 className="font-semibold text-lg mb-4 text-[#121714]">Saved Items</h3>

      <div className="space-y-3">
        <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
          {/* <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Wind size={20} className="text-gray-700" />
          </div> */}
          <div
            className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <img src="assets/breath.png" alt="" />
          </div>
          <div>
            <p className="font-medium text-sm text-gray-900">
              Breathing Exercise
            </p>
            <p className="text-xs text-gray-500">Last Saved</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10  rounded-lg flex items-center justify-center flex-shrink-0 -ml-[7px]">
            <BookOpen size={20} className="text-gray-700" />
          </div>
          <div>
            <p className="font-medium text-sm text-gray-900">Journal Entry</p>
            <p className="text-xs text-gray-500">Last Entry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
