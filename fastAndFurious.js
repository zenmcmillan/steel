let fastAndFurious= [
  {
    name: "The Fast and the Furious: Tokyo Drift",
    date: "06/16/2006",
    ludacris: true,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 85000000,
      boxOffice: 159000000
    }
  },
  {
    name: "2 Fast 2 Furious",
    date: "06/6/2003",
    ludacris: true,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 76000000,
      boxOffice: 236400000
    }
  },
  {
    name: "Fast & Furious",
    date: "04/01/2009",
    ludacris: false,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 85000000,
      boxOffice: 360400000
    }
  },
  {
    name: "The Fast and the Furious",
    date: "06/22/2001",
    ludacris: false,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 38000000,
      boxOffice: 207517509
    }
  },
  {
    name: "Fast Five",
    date: "04/29/2011",
    ludacris: true,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 125000000,
      boxOffice: 626100000
    }
  },
  {
    name: "Fast & Furious 6",
    date: "05/7/2013",
    ludacris: true,
    wizKhalifaSingle: true,
    moneyStuff: {
      budget: 200000000,
      boxOffice: 788700000
    }
  },
  {
    name: "Furious 7",
    date: "04/03/15",
    ludacris: true,
    wizKhalifaSingle: true,
    moneyStuff: {
      budget: 230000000,
      boxOffice: 1515000000
    }
  },
  {
    name: "The Fate of the Furious",
    date: "4/14/2017",
    ludacris: true,
    wizKhalifaSingle: true,
    moneyStuff: {
      budget: 250000000,
      boxOffice: 1236000000
    }
  },
  {
    name: "Fast X",
    date: "05/19/2023",
    ludacris: true,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 34000000,
      boxOffice: undefined
    }
  },
  {
    name: "F9",
    date: "04/3/2021",
    ludacris: true,
    wizKhalifaSingle: false,
    moneyStuff: {
      budget: 210000000,
      boxOffice: 726200000
    }
  }
]

let tylerTheCreator = {
  currentAge: 32,
  albums: [
    {
      name: "Goblin",
      grammy: false,
      date: "5/11/2011",
      year: 2011,
      hat: true,
    },
    {
      name: "Wolf",
      grammy: false,
      date: "4-2-2013",
      year: 2013,
      hat: true,
    },
    {
      name: "Cherry Bomb",
      grammy: false,
      date: "07/21/17",
      year: 2015,
      hat: false,
    },
    {
      name: "Flower Boy",
      grammy: false,
      date: "07/21/2017",
      year: 2017,
      hat: true,
    },
    {
      name: "IGOR",
      grammy: true,
      dateReleased: "5/17/2019",
      year: 2019,
      hat: false,
    },
    {
      name: "CALL ME IF YOU GET LOST",
      grammy: true,
      date: "6/25/2021",
      year: 2021,
      hat: true,
    },
    {
      name: "CALL ME IF YOU GET LOST: The Estate Sale",
      grammy: false,
      date: "3/31/2023",
      year: 2023,
      hat: true,
    },
  ],
};

// MILD
// 1: Return a string with the names of every movie
// Answer
// [
//   'The Fast and the Furious: Tokyo Drift',
//   '2 Fast 2 Furious',
//   'Fast & Furious',
//   'The Fast and the Furious',
//   'Fast Five',
//   'Fast & Furious 6',
//   'Furious 7',
//   'The Fate of the Furious',
//   'Fast X',
//   'F9'
// ]

const movieNames = fastAndFurious.map((movie) => movie.name);

console.log(movieNames);


// 2. Return an array of only the movie Ludacris is not in
// Answer :
//  [
  //   {
//     name: 'Fast & Furious',
//     date: '04/0/2009',
//     ludacris: false,
//     wizKhalifaSingle: false,
//     moneyStuff: { budget: 85000000, boxOffice: 360400000 }
//   },
//   {
//     name: 'The Fast and the Furious',
//     date: 0.0001362954886193267,
//     ludacris: false,
//     wizKhalifaSingle: false,
//     moneyStuff: { budget: 38000000, boxOffice: 207517509 }
//   }
// ]

const moviesWithoutLudacris = fastAndFurious.filter((movie) => movie.ludacris);

console.log(moviesWithoutLudacris);

//3 Write a function that returns the box office of a given movie based on the title
// answer: getBoxOffice('The Fate of the Furious') => 1236000000
// getBoxOffice("The Fast and the Furious: Tokyo Drift") => 159000000

const getBoxOffice = (movieName) => {
  return fastAndFurious.find((movie) => movie.name === movieName).moneyStuff
    .boxOffice;
};

console.log(getBoxOffice("The Fate of the Furious"));

// MED
// 1: Return the average budget of a Fast and Furious movie as a string
// Answer "The average Fast and Furious cost 133700000 dollars"

const averageBudget = () => {
  let budget =
    fastAndFurious.reduce((acc, curr) => (acc += curr.moneyStuff.budget), 0) /
    fastAndFurious.length;
  return `The average Fast and Furious cost ${budget.toLocaleString()} dollars`;
};

console.log(averageBudget());

// 2: Use iterator methods to return the string of the most profitable Fast and Furious and how much it made
// "Furious 7 made 1285000000 dollars"
// BONUS if you can format it like this: "Furious 7 made $1,285,000,000 dollars"  --- (also holy shit)

const mostProfitableMovie = () => {
  fastAndFurious.map((movie) => {
    movie.profit = movie.moneyStuff.boxOffice - movie.moneyStuff.budget;
  });
  let sorted = fastAndFurious.sort((a, b) => b.profit - a.profit)[0];
  return `${sorted.name} made $${sorted.profit.toLocaleString()} dollars`;
};

console.log(mostProfitableMovie());

//SPICY
// 1. Compare the average profit of a movie that included both wiz Khalifa and Ludacris versus one that had neither of them
// Answer 730774578.83

const wizLudacrisProfit = () => {
  let wizLuda = fastAndFurious.filter(
    (movie) => movie.ludacris && movie.wizKhalifaSingle
  );

  let wizLudaProfit = wizLuda.reduce((acc, curr) => {
    acc +=
      (curr.moneyStuff.boxOffice - curr.moneyStuff.budget) / wizLuda.length;
    return acc;
  }, 0);

  let noWizLuda = fastAndFurious.filter(
    (movie) => !movie.ludacris && !movie.wizKhalifaSingle
  );

  let noWizLudaProfit = noWizLuda.reduce((acc, curr) => {
    acc +=
      (curr.moneyStuff.boxOffice - curr.moneyStuff.budget) / noWizLuda.length;
    return acc;
  }, 0);
  if (wizLudaProfit > noWizLudaProfit) {
    return `On average the Fast & Furious movies made ${(
      wizLudaProfit - noWizLudaProfit
    ).toFixed(2)} more with Wiz Khalifa and Ludacris`;
  }
  return `On average the Fast & Furious movies made ${(
    noWizLudaProfit - wizLudaProfit
  ).toFixed(2)} more with Wiz Khalifa and Ludacris`;
};

console.log(wizLudacrisProfit());

// (While not technically a Fast anf Furious, "Hobbes and Shaw" starring Dwayne "the Rock" Johnson, is part of the 
// greater F&F cinematic universe. Add it to the array.)

//   {
//   name: "Hobbes and Shaw",
//   date: "08/2/2019",
//   ludacris: false,
//   wizKhalifaSingle: false,
//   moneyStuff: {
//     budget: 200000000,
//     boxOffice: 760700000
//   }
// }

// 2. Install Date.js. Sort the movies by date. Print an array of their names
// Answer: 
// [
//   'The Fast and the Furious',
//   '2 Fast 2 Furious',
//   'The Fast and the Furious: Tokyo Drift',
//   'Fast & Furious',
//   'Fast Five',
//   'Fast & Furious 6',
//   'Furious 7',
//   'The Fate of the Furious',
//   'Hobbes and Shaw'
//   'F9',
//   'Fast X'
// ]

const sortByDate = () => {
  const arr = fastAndFurious.map((movie) => ({
    ...movie,
    date: new Date(movie.date),
  }));
  return arr
    .sort((a, b) => Number(a.date) - Number(b.date))
    .map((movie) => movie.name);
};

console.log(sortByDate());

// XXX Spicy

// 1. Import tylerTheCreator.

// 2. Write a function that takes in the name of a Fast and Furious Moive and returns the album tyler dropped that year
// Answer:
//  findMovie('Fast X') ==> ' CALL ME IF YOU GET LOST: The Estate Sale '
//  findMovie("Furious 7") ==> "Cherry Bomb"
//  findMovie("The Fast and the Furious: Tokyo Drift") ==> "Tyler didn't drop an album that year!"