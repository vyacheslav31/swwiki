const mapResourcesToImages = (resourceType: string) => {
  const imageResourceMap: { [key: string]: string } = {
    people: "characters",
    films: "films",
    planets: "planets",
  };
  return imageResourceMap[resourceType];
};

export default mapResourcesToImages;
