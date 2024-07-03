{
  // generic interface
  interface Developer<T, X = null> {
    name: string;
    age: number;
    machine: {
      brand: string;
      model: string;
      year: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type HeiluWatch = {
    name: string;
    brand: string;
    year: number;
  };

  const poorDeveloper: Developer<HeiluWatch> = {
    name: "rokib",
    age: 24,
    machine: {
      brand: "walton",
      model: "doel",
      year: 2018,
    },
    smartWatch: {
      name: "Heilu",
      brand: "xiaomi",
      year: 2018,
    },
  };

  interface AppleWatch {
    name: string;
    brand: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: number;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rich Man",
    age: 24,
    machine: {
      brand: "Apple",
      model: "Mac",
      year: 2023,
    },
    smartWatch: {
      name: "AppleWatch",
      brand: "Apple",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamama R15",
      engine: 250,
    },
  };
}
