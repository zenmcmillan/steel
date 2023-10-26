var broncos = [
  {name: 'Kevin Hogan', pos: 'QB', status: 'active', side: 'offense', rating: 72}, 
  {name: 'Royce Freeman', pos: 'RB', status: 'active', side: 'offense', rating: 77}, 
  {name: 'DaeSean Hamilton', pos: 'WR', status: 'active', side: 'offense', rating: 85}, 
  {name: 'Will Parks', pos: 'FS', status: 'injured', side: 'defense', rating: 77}, 
  {name: 'Tim Patrick', pos: 'WR', status: 'active', side: 'offense', rating: 79}, 
  {name: 'Sam Jones', pos: 'RG', status: 'active', side: 'offense', rating: 78}, 
  {name: 'Courtland Sutton', pos: 'WR', status: 'active', side: 'offense', rating: 90}, 
  {name: 'Jake Butt', pos: 'TE', status: 'questionable', side: 'offense', rating: 78}, 
  {name: 'Todd Davis', pos: 'LB', status: 'active', side: 'defense', rating: 88}, 
  {name: 'Elijah Wilkinson', pos: 'LT', status: 'active', side: 'offense', rating: 84}, 
  {name: 'Ronald Leary', pos: 'LG', status: 'active', side: 'offense', rating: 79}, 
  {name: 'Phillip Lindsay', pos: 'RB', status: 'questionable', side: 'offense', rating: 88}, 
  {name: 'Nico Falah', pos: 'LG', status: 'injured', side: 'offense', rating: 81}, 
  {name: 'Joe Flacco', pos: 'QB', status: 'active', side: 'offense', rating: 90}, 
  {name: 'Connor McGovern', pos: 'C', status: 'active', side: 'offense', rating: 86}, 
  {name: 'Josey Jewell', pos: 'LB', status: 'active', side: 'defense', rating: 80}, 
  {name: 'Troy Fumagalli', pos: 'TE', status: 'active', side: 'offense', rating: 80}, 
  {name: 'Dymonte Thomas', pos: 'SS', status: 'active', side: 'defense', rating: 79}, 
  {name: 'Devontae Booker', pos: 'RB', status: 'active', side: 'offense', rating: 79}, 
  {name: 'Garett Bolles', pos: 'LT', status: 'active', side: 'offense', rating: 88}, 
  {name: 'Derek Wolfe', pos: 'DE', status: 'active', side: 'defense', rating: 83}, 
  {name: 'Kareem Jackson', pos: 'CB', status: 'active', side: 'defense', rating: 83}, 
  {name: 'Shelby Harris', pos: 'NT', status: 'active', side: 'defense', rating: 89}, 
  {name: 'Andy Janovich', pos: 'FB', status: 'active', side: 'offense', rating: 71}, 
  {name: 'Adam Gotsis', pos: 'DE', status: 'active', side: 'defense', rating: 80}, 
  {name: 'JaWuan James', pos: 'RT', status: 'active', side: 'offense', rating: 82}, 
  {name: 'Isaac Yiadom', pos: 'CB', status: 'questionable', side: 'defense', rating: 82}, 
  {name: 'Bradley Chubb', pos: 'LB', status: 'active', side: 'defense', rating: 82}, 
  {name: 'Von Miller', pos: 'LB', status: 'active', side: 'defense', rating: 95}, 
  {name: 'Will Parks', pos: 'SS', status: 'active', side: 'defense', rating: 84}, 
  {name: 'Shamarko Thomas', pos: 'FS', status: 'injured', side: 'defense', rating: 87},
  {name: 'Justin Simmons', pos: 'FS', status: 'active', side: 'defense', rating: 79}, 
  {name: 'Chris Harris Jr.', pos: 'CB', status: 'active', side: 'defense', rating: 88}
];

//return the name of the player with the highest rating

const playerWithHighestRating = () => {
  return broncos.sort((a, b) => b.rating - a.rating)[0].name;
};

console.log(playerWithHighestRating());

//return an array of the names of each player

const playerNames = () => {
  return broncos.map((person) => person.name);
};

console.log(playerNames());


//decrease injured players rating by 5, decrease questionable players rating by 1, and increase all other players rating by 2


const changeRating = () => {
  broncos.forEach((person) => {
    if (person.status === "injured") {
      person.rating -= 5;
    } else if (person.status === "questionable") {
      person.rating -= 1;
    } else person.rating += 2;
  });
  return broncos;
};

console.log(changeRating());

//return the total number of 'offense' players

const numberOfOffensePlayers = () => {
  return broncos.filter((person) => person.side === "offense").length;
};

console.log(numberOfOffensePlayers());

//return the total number of 'defense' players

const numberOfDefensePlayers = () => {
  return broncos.filter((person) => person.side === "defense").length;
};

console.log(numberOfDefensePlayers());

//create an object with the keys 'offense' and 'defense' and let their values equal the total number of players on their respective side.

const offenseDefense = () => {
  const offense = broncos.filter((person) => person.side === "offense").length;
  const defense = broncos.filter((person) => person.side === "defense").length;
  return { offense, defense };
};

console.log(offenseDefense());

//create an array of offense players sorted by rating; high-low
//create an array of cornerbacks, 'CB', sorted by rating; high-low

//create an array of players on 'injured' status
//create an array of players on 'questionable' status
//return the length of broncos players that are not on 'injured' or 'questionable' status

