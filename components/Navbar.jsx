'use client';
import Link from "next/link";
import { FcTodoList } from "react-icons/fc";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const username = session?.user?.username; // Use 'username'

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
          <FcTodoList size={40} className="mr-2" />
          <span className="text-2xl font-bold">To-Do App</span>
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200 transition-colors">About</Link>
          <Link href="/" className="text-white hover:text-gray-200 transition-colors">Contact Us</Link>
        </div>
        <div className="flex items-center space-x-4">
          {session && <h2 className="text-white text-lg">Welcome, {username}</h2>}
          {session && (
            <button
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
