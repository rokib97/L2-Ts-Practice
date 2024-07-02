{
  //object destructuring
  const user = {
    id: 1,
    name: {
      firstName: "Rokibul",
      middleName: "Hasan",
      lastName: "Rokib",
    },
    contact: "01799999999",
    address: "221b",
  };

  const {
    id,
    name: { firstName: prothomNam, lastName },
    address: thikana, // name alias
  } = user;

  //   array destructuring
  const friends = ["tonmoy", "rakib", "milon", "tota", "sabrina", "moni"];
  const [, , bestFriend, ...rest] = friends;

  /**
   * !Destructuring is enjoyable.
   */
}
