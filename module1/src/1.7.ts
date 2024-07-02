{
  // spread  operator
  const bros1: string[] = ["sakib", "saki", "jack"];
  const bros2: string[] = ["rokib", "sunny", "jashim"];
  bros2.push(...bros1);

  const mentors1 = {
    TypeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    next: "Tonmoy",
    cloud: "Sunny",
    prisma: "Firoz",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //   rest operator
  const greetMessage = (...frineds: string[]) => {
    frineds.forEach((frined: string) => console.log(`Hello ${frined}`));
  };

  greetMessage("saki", "rokib", "sabrina");
}
