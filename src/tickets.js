/**
 * Returns a ticket object when given the name.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String} name The name of a ticket
 * @returns The ticket object with a matching ID or `null` if no object is found.
 */
function getTicketByName(tickets, name) {
  const result = tickets.find((ticket) => {
    return ticket.name.toLowerCase() === name.toLowerCase();
  });

  return result || null;
}

/**
 * Calculates a total based on the given ticket names.
 * @param {Object[]} tickets An array of ticket objects
 * @param {String[]} names An array of ticket names
 * @returns The total value of all tickets from the `names` array.
 */
function calculateTotalFromTicketNames(tickets, names) {
  let total = 0;
  for (let name of names) {
    const ticket = getTicketByName(tickets, name);
    if (ticket) {
      total += ticket.priceInCents;
    }
  }
  return total;
}
