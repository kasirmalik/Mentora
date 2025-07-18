import React, { useContext } from "react";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext.jsx";

function Navbar() {
  const { navigate, isEducator } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    // for large screens
    <div
      className={`flex justify-between items-center px-4  py-4  sm:px-10  md:px-14 lg:px-36 border-b border-gray-500  ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
              >
                {isEducator ? "Educator DashBoard" : "Become Educator"}
              </button>
              |<Link to={"/my-enrollments"}>My Enrollments</Link>{" "}
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/* for phone screen */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
              >
                {isEducator ? "Educator DashBoard" : "Become Educator"}
              </button>
              | <Link to={"/my-enrollments"}>My Enrollments</Link>{" "}
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="user-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
