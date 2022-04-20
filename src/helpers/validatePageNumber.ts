/**
 * An object that contains the current total page numbers of every available resource.
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param resourceType The Swapi resource type
 */
export const totalPageNumbers: { [resourceType: string]: number } = {
  people: 9,
  films: 1,
  planets: 6,
};

/**
 * This function cross referendes `totalPageNumbers` to see if the provided pageNumber is appropriate for
 * the given resource.
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param resourceType The Swapi resource type
 * @param pageNumber A page number that needs to be cross-references with the total number of pages.
 * @returns true if the pageNumber is valid, false if is not.
 */
const validatePageNumber = (resourceType: string, pageNumber: number) => {
  if (pageNumber > totalPageNumbers[resourceType] || pageNumber < 0) {
    return false;
  }
  return true;
};

export default validatePageNumber;
