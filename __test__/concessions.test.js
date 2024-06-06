const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");

describe("getConcessionByID", () => {
  it("returns the correct concession object when given a matching ID", () => {
    const concessions = [
      { id: "c1", name: "Popcorn", priceInCents: 500 },
      { id: "c2", name: "Soda", priceInCents: 300 },
      { id: "c3", name: "Candy", priceInCents: 200 },
    ];
    const id = "c2";
    const result = getConcessionByID(concessions, id);

    expect(result).toEqual({ id: "c2", name: "Soda", priceInCents: 300 });
  });

  it("returns null when no matching ID is found", () => {
    const concessions = [
      { id: "c1", name: "Popcorn", priceInCents: 500 },
      { id: "c2", name: "Soda", priceInCents: 300 },
      { id: "c3", name: "Candy", priceInCents: 200 },
    ];
    const id = "c4";
    const result = getConcessionByID(concessions, id);

    expect(result).toBeNull();
  });
});

describe("calculateTotalFromIDs", () => {
  it("calculates the correct total for given concession IDs", () => {
    const concessions = [
      { id: "c1", name: "Popcorn", priceInCents: 500 },
      { id: "c2", name: "Soda", priceInCents: 300 },
      { id: "c3", name: "Candy", priceInCents: 200 },
    ];
    const ids = ["c1", "c3"];
    const total = calculateTotalFromIDs(concessions, ids);

    expect(total).toBe(700);
  });

  it("returns 0 if no matching concession IDs are found", () => {
    const concessions = [
      { id: "c1", name: "Popcorn", priceInCents: 500 },
      { id: "c2", name: "Soda", priceInCents: 300 },
      { id: "c3", name: "Candy", priceInCents: 200 },
    ];
    const ids = ["c4", "c5"];
    const total = calculateTotalFromIDs(concessions, ids);

    expect(total).toBe(0);
  });

  it("calculates the total correctly even if some IDs do not match", () => {
    const concessions = [
      { id: "c1", name: "Popcorn", priceInCents: 500 },
      { id: "c2", name: "Soda", priceInCents: 300 },
      { id: "c3", name: "Candy", priceInCents: 200 },
    ];
    const ids = ["c1", "c4", "c3"];
    const total = calculateTotalFromIDs(concessions, ids);

    expect(total).toBe(700);
  });
});
