export const totalPageNumbers: { [resourceType: string]: number } = {
  people: 9,
  films: 1,
  planets: 6,
};

const validatePageNumber = (resourceType: string, pageNumber: number) => {
  if (pageNumber > totalPageNumbers[resourceType] || pageNumber < 0) {
    return false;
  }
  return true;
};

export default validatePageNumber;
