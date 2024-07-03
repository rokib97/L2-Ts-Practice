{
  // type assertion || type narrowing
  let anything: any;
  anything = "Next Level Web Dev";
  console.log((anything as string).toUpperCase());
  // (anything as number).toFixed();

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      return `The Converted Value is ${parseFloat(value) * 1000}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
  console.log({ result1 }, { result2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  /**
   * ! when we are sure the return type , and we know the return type more than typescript we can use assertion / narrowing.
   */
}
