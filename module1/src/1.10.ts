{
  // Union type
  type FrontendDeveloper = "fakibuzDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expartDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newDeveloper: Developer = "frontendDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female"; //string literal with union
    bloodGroup: "O+" | "A+" | "AB+" | "O-";
  };
  const user1: User = {
    name: "rokib",
    gender: "male",
    bloodGroup: "O+",
  };

  //   intersection type
  type Bowler = {
    skills: string[];
    designation1: "Bowler";
  };
  type Batsman = {
    skills: string[];
    designation2: "Batsman";
  };
  type AllRounder = Bowler & Batsman;

  const allRounder: AllRounder = {
    skills: ["rightArm", "googly", "coverDrive", "360shot"],
    designation1: "Bowler",
    designation2: "Batsman",
  };

  /**
   * !Type Alias is fun. Specially Union & Intersection!
   */
}
