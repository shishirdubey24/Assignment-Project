import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  console.log("Navbar is being rendered");
  return (

    <nav className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          TaskMate
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
