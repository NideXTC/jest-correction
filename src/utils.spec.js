import { add, substract, multiply } from "./utils";

describe("Utils", () => {
  describe("add", () => {
    it("adds two numbers together", () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
  });

  describe("substract", () => {
    it("substracts two numbers from each other", () => {
      const result = substract(5, 2);
      expect(result).toBe(3);
    });

    it("substracts two numbers from each other", () => {
      const result = substract("hello", 2);
      expect(Number.isNaN(result)).toBe(true);
    });
  });

  describe("multiply", () => {
    it("multiply two numbers", () => {
      const result = multiply(5, 2);
      expect(result).toBe(10);
    });
  });
});
