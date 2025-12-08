import React from "react";

const WellnessOverview = () => {
  return (
    <div className=" p-6 rounded-xl -mt-[30px] ">
      <div className="flex gap-4 items-center">
        <img
          src="/assets/admin.png"
          alt="Sophia"
          className="w-[50px] h-[50px]  opacity-100 rounded-[64px] "
        />
        <div>
          <p className="font-semibold text-[#121714]">
            Sophia
          </p>
          <p className="text-sm text-[#618A75]">
            Current Status: Balanced
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[40px]">
        <div className="border border-[#DBE5E0] p-6 rounded-lg space-y-2">
          <p className="text-xs text-[#121714]">Stress Level</p>
          <p className="text-xl font-semibold text-[#121714]">Low</p>
        </div>
        <div className="border border-[#DBE5E0] p-6 rounded-lg space-y-2">
          <p className="text-xs text-[#121714]">Anxiety Score</p>
          <p className="text-xl font-semibold text-[#121714]">Moderate</p>
        </div>
        <div className="border border-[#DBE5E0] p-6 rounded-lg space-y-2">
          <p className="text-xs text-[#121714]">Mood Score</p>
          <p className="text-xl font-semibold text-[#121714]">7/10</p>
        </div>
      </div>
    </div>
  );
};

export default WellnessOverview;
