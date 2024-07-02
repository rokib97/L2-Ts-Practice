"use strict";
var _a, _b;
{
  // ternary operator
  const age = 15;
  if (age > 18) {
    console.log("Adult..");
  } else {
    console.log("Not Adult");
  }
  const isAdult = age > 18 ? "Adult" : "Not Adult";
  console.log(`She is a ${isAdult} girl.`);
  //   nullish coalescing operator
  // null / undefined => desicion making
  const isAuthenticated = null; // undefined || null
  const result1 =
    isAuthenticated !== null && isAuthenticated !== void 0
      ? isAuthenticated
      : "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });
  const userOne = {
    name: "rokib",
    address: {
      city: "Dhk",
      road: "221b",
      presentAddress: "Mirpur Dhaka",
      //   permanentAddress: "Jamalpur",
    },
  };
  const permanentAddress =
    (_b =
      (_a =
        userOne === null || userOne === void 0 ? void 0 : userOne.address) ===
        null || _a === void 0
        ? void 0
        : _a.permanentAddress) !== null && _b !== void 0
      ? _b
      : "No Permanent Address Found";
  console.log({ permanentAddress });
  /**
   * ! Ternary is same as js but nullish is super fun to use with optional chaining...
   */
}
