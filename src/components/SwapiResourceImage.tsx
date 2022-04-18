import React from 'react';
import { SyntheticEvent } from 'react';

interface SwapiResourceImageProps {
    id: number
    resourceName: string;
    resourceType: string;
}

const SwapiResourceImage: React.FC<SwapiResourceImageProps> = ({ id, resourceName, resourceType }) => {
    resourceType = resourceType === 'people' ? 'characters' : resourceType;
    const imgSrc = `https://starwars-visualguide.com/assets/img/${resourceType}/${id}.jpg`
    const imgFallback = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    const onErrorHandler = ({ currentTarget }: SyntheticEvent) => {
        (currentTarget as HTMLImageElement).onerror = null;
        (currentTarget as HTMLImageElement).src = imgFallback;
    };
    return (
        <img src={imgSrc} alt={`An portrait of ${resourceName}`} onError={onErrorHandler} />
    );
};

export default SwapiResourceImage;
