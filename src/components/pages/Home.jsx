import React from "react";
import WellnessOverview from "../../components/WellnessOverview/WellnessOverview.jsx";
import RecommendedTherapy from "../../components/RecommendedTherapy/RecommendedTherapy.jsx";
import UpcomingSessions from "../../components/UpcomingSessions/UpcomingSessions.jsx";
import QuickActions from "../../components/QuickActions/QuickActions.jsx";
import SavedItems from "../../components/SavedItems/SavedItems.jsx";
import DailyTips from "../../components/DailyTips/DailyTips.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="px-[20px] py-6 mt-[25px]">
        {/* Welcome Title */}
        <h1 className="text-3xl font-bold text-[#121714] mb-1 ">
          Welcome back, Sophia
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-[#618A75] font-normal pt-[10px]">
          Your Wellness Overview
        </p>
      </div>

      {/* Components Container */}
      <div className="px-8 py-6">
        <WellnessOverview />
        <RecommendedTherapy />
        <UpcomingSessions />
        <QuickActions />
        <SavedItems />
        <DailyTips />
      </div>
    </div>
  );
};

export default HomePage;
