import { Card } from "antd";
import Planet from "../../types/Planet";

interface PlanetDetailsProps {
  planet: Planet;
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({ planet }) => {
  return (
    <Card style={{flex: 3}}>
      <p>Name: {planet.name}</p>
      <p>Population: {planet.population}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity {planet.gravity}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Climate: {planet.climate}</p>
    </Card>
  );
};

export default PlanetDetails;
