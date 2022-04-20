import { Card } from "antd";
import Planet from "../../types/Planet";

/**
 * PlanetDetails component
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {planet: Planet} The Planet's details
 */

interface PlanetDetailsProps {
  planet: Planet;
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({ planet }) => {
  return (
    <Card style={{ flex: 3 }}>
      <p>
        <b>Name:</b> {planet.name}
      </p>
      <p>
        <b>Population</b>: {planet.population}
      </p>
      <p>
        <b>Orbital Period</b>: {planet.orbital_period}
      </p>
      <p>
        <b>Diameter</b>: {planet.diameter}
      </p>
      <p>
        <b>Gravity</b>: {planet.gravity}
      </p>
      <p>
        <b>Terrain</b>: {planet.terrain}
      </p>
      <p>
        <b>Surface Water</b>: {planet.surface_water}
      </p>
      <p>
        <b>Climate</b>: {planet.climate}
      </p>
    </Card>
  );
};

export default PlanetDetails;
