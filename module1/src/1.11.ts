{
  // ternary operator
  const age: number = 15;
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
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  //   optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const userOne: User = {
    name: "rokib",
    address: {
      city: "Dhk",
      road: "221b",
      presentAddress: "Mirpur Dhaka",
      //   permanentAddress: "Jamalpur",
    },
  };

  const permanentAddress =
    userOne?.address?.permanentAddress ?? "No Permanent Address Found";
  console.log({ permanentAddress });
}
