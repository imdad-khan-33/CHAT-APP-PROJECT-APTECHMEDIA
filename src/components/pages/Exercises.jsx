import React from "react";

const ExercisesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Diaphragmatic Breathing",
      description:
        "Practice deep, mindful breathing to reduce stress and promote relaxation.",
      image: "/assets/vector.svg",
      highlighted: true,
    },
    {
      id: 2,
      title: "Box Breathing",
      description:
        "A technique involving equal intervals of inhale, hold, exhale, and hold to calm the nervous system.",
      image: "/assets/vector.svg",
    },
    {
      id: 3,
      title: "Mindfulness Meditation",
      description:
        "Focus on the present moment to cultivate awareness and reduce anxiety.",
      image: "/assets/vector.svg",
    },
    {
      id: 4,
      title: "Guided Imagery",
      description:
        "Use visualization to create a peaceful mental space and promote relaxation.",
      image: "/assets/vector.svg",
    },
    {
      id: 5,
      title: "Gratitude Journaling",
      description:
        "Reflect on things you are grateful for to boost mood and foster positivity.",
      image: "/assets/vector.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 mt-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mt-[30px] pl-[20px]">
          Exercises
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mt-1 pl-[20px]">
          Mindfulness techniques designed to support your mental wellness
          journey
        </p>
      </div>

      {/* Content Area */}
      <div className="  p-6 max-w-7xl mx-auto ">
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <div
              key={exercise.id}
              className={`rounded-lg overflow-hidden transition-all ${
                exercise.highlighted ? "" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Content */}
                <div className="flex-1 p-5">
                  <h3 className="text-lg font-semibold text-[#121714] font-manrope   mb-2 font-manrope  leading-5 tracking-normal  ">
                    {exercise.title}
                  </h3>
                  <p className="text-sm text-[#638775] mb-4 font-manrope font-normal  leading-[21px] tracking-normal">
                    {exercise.description}
                  </p>

                  <button className="bg-[#F0F5F2] px-4 py-2 rounded-[8px]">
                    Start
                  </button>
                </div>

                {/* Image */}
                {/* <div className="flex items-center justify-center p-5 md:p-8 md:w-48">
                  <img
                    src={exercise.image}
                    alt={exercise.title}
                    className="w-full h-auto"
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
