/**
 * This function takes a string capitalizes the first letter and returns it as a string;
 *
 * @version 1.0.0
 * @author [Vyacheslav Gorbov](https://github.com/vyacheslav31)
 * @param string The string who first letter needs to be capitalized.
 * @returns The string with the first letter capitalized (e.g: string => String);
 */
const ucfirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ucfirst;
