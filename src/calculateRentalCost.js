/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const totalCost = days * 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
