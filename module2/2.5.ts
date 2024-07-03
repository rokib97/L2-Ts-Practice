{
  // function with generics

  const createArry = (param: string): string[] => {
    return [param];
  };
  const createArryWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res1 = createArry("Bangladesh");
  const res2 = createArryWithGeneric<boolean>(true);
  const res3 = createArryWithGeneric<string>("Bangladesh");
  type User = {
    id: number;
    name: string;
  };
  const res4 = createArryWithGeneric<User>({ id: 101, name: "rokib" });

  const createArryWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArryWithTuple<number, string>(222, "rokib");

  interface User1 {
    name: string;
    age: number;
  }
  const res11 = createArryWithTuple<number, User1>(222, {
    name: "rokib",
    age: 23,
  });

  const addCourseToStudent = <T>(course: T) => {
    const courseName = "Next Level Web Dev";
    return {
      ...course,
      courseName,
    };
  };

  type StudentOne = { name: string; courseType: string };
  const stud1 = addCourseToStudent<StudentOne>({
    name: "rokib",
    courseType: "NLWD",
  });
  interface StudentTwo {
    name: string;
    hasWatch: string;
  }
  const stud2 = addCourseToStudent<StudentTwo>({
    name: "saki",
    hasWatch: "Apple",
  });
}
