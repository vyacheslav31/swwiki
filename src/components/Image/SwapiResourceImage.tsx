import React from "react";
import { SyntheticEvent } from "react";

/**
 * SwapiResourceImage component
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param { id: number } The resource whose details need to be displayed.
 * @param { resourceName: string } The name or title of the resource.
 * @param { resourceType: string } The type of SWApi resource.
 * @param { style:  React.CSSProperties } The style to apply to the component.
 */

export interface SwapiResourceImageProps {
  id: number;
  resourceName: string;
  resourceType: string;
  style?: React.CSSProperties;
}

const SwapiResourceImage: React.FC<SwapiResourceImageProps> = ({
  id,
  resourceName,
  resourceType,
  style,
}) => {
  resourceType = resourceType === "people" ? "characters" : resourceType;
  const imgSrc = `https://starwars-visualguide.com/assets/img/${resourceType}/${id}.jpg`;
  const imgFallback =
    "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
  const onErrorHandler = ({ currentTarget }: SyntheticEvent) => {
    (currentTarget as HTMLImageElement).onerror = null;
    (currentTarget as HTMLImageElement).src = imgFallback;
  };
  return (
    <img
      style={style}
      src={imgSrc}
      alt={`An portrait of ${resourceName}`}
      onError={onErrorHandler}
    />
  );
};

export default SwapiResourceImage;
