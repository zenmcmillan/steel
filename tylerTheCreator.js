let tylerTheCreator = {   
    currentAge: 32,
    albums: [
    {
    name: "Goblin",
    grammy: false,
    date: "5/11/2011",
    year: 2011,
    hat: true
    },
    {
    name: "Wolf",
    grammy: false,
    date: "4-2-2013",
    year: 2013,
    hat: true
    },
    {
    name: "Cherry Bomb",
    grammy: false,
    date: "07/21/17",
    year: 2015,
    hat: false
    },
    {
    name: "Flower Boy",
    grammy: false,
    date: "07/21/2017",
    year: 2017,
    hat: true
    },
    {
    name: "IGOR",
    grammy: true,
    dateReleased: "5/17/2019",
    year: 2019,
    hat: false
    },
    {
    name: "CALL ME IF YOU GET LOST",
    grammy: true,
    date: "6/25/2021",
    year: 2021,
    hat: true
    },
    {
    name: "CALL ME IF YOU GET LOST: The Estate Sale",
    grammy: false,
    date: "3/31/2023",
    year: 2023,
    hat: true
    }]
}

// MILD

// 1: return an array of albums that tyler wore a hat on
// Answer: ["Wolf", "Flower Boy", "CALL ME IF YOU GET LOST", "CALL ME IF YOU GET LOST: The Estate Sale"]


// 2: Whats the most recent year Tyler released an album with a hat on?
// Answer: 2023


// 3: Whats the name of Tylers first grammy winning album?
// Answer: "IGOR"


// MED

// 1: How old was tyler when he released "Wolf"?
// (assume his birthday is Jan 1st. )
// Answer: 22


// 2: return a string with the percent of his albums that have won grammys
//


// 3: return an object for the album Goblin, which has its name, year and the amount of letters in the title
// Answer: {name: "Goblin", year: 2011, numOfLetters: 6 }


// SPICY

// 1: return a new object that stores the albums by whether or not Tyler wore a hat on them, by name and year
// Answer: 
//   { 
//     hat: [
//     { name: 'Goblin', year: 2011 },
//     { name: 'Wolf', year: 2013 },
//     { name: 'Flower Boy', year: 2017 },
//     { name: 'CALL ME IF YOU GET LOST', year: 2021 },
//     { name: 'CALL ME IF YOU GET LOST: The Estate Sale', year: 2023 }
//   ],
//     noHat: [ { name: 'CHerry Bomb', year: 2015 }, { name: 'IGOR', year: 2019 } ]
// }