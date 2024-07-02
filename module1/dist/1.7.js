"use strict";
{
    // spread  operator
    const bros1 = ["sakib", "saki", "jack"];
    const bros2 = ["rokib", "sunny", "jashim"];
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
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //   rest operator
    const greetMessage = (...frineds) => {
        frineds.forEach((frined) => console.log(`Hello ${frined}`));
    };
    greetMessage("saki", "rokib", "sabrina");
    /**
     * ! Spread and Rest operator is so easy and fun to use.
     */
}
