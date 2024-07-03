{
  // interface vs type
  // type
  type User1 = {
    name: string;
    age: number;
  };
  const user1: User1 = {
    name: "rokib",
    age: 21,
  };

  // interface
  interface User2 {
    name: string;
    age: number;
  }
  const user2: User2 = {
    name: "rokib",
    age: 21,
  };

  type RollNumber = number;
  /**
   * ? for primitive data => we can use type only.
   * ? for non primitive(object,array,function) => we can use type and interface both.
   */

  // intersection single property with a object type
  type UserWithRole1 = User1 & { role: string; id: number };
  // example of type with intersection single property
  const userWithRole1: UserWithRole1 = {
    name: "rokib",
    age: 24,
    role: "instructor",
    id: 2212,
  };

  // intersection single property with a object interface using extends keyword
  interface UserWithRole2 extends User2 {
    role: string;
    id: number;
  }
  // example of interface with intersection single property
  const userWithRole2: UserWithRole2 = {
    name: "rokib",
    age: 24,
    role: "instructor",
    id: 2212,
  };

  // extent type to make interface and intersection a property
  interface ConvertTypeToInterface extends User1 {
    role: string;
  }
  const convertTypeToInterface: ConvertTypeToInterface = {
    name: "rokib",
    age: 21,
    role: "instructor",
  };

  // convert interface to type and intersection a property
  type ConvertInterfaceToType = User2 & {
    role: string;
  };
  const convertInterfaceToType: ConvertInterfaceToType = {
    name: "rokib",
    age: 21,
    role: "instructor",
  };

  // js => object, array => object, function => object
  type Roll = number[];
  const rollNumers1: Roll = [10, 2, 3, 4, 345, 324];

  // using index-signature declare interface for array
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumers2: Roll2 = [10, 2, 3, 4, 345, 324];

  // function
  type AddTwoNum = (num1: number, num2: number) => number;
  const addTwoNum: AddTwoNum = (num1, num2) => num1 + num2;

  // interface for function
  interface AddTwoNum2 {
    (num1: number, num2: number): number;
  }
  const addTwoNum2: AddTwoNum2 = (num1, num2) => num1 + num2;
  console.log(addTwoNum2(10, 30));

  /**
   * ! Object => interface or type alias , choose anyone, for type alias use & to intersection and for interface use extend keyword for intersection property. or we can do mix-match .
   * ! Array and Function => type Alias for better syntax.
   */
}
