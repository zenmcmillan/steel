// Courtesy of Jacob Bogart

const queens = [
  {
    "id": 55,
    "name": "Lineysha Sparx",
    "winner": false,
    "missCongeniality": false,
    "quote": "Don't worry, she thinks she's fashion but... She dresses like a Dracula",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 9
      }
    ]
  },
  {
    "id": 53,
    "name": "Vivienne Pinay",
    "winner": false,
    "missCongeniality": false,
    "quote": "Vivienne is all about glamour. My beauty is everything.",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 11
      }
    ]
  },
  {
    "id": 52,
    "name": "Monica Beverly Hillz",
    "winner": false,
    "missCongeniality": false,
    "quote": "I'm Monica Beverly Hillz with a z.",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 12
      }
    ]
  },
  {
    "id": 59,
    "name": "Coco Montrese",
    "winner": false,
    "missCongeniality": false,
    "quote": "I'm not joking bitch!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 5
      }
    ]
  },
  {
    "id": 57,
    "name": "Ivy Winters",
    "winner": false,
    "missCongeniality": true,
    "quote": "Hey ladies! Oh my god!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 7
      }
    ]
  },
  {
    "id": 61,
    "name": "Roxxy Andrews",
    "winner": false,
    "missCongeniality": false,
    "quote": "When life pulls you down, put on a shiny sequence gown",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 3
      }
    ]
  },
  {
    "id": 60,
    "name": "Detox Icunt",
    "winner": false,
    "missCongeniality": false,
    "quote": "I have HAD IT... officially!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 4
      }
    ]
  },
  {
    "id": 58,
    "name": "Alyssa Edwards",
    "winner": false,
    "missCongeniality": false,
    "quote": "BACKROLLS?!?!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 6
      }
    ]
  },
  {
    "id": 51,
    "name": "Serena Cha Cha",
    "winner": false,
    "missCongeniality": false,
    "quote": "Does it bother you I keep saying I'm 21?!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 13
      }
    ]
  },
  {
    "id": 54,
    "name": "Honey Mahogany",
    "winner": false,
    "missCongeniality": false,
    "quote": "Hey sisters!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 10
      }
    ]
  },
  {
    "id": 50,
    "name": "Penny Tration",
    "winner": false,
    "missCongeniality": false,
    "quote": "Hello boys!",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 14
      }
    ]
  },
  {
    "id": 56,
    "name": "Jade Jolie",
    "winner": false,
    "missCongeniality": false,
    "quote": "Serving up fish, tuna on a platter.",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 8
      }
    ]
  },
  {
    "id": 63,
    "name": "Jinkx Monsoon",
    "winner": true,
    "missCongeniality": false,
    "quote": "I am Seattle's premiere Jewish narcoleptic drag queen, thank you.",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 1
      }
    ]
  },
  {
    "id": 62,
    "name": "Alaska Thunderfuck 5000",
    "winner": false,
    "missCongeniality": false,
    "quote": "I'll send you 10,000 dollars via PayPal if you let me stay in this competition",
    "seasons": [
      {
        "seasonNumber": "5",
        "id": 6,
        "place": 2
      }
    ]
  }
]

//1.  Write a function that returns an array of queen names in alphabetical order.

const queenNamesInOrder = () => {
  return queens.sort((a, b) => {
    if (a["name"] < b["name"]) {
      return -1;
    }
    if (a["name"] > b["name"]) {
      return 1;
    }
    return 0;
  });
};

console.log(queenNamesInOrder());

// 2. Write a fuction that returns the name of Miss Congeniality

const missCongeniality = () => {
  return queens.find((person) => person["missCongeniality"]).name;
};

console.log(missCongeniality());

// 3. Write a fuction that takes in an id and returns the string "[Queen's Name] placed [fifth, eleventh, ect...] in Season [Season number] of RuPaul's Drag Race."

const queenInfo = (id) => {
  const queen = queens.find((person) => person.id === id);
  if (queen.seasons[0].place === 1) {
    return `${queen.name} placed 1st in Season ${queen.seasons[0].seasonNumber} of Ru Paul's Drag Race.`;
  } else if (queen.seasons[0].place === 2) {
    return `${queen.name} placed 2nd in Season ${queen.seasons[0].seasonNumber} of Ru Paul's Drag Race.`;
  } else if (queen.seasons[0].place === 3) {
    return `${queen.name} placed 3rd in Season ${queen.seasons[0].seasonNumber} of Ru Paul's Drag`;
  }
  return `${queen.name} placed ${queen.seasons[0].place}th in Season ${queen.seasons[0].seasonNumber} of Ru Paul's Drag`;
};

console.log(queenInfo(63));



// 4. Write a function that returns an an object where the keys are first names of each queen and the value is their quote. ie:
// { Alaska: "Alaksa's Quote",
//   Roxxy: "Roxxy's Quote",
//   Detox: "Detox's Quote"}

const queenQuotes = () => {
  return queens.reduce((acc, curr) => {
    acc[curr.name] = acc[curr.name] || curr.quote;
    return acc;
  }, {});
};

console.log(queenQuotes());


// 5. Write a functions that returns an object of the top three finishers ie: 
// { firstPlace: name, 
// secondPlace: name,  
// thirdPlace: name }
// Extension: Make sure the object is in that exact order

const top3Finishers = () => {
  const winners = queens.filter(
    (person) => person.seasons[0].place >= 1 && person.seasons[0].place <= 3
  );
  return winners.reduce(
    (acc, curr) => {
      curr.seasons[0].place === 1 ? (acc.firstPlace = curr.name) : "";
      curr.seasons[0].place === 2 ? (acc.secondPlace = curr.name) : "";
      curr.seasons[0].place === 3 ? (acc.thirdPlace = curr.name) : "";
      return acc;
    },
    { firstPlace: null, secondPlace: null, thirdPlace: null }
  );
};

console.log(top3Finishers());















































//////////// SOLUTIONS ///////////////

// 1. 
// function sortQueenNames() {
//   return queens.map(queen => queen.name).sort()
// }

// sortQueenNames()


// 2.
// function findMissCon() {
//   return queens.find(queen => queen.missCongeniality).name
// }

// findMissCon()


// 3.
// function generateStringById(id) {
//   targetQueen = queens.find(queen => queen.id === id);
//   let { name, } = targetQueen;
//   let { seasonNumber, place } = targetQueen.seasons[0];
//   let places = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth'];

//   return `${name} placed ${places[place + 1]} in Season ${seasonNumber} of RuPaul's Drag Race.`
// }

// generateStringById(62)


// 4.
// const getQueenQuotes = () => {
//   return queens.reduce((acc, queen) => {
//     const {name, quote} = queen;
//     acc[name] = quote;
//     return acc;
//   }, {});
// }
















// 5.
// const sortedQueensByQuotes = getQueenQuotes().sort((queenA, queenB) => {
//   console.log('A: ', queenA.quote.length);
//   console.log('B: ', queenB.quote.length);
//   console.log('Longer?: ', queenA.quote.length < queenB.quote.length);
//   return queenA.quote.length - queenB.quote.length;
// })



// sortedQueensByQuotes()















// 6. 
// const getTopThreeQueens = () => {
//   return queens.reduce((acc, currentQueen) => {
//     const nums = ['first', 'second', 'third'];
//     const {name} = currentQueen;
//     const place = parseInt(currentQueen.seasons[0].place);
//     if (place <= 3) {
//       acc[nums[place - 1] + 'Place'] = name;
//       return acc;
//     } else {
//       return acc;
//     }
//   }, {});
// }

// getTopThreeQueens()