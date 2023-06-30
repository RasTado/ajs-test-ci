import fetchData from "../http";

test("check http", () => {
  expect(() => fetchData(1)).toThrow("Mock this!");
});
