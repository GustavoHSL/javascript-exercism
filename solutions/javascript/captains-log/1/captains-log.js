// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let min = 1000;
  let max = 9999;
  let number = min + Math.random()*(max - min);
  return 'NCC-'+Math.floor(number);
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let min = 41000.0;
  let max = 42000.0;
  return min + Math.random()*(max - min);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let possiveisPlanetas = ["D","H","J","K","L","M","N","R","T","Y"];
  let randomArrayIndex = Math.floor(Math.random()*possiveisPlanetas.length);
  return possiveisPlanetas[randomArrayIndex];
}
