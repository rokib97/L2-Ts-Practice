{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [10, 23, 232, 33, 33];
  const rollNumbers: GenericArray<number> = [10, 23, 232, 33, 33];

  //   const mentors: string[] = ["rokib", "saki", "jack"];
  const mentors: GenericArray<string> = ["rokib", "saki", "jack"];

  //   const bollArray: boolean[] = [true, false, true];
  const bollArray: GenericArray<boolean> = [true, false, true];

  //   array of object
  const users: GenericArray<{ name: string; age: number }> = [
    { name: "rokib", age: 32 },
    { name: "saki", age: 23 },
  ];

  //  generic tuple
  type GenericTuple<x, y> = [x, y];
  const nameAndAge: GenericTuple<string, number> = ["rokib", 24];
  const userDetail: GenericTuple<number, { name: string; age: number }> = [
    1234,
    { name: "rokib", age: 23 },
  ];

  /**

   * ! Generic is used to dynamic the type . we can use the generic type more than once place and for different data type like number ,array, boolen
   * ! also we can use Generic in tuple, but we have to define in differently because its receive different type of data in a order
   */
}
