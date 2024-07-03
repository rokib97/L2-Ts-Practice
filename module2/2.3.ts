{
  // generic types

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [10, 23, 232, 33, 33];
  const rollNumbers: GenericArray<number> = [10, 23, 232, 33, 33];

  //   const mentors: string[] = ["rokib", "saki", "jack"];
  const mentors: GenericArray<string> = ["rokib", "saki", "jack"];

  //   const bollArray: boolean[] = [true, false, true];
  const bollArray: GenericArray<boolean> = [true, false, true];

  //   array of object
  type User = {
    name: string;
    age: number;
  };
  // or we can use interface
  //   interface User {
  //     name: string;
  //     age: number;
  //   }
  const users: GenericArray<User> = [
    { name: "rokib", age: 32 },
    { name: "saki", age: 23 },
  ];

  //  generic tuple
  type GenericTuple<x, y> = [x, y];
  const nameAndAge: GenericTuple<string, number> = ["rokib", 24];

  type User1 = {
    name: string;
    age: number;
  };
  const userDetail: GenericTuple<number, User1> = [
    1234,
    { name: "rokib", age: 23 },
  ];

  /**

   * ! Generic is used to dynamic the type . we can use the generic type more than once place and for different data type like number ,array, boolen
   * ! also we can use Generic in tuple, but we have to define in differently because its receive different type of data in a order
   */
}
