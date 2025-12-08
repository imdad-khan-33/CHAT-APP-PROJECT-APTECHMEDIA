import React from "react";

const RecommendedTherapy = () => {
  return (
    <div className="bg-white p-6 rounded-xl mb-6">
      {/* Yellow accent line - decorative */}
      <div className="hidden md:block absolute left-0 w-1 h-32 bg-yellow-400 rounded-r-lg"></div>

      <h3 className="font-semibold text-[#121714] font-manrope text-[22px] leading-[28px] tracking-[0px] pl-[15px] mb-6">
        Recommended Therapy Sessions
      </h3>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-xs text-[#618A75] mb-3">
            Based on your assessment
          </p>

          <h4 className="text-xl font-semibold text-[#121714] mb-3">
            Cognitive Behavioral Therapy (CBT)
          </h4>

          <p className="text-sm text-[#618A75] mb-6">
            Learn to identify and change negative thought patterns.
          </p>

          <button className="bg-[#F0F5F2] hover:bg-gray-200 text-[#121714] px-6 py-3 rounded-[8px] text-sm font-medium transition-colors">
            Start Session
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-shrink-0 w-full md:w-[320px] h-[280px]">
          <img
            src="/assets/rightimage.png"
            alt="Therapy illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendedTherapy;
