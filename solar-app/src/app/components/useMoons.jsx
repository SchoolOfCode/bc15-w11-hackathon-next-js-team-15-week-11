import React from "react";
import { fetchData } from "./planetDataCache";

export default async function useMoons(planet) {
  const data = await fetchData();

  let moons = [<h2>No Moons</h2>];
  if (data[planet].moons) {
    moons = data[planet].moons.map((moon) => {
      const name = data[moon.moon].englishName;
      const discoveredBy = data[moon.moon].discoveredBy ? data[moon.moon].discoveredBy : "unknown";
      const discoveryDate = data[moon.moon].discoveryDate ? data[moon.moon].discoveryDate : "unknown";
      return (
        <div key={moon.moon} className="moonsContainerRow">
          <p className="moonName"> {name}</p>
          <p>Discovered By: {discoveredBy}</p>
          <p>Discovery Date: {discoveryDate}</p>
        </div>
      );
    });
  }
  return {planet: data[planet], moons: moons};
}
