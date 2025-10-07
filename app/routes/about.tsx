import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Geo Trails/ About" },
    { name: "description", content: "About of the page" },
  ];
}


export default function About() {
  
  return (
    <div className="py-16 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-6 text-center">
          About This Website
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          This website uses the{" "}
          <span className="font-semibold text-indigo-600">Geo Trails</span>{" "}
          platform to display comprehensive information about countries from around the world.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you’re curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
         {/* Optional footer highlight */}
        <p className="mt-10 text-center text-gray-500 italic">
          Designed with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </div>
  );
}

  
