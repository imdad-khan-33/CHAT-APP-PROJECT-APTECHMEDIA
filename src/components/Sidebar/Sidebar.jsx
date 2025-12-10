import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { path: "/", icon: "/assets/icon5.svg", label: "Home" },
    { path: "/sessions", icon: "/assets/icon3.svg", label: "Sessions" },
    { path: "/exercises", icon: "/assets/icon2.svg", label: "Exercises" },
    { path: "/chat", icon: "/assets/icon4.svg", label: "Chat" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="lg:hidden fixed top-4 right-4 z-20">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`w-[300px] h-screen border-r fixed left-0 top-0 overflow-y-auto bg-[#FFFFFF] z-10 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="flex items-center gap-3 p-5">
          <img
            src="/assets/admin.png"
            alt="Sophia"
            className="w-[45px] h-[45px] rounded-[20px] object-cover flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-sm text-gray-900 w-[52px] h-[24px]">
              Sophia
            </p>
            <p className="text-xs text-gray-500 font-normal w-[52px] h-[21px]">
              Level 2
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col p-4 ">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ${
                  isActive
                    ? "bg-green-50 hover:bg-green-100"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[24px] h-[24px]"
                />
                {/* Label */}
                <span
                  className={`text-sm font-normal w-[39px] h-[21px] ${
                    isActive ? "font-medium text-gray-900" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
