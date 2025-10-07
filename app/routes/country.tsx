import { useLoaderData, Link } from "react-router";

export async function clientLoader({ params }: { params: { countryName: string } }) {
  const code = params.countryName;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const data = await res.json();
  return data;
}

type CountryData = {
  name: string;
  officialName: string;
  region: string;
  subregion: string;
  capital: string;
  population: number;
  area: number;
  languages: string;
  currencies: string;
  timezones: string;
  borders: string[];
  flagUrl: string;
};

export default function Country() {
  const loaderData = useLoaderData<typeof clientLoader>();

  if (!loaderData || !loaderData[0]) return <div className="p-6">Country not found.</div>;

  const c = loaderData[0];
  const country: CountryData = {
    name: c?.name?.common || "N/A",
    officialName: c?.name?.official || "N/A",
    region: c?.region || "N/A",
    subregion: c?.subregion || "N/A",
    capital: c?.capital?.[0] || "N/A",
    population: c?.population || 0,
    area: c?.area || 0,
    languages: c?.languages ? Object.values(c.languages).join(", ") : "N/A",
    currencies: c?.currencies
      ? Object.values(c.currencies).map((cur: any) => `${cur.name} (${cur.symbol})`).join(", ")
      : "N/A",
    timezones: c?.timezones?.join(", ") || "N/A",
    borders: Array.isArray(c?.borders) ? c.borders : [],
    flagUrl: c?.flags?.png || "",
    
  };

  const populationDensity = (country.population / country.area).toFixed(2);

  return (
    <div className="p-6 bg-indigo-50 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-indigo-900">{country.name}</h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Official Name:</span> {country.officialName}</p>
          <p><span className="font-semibold">Capital:</span> {country.capital}</p>
          <p><span className="font-semibold">Region:</span> {country.region}</p>
          <p><span className="font-semibold">Subregion:</span> {country.subregion}</p>
          <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
          <p><span className="font-semibold">Area:</span> {country.area.toLocaleString()} km²</p>
          <p><span className="font-semibold">Population Density:</span> {populationDensity} people/km²</p>
          <p><span className="font-semibold">Languages:</span> {country.languages}</p>
          <p><span className="font-semibold">Currencies:</span> {country.currencies}</p>
          <p><span className="font-semibold">Timezones:</span> {country.timezones}</p>

          {country.borders.length > 0 && (
            <p>
              <span className="font-semibold">Borders:</span>{" "}
              {country.borders.map((borderCode: string) => (
                <Link key={borderCode} to={`/countries/${borderCode}`} className="text-indigo-600 hover:text-indigo-800 mr-2">
                  {borderCode}
                </Link>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {country.flagUrl && (
          <img src={country.flagUrl} alt={`${country.name} flag`} className="w-56 h-auto border rounded shadow-lg" />
        )}
        
      </div>
    </div>
  );
}
