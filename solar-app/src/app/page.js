import ResponsiveImageWithHotspots from "./components/ResponsiveImageWithHotspots";
import { fetchData } from "./components/planetDataCache";


const hotspots = [
  { id: 1, x: 49, y: 78, label: "Venus", sizePercentage: 9.5, link: "/venus" },
  { id: 2, x: 49, y: 44.7, label: "Jupiter", sizePercentage: 19, link: "/jupiter" },
  { id: 4, x: 49.1, y: 87.1, label: "Mercury", sizePercentage: 7, link: "/mercury" },
  { id: 5, x: 48.9, y: 67.55, label: "Earth", sizePercentage: 9.7, link: "/earth" },
  { id: 6, x: 49, y: 56.7, label: "Mars", sizePercentage: 6.5, link: "/mars" },
  { id: 7, x: 49.6, y: 26.8, label: "Saturn", sizePercentage: 10.5, link: "/saturn" },
  { id: 8, x: 49.1, y: 14.18, label: "Uranus", sizePercentage: 6.8, link: "/uranus" },
  { id: 9, x: 48.9, y: 4.45, label: "Neptune", sizePercentage: 8, link: "/neptune" },
];

export default async function Home() {
  const res = await fetch("http://api.open-notify.org/astros.json");
  const astronautData = await res.json();

  const peopleInSpaceCount = astronautData.number;
  const astronauts = astronautData.people.map((astronaut) => {
    return <li key={astronaut.name} className="astronauts">{astronaut.name} in spacecraft {astronaut.craft}</li>
  })

  await fetchData();

  return (
    <main>
      <ResponsiveImageWithHotspots hotspots={hotspots} imageUrl="/planets.png" />
      <p className="astronaut-count">People In Space Right Now: {peopleInSpaceCount}</p>
      <ul>{astronauts}</ul>
    </main>
  );
}



