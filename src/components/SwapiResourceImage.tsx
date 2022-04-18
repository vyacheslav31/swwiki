import React from 'react';
import { SyntheticEvent } from 'react';

interface SwapiResourceImageProps {
    id: number
    resourceName: string;
    resourceType: string;
    style?: React.CSSProperties
}

const SwapiResourceImage: React.FC<SwapiResourceImageProps> = ({ id, resourceName, resourceType, style }) => {
    resourceType = resourceType === 'people' ? 'characters' : resourceType;
    const imgSrc = `https://starwars-visualguide.com/assets/img/${resourceType}/${id}.jpg`
    const imgFallback = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    const onErrorHandler = ({ currentTarget }: SyntheticEvent) => {
        (currentTarget as HTMLImageElement).onerror = null;
        (currentTarget as HTMLImageElement).src = imgFallback;
    };
    return (
        <img style={style} src={imgSrc} alt={`An portrait of ${resourceName}`} onError={onErrorHandler} />
    );
};

export default SwapiResourceImage;
