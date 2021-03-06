import React from "react";
import Film from "../../types/Film";
import Person from "../../types/Person";
import Planet from "../../types/Planet";
import FilmDetails from "./FilmDetails";
import PersonDetails from "./PersonDetails";
import PlanetDetails from "./PlanetDetails";

/**
 * ResourceDetailsDisplay component
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param {resource: SwapiResource} The resource whose details need to be displayed.
 * @param {resourceType: string} The type of SWApi resource.
 */

interface SwapiResourceDetailsProps {
  resource: Person | Film | Planet;
  resourceType: string;
}

const buildResourceDetails = (
  resource: Person | Film | Planet,
  resourceType: string
) => {
  switch (resourceType) {
    case "people":
      return <PersonDetails person={resource as Person} />;
    case "films":
      return <FilmDetails film={resource as Film} />;
    case "planets":
      return <PlanetDetails planet={resource as Planet} />;
  }
  return <p>Resource not found.</p>;
};

const SwapiResourceDetails: React.FC<SwapiResourceDetailsProps> = ({
  resourceType,
  resource,
}) => {
  const resourceDetails = buildResourceDetails(resource, resourceType);
  return resourceDetails;
};

export default SwapiResourceDetails;
