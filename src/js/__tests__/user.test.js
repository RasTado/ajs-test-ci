import getLevel from "../user";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("test call getLevel 1", () => {
  fetchData.mockReturnValue({ status: "ok", level: 1 });

  const response = getLevel(1);
  expect(response).toEqual("Ваш текущий уровень: 1");
  expect(fetchData).toBeCalledWith("https://server/user/1");
});

test("test call getLevel noUser", () => {
  fetchData.mockReturnValue({ status: "", level: 1 });

  const response = getLevel(1);
  expect(response).toEqual("Информация об уровне временно недоступна");
});
