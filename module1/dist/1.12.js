"use strict";
{
  // nullable type => when input can be a null by a user.
  const searchWord = (word) => {
    if (word) {
      console.log("Searching something...");
    } else {
      console.log("Nothing to search...");
    }
  };
  searchWord(null);
  //unknown type => when we don't know the input type
  const getSpeedInMeterPerSecond = (value) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log(`Wrong Input...`);
    }
  };
  getSpeedInMeterPerSecond(1000);
  getSpeedInMeterPerSecond(`1000 kmh^-1`);
  getSpeedInMeterPerSecond(null);
  //   never type  => when we don't return any type from a function
  const makeError = (msg) => {
    throw new Error(msg);
  };
  makeError("making a error...");
  /**
   * ! nullable , unknown and never type is so confusing but its makes code so much logical .
   * ? What next ? Let's try some advance type.
   * TODO => End of Module 01 . I am super exited to get the next module . Enjoying Typescript so much .
   */
}
