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


const tylersHat = tylerTheCreator.albums
  .filter((album) => album.hat)
  .map((album) => album.name);

console.log(tylersHat);

// 2: Whats the most recent year Tyler released an album with a hat on?
// Answer: 2023


const mostRecentAlbumYearWithHat = tylerTheCreator.albums
  .filter((album) => album.hat)
  .sort((a, b) => b.year - a.year)[0].year;

console.log(mostRecentAlbumYearWithHat);


// 3: Whats the name of Tylers first grammy winning album?
// Answer: "IGOR"

const tylersFirstGrammyWinningAlbum = () => {
  const album = tylerTheCreator.albums.filter((album) => album.grammy);
  return album[0].name;
};

console.log(tylersFirstGrammyWinningAlbum());

// MED

// 1: How old was tyler when he released "Wolf"?
// (assume his birthday is Jan 1st. )
// Answer: 22

const tylersAgeWolfAlbum = (albumName) => {
  return (
    tylerTheCreator.albums.find((album) => album.name === albumName).year - 1991
  );
};

console.log(tylersAgeWolfAlbum("Wolf"));


// 2: return a string with the percent of his albums that have won grammys

const percentOfAlbumsThatWonGrammys = () => {
  let albums = tylerTheCreator.albums.length;
  let grammies = tylerTheCreator.albums.filter((album) => album.grammy).length;
  return `${(((grammies / albums) * 100) / 1).toFixed(2)}%`;
};

console.log(percentOfAlbumsThatWonGrammys());

// 3: return an object for the album Goblin, which has its name, year and the amount of letters in the title
// Answer: {name: "Goblin", year: 2011, numOfLetters: 6 }

const goblinInfo = () => {
  let album1 = tylerTheCreator.albums.find((album) => album.name == "Goblin");
  let album = {
    name: album1.name,
    year: album1.year,
    numOfletters: album1.name.length,
  };
  return album;
};

console.log(goblinInfo());

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

const organizeAlbums = () => {
  result = { hat: [], noHat: [] };
  let hasHat = tylerTheCreator.albums.filter((album) => album.hat);
  let nonHat = tylerTheCreator.albums.filter((album) => !album.hat);

  let hasHatData = hasHat.map((album) => ({
    name: album.name,
    year: album.year,
  }));
  hasHatData.forEach((element) => {
    result.hat.push(element);
  });

  let nonHatData = nonHat.map((album) => ({
    name: album.name,
    year: album.year,
  }));
  nonHatData.forEach((element) => {
    result.noHat.push(element);
  });
  return result;
};

console.log(organizeAlbums());

// Better Answer

const organizeAlbums2 = () => {
  return tylerTheCreator.albums.reduce(
    (acc, curr) => {
      const albumInfo = { name: curr.name, year: curr.year };
      curr.hat ? acc.hat.push(albumInfo) : acc.noHat.push(albumInfo);
      return acc;
    },
    { hat: [], noHat: [] }
  );
};

console.log(organizeAlbums2());

