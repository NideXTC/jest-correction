import isPhoneNumber from "./phone.js";

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

describe("phone", () => {
  it("should start with +49", () => {
    //expect(isPhoneNumber("+491000000000")).toBe(true);
  });

  it("should be 12 number with +49", () => {
    // expect(isPhoneNumber("+491000000000")).toBe(true);
  });

  it("shouldn't be more 12 number ", () => {
    expect(isPhoneNumber("+491000000000")).toBe(false);
  });
});
