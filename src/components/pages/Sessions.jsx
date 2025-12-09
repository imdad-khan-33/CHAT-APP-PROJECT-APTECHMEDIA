import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import sess from "/assets/session.png";
import sess2 from "/assets/session2.png";
import sess3 from "/assets/session3.png";
import sess4 from "/assets/session4.png";

const Sessions = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 4));
  const [selectedDate, setSelectedDate] = useState(4);

  const sessions = [
    {
      id: 1,
      title: "Coping with Stress",
      description: "Learn techniques to handle stress effectively.",
      image: sess,
    },
    {
      id: 2,
      title: "Managing Anxiety",
      description: "Strategies for managing anxiety and panic.",
      image: sess3,
    },
    {
      id: 3,
      title: "Building Self-Esteem",
      description: "Build self-confidence and self-worth.",
      image: sess2,
    },
    {
      id: 4,
      title: "Building Self-Esteem",
      description: "Build self-confidence and self-worth.",
      image: sess4,
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "Individual Therapy",
      date: "Jul 15, 2024 - 10:00 AM",
      status: "Join",
    },
  ];

  const pastSessions = [
    {
      id: 1,
      title: "Group Therapy",
      date: "Jul 10, 2024 - 3:00 AM",
      status: "Reschedule",
    },
    {
      id: 2,
      title: "Couples Therapy",
      date: "Jul 8, 2024 - 4:00 AM",
      status: "Reschedule",
    },
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const renderCalendar = (date, isSecondMonth = false) => {
    const daysInMonth = getDaysInMonth(date);
    const firstDay = getFirstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = i === selectedDate;
      days.push(
        <div
          key={i}
          onClick={() => setSelectedDate(i)}
          className={`text-center py-2 rounded cursor-pointer transition ${
            isSelected
              ? "bg-green-500 text-white font-bold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen p-4 md:p-8  ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#121714] mb-2  mt-[30px] pl-[20px]">
          Therapy Sessions
        </h1>
        <p className="text-sm md:text-base text-[#618A75]  pl-[20px]">
          Manage your therapy sessions and schedule
        </p>
      </div>

      {/* Recommended Sessions */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-[#121714] mb-4">
          Recommended Sessions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sessions.map((session) => (
            <div key={session.id} className=" rounded-lg overflow-hidden ">
              <div className="w-full  overflow-hidden rounded-lg">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full h-auto object-cover "
                />
              </div>
              <div className="">
                <h3 className="font-semibold text-[#121714] text-sm mb-2 font-family-manrope">
                  {session.title}
                </h3>
                <p className="text-xs text-[#618A75] font-family-manrope">
                  {session.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Schedule */}
      <div className="mb-8 ">
        <h2 className="text-lg md:text-xl font-semibold text-[#121714] mb-4">
          Schedule
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  ">
          {/* Calendar */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => handlePrevMonth()}
                className="p-2 hover:bg-gray-100 rounded transition"
              >
                <ChevronLeft size={20} className="text-[#121714]" />
              </button>
              <h3 className="font-semibold text-[#121714] text-center">
                {monthName}
              </h3>
              <button
                onClick={() => handleNextMonth()}
                className="p-2 hover:bg-gray-100 rounded transition"
              >
                <ChevronRight size={20} className="text-[#121714]" />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div key={day} className="font-semibold text-[#121714] text-sm">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2 ">
              {renderCalendar(currentMonth)}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-[#121714] mb-4">
          Upcoming Sessions
        </h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 border-b hover:bg-gray-50 transition"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div>
                  <p className="font-semibold text-[#121714] text-sm md:text-base">
                    {session.title}
                  </p>
                  <p className="text-xs md:text-sm text-[#618A75]">
                    {session.date}
                  </p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-green-50 hover:bg-green-100 text-green-700 px-6 py-2 rounded text-sm font-medium transition">
                {session.status}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past Sessions */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold text-[#121714] mb-4">
          Past Sessions
        </h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {pastSessions.map((session) => (
            <div
              key={session.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 border-b last:border-b-0"
            >
              <div className="flex items-start gap-4">
                <div>
                  <p className="font-semibold text-[#121714] text-sm md:text-base">
                    {session.title}
                  </p>
                  <p className="text-xs md:text-sm text-[#618A75]">
                    {session.date}
                  </p>
                </div>
              </div>
              <button className="mt-4 md:mt-0 w-full md:w-auto px-4 py-2 min-w-[110px] bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition">
                {session.status}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;
