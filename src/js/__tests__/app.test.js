import healthClearFunction, { healthSortingFunction } from "../app";

test.each([
  ["healthy", { name: "Маг", health: 90 }, "healthy"],
  ["wounded", { name: "Маг", health: 30 }, "wounded"],
  ["critical", { name: "Маг", health: 1 }, "critical"],
])(
  "check health status function with %s status and %i amount",
  (_, data, expected) => {
    const result = healthClearFunction(data);
    expect(result).toBe(expected);
  },
);

test("check sorting heroes", () => {
  const heroes = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const result = healthSortingFunction(heroes);
  expect(result).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);
});
