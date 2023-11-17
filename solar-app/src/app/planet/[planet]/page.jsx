import React from "react";
import useMoons from "@/app/components/useMoons";
import { planetData } from "@/app/components/db";

const Planet = async ({ params }) => {
  let plnt = params.planet;
  if (params.planet === "Venus") {
    plnt = "Vénus";
  } else if (params.planet === "Earth") {
    plnt = "La Terre";
  }

  const data = await useMoons(plnt); // note must be the French name, as this matches the moon names


  const plntData = planetData[plnt];

  return (
    <div>
      <h1 className="planet-name">{plntData.name}</h1>

      <p className="description">{plntData.description}</p>

      {/* <Image className="planet-image" src={plntData.image} alt={`image of ${plntData.name}`}></Image> */}
      <img
        className="planet-image"
        src={plntData.image}
        alt={`image of ${plntData.name}`}
        style={{ width: "60%" }} // Adjust the width value accordingly
      />

      <ul className="facts">
        <li className="distance planet-data">Distance: {plntData.distance}</li>
        <li className="radius planet-data">Radius: {plntData.radius}</li>
        <li className="temperature planet-data">Temperature: {plntData.temperature}</li>
        <li className="day planet-data">Day: {plntData.day}</li>
        <li className="year planet-data">Year: {plntData.year}</li>
        <li className="moons planet-data">Number of moons: {plntData.moons}</li>
      </ul>

      <h2>Moons</h2>
      <div className="moonsContainerCol">{data.moons}</div>
    </div>
  );
};

export default Planet;
