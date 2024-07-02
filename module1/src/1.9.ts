{
  // Tyle Alias
  // for object
  type Student = {
    name: string;
    age: number;
    prof: string;
    address: string;
    contactNo?: string;
  };
  const student1: Student = {
    name: "rokib",
    age: 21,
    prof: "Web Dev",
    address: "Dhk",
    contactNo: "0169999999",
  };
  const student2: Student = {
    name: "saki",
    age: 17,
    prof: "Web Dev",
    address: "ctg",
    contactNo: "01699999999",
  };
  const student3: Student = {
    name: "rakib",
    age: 26,
    prof: "Teacher",
    address: "Cumilla",
  };

  //   for string and  boolean
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Rokib";
  const isAdmin: IsAdmin = true;

  //   type alias for function
  type AddTwoNum = (num1: number, num2: number) => number;
  const addTwoNum: AddTwoNum = (num1, num2) => num1 + num2;

  /**
   * ! Type Alias will boost my productivity for sure.
   */
}
