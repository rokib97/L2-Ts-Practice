// object in ts
const user: {
  company: "Programming Hero"; //literal type
  readonly CEO: string; //readonly property can't change
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  CEO: "Jhankar Mahbub",
  firstName: "Rokibul",
  lastName: "Rokib",
  isMarried: false,
};

/**
 * ! Loved how i can control my object property in typescript
 */
