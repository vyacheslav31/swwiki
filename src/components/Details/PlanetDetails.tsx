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
        <b>Name:</b> <p data-testid="planet-name">{planet.name}</p>
      </p>
      <p>
        <b>Population</b>:{" "}
        <p data-testid="planet-population">{planet.population}</p>
      </p>
      <p>
        <b>Orbital Period</b>:{" "}
        <p data-testid="planet-orbital">{planet.orbital_period}</p>
      </p>
      <p>
        <b>Rotation Period</b>:{" "}
        <p data-testid="planet-rotation">{planet.rotation_period}</p>
      </p>
      <p>
        <b>Diameter</b>: <p data-testid="planet-diameter">{planet.diameter}</p>
      </p>
      <p>
        <b>Gravity</b>: <p data-testid="planet-gravity">{planet.gravity}</p>
      </p>
      <p>
        <b>Terrain</b>: <p data-testid="planet-terrain">{planet.terrain}</p>
      </p>
      <p>
        <b>Surface Water</b>:{" "}
        <p data-testid="planet-surface_water">{planet.surface_water}</p>
      </p>
      <p>
        <b>Climate</b>: <p data-testid="planet-climate">{planet.climate}</p>
      </p>
    </Card>
  );
};

export default PlanetDetails;
