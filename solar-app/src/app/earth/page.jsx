import React from "react";
import useMoons from "../components/useMoons";
import CustomDirectionButton from "../components/CustomDirectionButton";


const LaTerre = async () => {
  const data = await useMoons("La Terre"); // note must be the French name, as this matches the moon names

  return (
    <>
      <div>
        <h1 className="planet-name">{data.planet.englishName}</h1>
        <h2>Moons</h2>
        <div className="moonsContainerCol">{data.moons}</div>
      </div>

      <div>
        <CustomDirectionButton url={"/venus"} left />
        <br />
        <CustomDirectionButton url={"/mars"} right />
      </div>
    </>
  );
};

export default LaTerre;
