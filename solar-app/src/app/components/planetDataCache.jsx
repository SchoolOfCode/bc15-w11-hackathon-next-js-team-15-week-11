
let dataCache = null;


export const fetchData = async () => {
  // Perform the initial data fetch here
  const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies");
  const data = await response.json();

// console.log(planetData)

  // Store the fetched data in the cache
  const dataCache = data.bodies.reduce((accum, body) => {
    accum[body.name] = body;
    return accum;
  }, {});

// planetData.forEach((planet) => {
//   dataCache[planet.frenchName] = {
//     ...dataCache[planet.frenchName], planet}
//     // console.log(planet)
//   } )

  return dataCache;
};

export const getCachedData = () => {
  return dataCache;
};
