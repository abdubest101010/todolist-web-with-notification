"use client";

import Link from "next/link";
import { FcTodoList } from "react-icons/fc";

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Navbar = () => {
  const { username } = useContext(UserContext);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-2">
        <Link
          href="/"
          className="flex items-center text-white hover:text-gray-200 transition-colors"
        >
          <FcTodoList size={32} className="mr-2 sm:mr-1" />
          <span className="text-xl sm:text-lg font-bold">To-Do App</span>
        </Link>

        <div className="flex items-center space-x-4">
          {username && (
            <h2 className="text-white text-lg sm:text-base">
              Welcome, {username}
            </h2>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
