const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

describe("getTicketByName", () => {
  it("returns the correct ticket object when given a matching name", () => {
    const tickets = [
      { name: "VIP", priceInCents: 10000 },
      { name: "Regular", priceInCents: 5000 },
      { name: "Student", priceInCents: 3000 },
    ];
    const name = "Regular";
    const result = getTicketByName(tickets, name);

    expect(result).toEqual({ name: "Regular", priceInCents: 5000 });
  });

  it("returns null when no matching name is found", () => {
    const tickets = [
      { name: "VIP", priceInCents: 10000 },
      { name: "Regular", priceInCents: 5000 },
      { name: "Student", priceInCents: 3000 },
    ];
    const name = "Senior";
    const result = getTicketByName(tickets, name);

    expect(result).toBeNull();
  });

  it("is case-insensitive when matching names", () => {
    const tickets = [
      { name: "VIP", priceInCents: 10000 },
      { name: "Regular", priceInCents: 5000 },
      { name: "Student", priceInCents: 3000 },
    ];
    const name = "vIp";
    const result = getTicketByName(tickets, name);

    expect(result).toEqual({ name: "VIP", priceInCents: 10000 });
  });
});

describe("calculateTotalFromTicketNames", () => {
  it("calculates the correct total for given ticket names", () => {
    const tickets = [
      { name: "VIP", priceInCents: 10000 },
      { name: "Regular", priceInCents: 5000 },
      { name: "Student", priceInCents: 3000 },
    ];
    const names = ["VIP", "Student"];
    const total = calculateTotalFromTicketNames(tickets, names);

    expect(total).toBe(13000);
  });

  it("returns 0 if no matching ticket names are found", () => {
    const tickets = [
      { name: "VIP", priceInCents: 10000 },
      { name: "Regular", priceInCents: 5000 },
      { name: "Student", priceInCents: 3000 },
    ];
    const names = ["Senior", "Child"];
    const total = calculateTotalFromTicketNames(tickets, names);

    expect(total).toBe(0);
  });

  it("ignores case when matching ticket names", () => {
    const tickets = [
      { name: "VIP", priceInCents: 10000 },
      { name: "Regular", priceInCents: 5000 },
      { name: "Student", priceInCents: 3000 },
    ];
    const names = ["vIp", "sTuDeNt"];
    const total = calculateTotalFromTicketNames(tickets, names);

    expect(total).toBe(13000);
  });
});
