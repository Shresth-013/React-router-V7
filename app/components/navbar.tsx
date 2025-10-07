import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="w-full px-8 text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to="/" className="flex items-center mb-5 md:mb-0">
            <span className="text-xl font-black text-white select-none">
              GEO<span className="text-indigo-200">Trails</span>
            </span>
          </NavLink>
          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:border-indigo-400 md:pl-8">
            <NavLink
              to="/"
              end
              className="mr-5 font-medium text-indigo-100 hover:text-white transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/countries"
              className="mr-5 font-medium text-indigo-100 hover:text-white transition"
            >
              Countries
            </NavLink>
            <NavLink
              to="/about"
              className="mr-5 font-medium text-indigo-100 hover:text-white transition"
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
