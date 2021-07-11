import { localStorageHelper } from "./helpers";

describe("helpers test", () => {
  test("should localStorageHelper function set and return value", () => {
    const storedValue = "testValue";
    localStorageHelper("test", storedValue);
    const testVal = localStorageHelper("test");
    expect(testVal).toBe(storedValue);
  });
});
