import { Link, useLoaderData } from "react-router";
import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Geo Trails/ Countries" },
    { name: "description", content: "About the countries" },
  ];
}

export async function clientLoader() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,subregion,population,cca3"
  );
  return res.json();
}

export default function Countries() {
  const loaderData = useLoaderData<typeof clientLoader>();
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [capital, setCapital] = useState<string>("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion = !region || country.region.toLowerCase() === region.toLowerCase();
    const matchesCapital =
      !capital || (country.capital && country.capital[0]?.toLowerCase() === capital.toLowerCase());
    const matchesSearch =
      !search || country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion && matchesCapital;
  });

  return (
    <div className="p-6 bg-indigo-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">Countries</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-indigo-300 rounded px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-indigo-300 rounded px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <input
          type="text"
          placeholder="Search by capital..."
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          className="border border-indigo-300 rounded px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-gray-600">No countries match your filters.</div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCountries.map((country: any) => (
            <li
              key={country.cca3}
              className="bg-white border border-indigo-200 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div>
                  <Link
                    to={`/countries/${encodeURIComponent(country.cca3)}`}
                    className="text-indigo-600 hover:text-indigo-800 font-semibold text-lg"
                  >
                    {country.name.common}
                  </Link>
                  <div className="text-gray-700 text-sm mt-1">
                    Region: {country.region} <br />
                    Capital: {country.capital?.[0] || "N/A"} <br />
                    Population: {country.population.toLocaleString()}
                  </div>
                </div>
                <img
                  src={country.flags?.png}
                  alt={`${country.name.common} flag`}
                  className="w-20 h-10 object-cover rounded"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
