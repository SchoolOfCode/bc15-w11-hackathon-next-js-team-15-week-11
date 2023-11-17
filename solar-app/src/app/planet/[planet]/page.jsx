import React from "react";
import useMoons from "@/app/components/useMoons";

const Planet = async ({ params }) => {
  console.log("params: ", params);

  const plnt = (params.planet = "Venus" ? "Vénus" : "Venus");

  const data = await useMoons(plnt); // note must be the French name, as this matches the moon names

  return (
    <div>
      <h1 className="planet-name">{data.planet.englishName}</h1>
      <h2>Moons</h2>
      <div className="moonsContainerCol">{data.moons}</div>
    </div>
  );
};

export default Planet;
