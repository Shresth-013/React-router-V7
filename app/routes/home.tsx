import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Geo Trails" },
    { name: "description", content: "Discover country data with real-time information" },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 bg-gradient-to-b from-indigo-50 to-purple-50 md:px-0 min-h-screen">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          
          {/* Left: Text */}
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-indigo-900 sm:text-5xl">
                <span className="block xl:inline">Discover the World Through</span>
                <span className="block text-indigo-600 xl:inline"> {""} Interactive Country Insights</span>
              </h1>
              <p className="mx-auto text-base text-gray-700 sm:max-w-md lg:text-xl">
                Journey beyond maps — explore real-time country data and discover details about every country around the world !
              </p>
              
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <Link
                  to="/countries"
                  className="flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition"
                >
                  Start Exploring
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                
                <Link
                  to="/about"
                  className="flex items-center justify-center px-6 py-3 text-indigo-700 bg-indigo-100 rounded-lg shadow hover:bg-indigo-200 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 md:px-3 mt-10 md:mt-0">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
                alt="Explore countries"
                className="w-full h-auto transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
