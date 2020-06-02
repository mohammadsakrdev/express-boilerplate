/**
 * Generates expiration date
 * @function
 *
 * @param {number} hours - Number of hours
 *
 * @returns {Date} - Generated expiration date
 */
function generateExpirationDate(hours = 4) {
  return Date.now() + Math.abs(3600 * 1000 * hours); // hours * 3600 * 1000 / hrs in ms*/
}

module.exports = generateExpirationDate;
