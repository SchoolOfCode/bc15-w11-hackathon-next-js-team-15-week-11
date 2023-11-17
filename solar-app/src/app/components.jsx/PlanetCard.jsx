import planetData from ".../db.json"

const PlanetCard = ({ planet }) => {
    const data = planetData[planet];

    if(!data) {
        return <p>Planet data not found!</p>
    }

const {name, distance, radius, temperature, day, year, moons, image, description} = data
}

return (
    <>
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <Image 
            src={image} 
            alt={`image of ${name}`} 
            width:{} 
            height{} 
            />
        <ul>
            <li>{distance}</li>
            <li>{radius}</li>
            <li>{temperature}</li>
            <li>{day}</li>
            <li>{year}</li>
            <li>{moons}</li>
        </ul>

    </div>

    </>
)

export default PlanetCard
