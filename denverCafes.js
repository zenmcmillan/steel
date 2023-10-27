const denverCoffeeShops = {
  'Crema Coffe House': {
    neighborhood: 'RiNo',
    isOpen: true,
    stars: 4.6
  },
  'Blue Sparrow': {
    neighborhood: 'RiNo',
    isOpen: false,
    stars: 4.7
  },
  'St. Marks Coffee House': {
    neighborhood: 'City Park',
    isOpen: true,
    stars: 4.5
  },
  'Maci Cafe': {
    neighborhood: 'LoHi',
    isOpen: true,
    stars: 4.8
  },
  'Hooked on Colfax': {
    neighborhood: 'City Park',
    isOpen: false,
    stars: 4.6
  },
   'Rooster Cat Coffee House': {
    neighborhood: 'Cap Hill',
    isOpen: false,
    stars: 4.6
  },
  'The Weathervane Cafe': {
    neighborhood: 'City Park',
    isOpen: true,
    stars: 4.8
  },
  'Black Eye Coffee': {
    neighborhood: 'LoHi',
    isOpen: false,
    stars: 4.5
  }
};


// Write a function that takes in a neighborhood, and returns the name of the first cofffee house in that neighborhood. 
// Example: fn(coffeeShops, 'City Park') -> 'St. Marks Coffee House'

const findNeighborhoodCoffee = (area) => {
  return Object.keys(denverCoffeeShops).find(
    (place) => denverCoffeeShops[place].neighborhood === area
  );
};

console.log(findNeighborhoodCoffee("City Park"));

// Refactor your function to include a message if no coffee shop is found in that neighborhood. 
// Example fn(coffeeShops, 'Baker') -> Sorry, we can't find any coffee shops in Baker! 

const findNeighborhoodCoffee2 = (area) => {
  const place = Object.keys(denverCoffeeShops).find(
    (place) => denverCoffeeShops[place].neighborhood === area
  );
  return !place ? `Sorry, we can't find any other shops in ${area}` : place;
};

console.log(findNeighborhoodCoffee2("Baker"));
console.log(findNeighborhoodCoffee2("City Park"));

// Refactor your function to return an array of all coffee shops in the given neighborhood instead of just the first one. 
// Example: fn(coffeeShops, 'Congress Park') -> ['St. Marks Coffee House', 'Hooked on Colfax', 'The Weathervane Cafe'];

const findNeighborhoodCoffeeShops = (area) => {
  const place = Object.keys(denverCoffeeShops).filter(
    (place) => denverCoffeeShops[place].neighborhood === area
  );
  return !place ? `Sorry, we can't find any other shops in ${area}` : place;
};

console.log(findNeighborhoodCoffeeShops("City Park"));

// Refactor your function to only include the matching coffee shops that are currently open. 
// Example: fn(coffeeShops, 'City Park') -> ['St. Marks Coffee House', 'The Weathervane Cafe'];

const findNeighborhoodCoffeeShops2 = (area) => {
  const place = Object.keys(denverCoffeeShops).filter(
    (place) =>
      denverCoffeeShops[place].neighborhood === area &&
      denverCoffeeShops[place].isOpen
  );
  return !place ? `Sorry, we can't find any other shops in ${area}` : place;
};

console.log(findNeighborhoodCoffeeShops2("City Park"));

// Refactor your function so that if there are multiple coffee shop matches (matches both neighborhood and is open) the one with the highest rating will be returned. 
// Example: fn(coffeeShops, 'City Park') -> 'The Weathervane Cafe'

const findShop = (area) => {
  let arr = [];
  Object.keys(denverCoffeeShops).reduce((acc, curr) => {
    denverCoffeeShops[curr].shop = curr;
    arr.push(denverCoffeeShops[curr]);
    return acc;
  });
  const sorted = arr.sort((a, b) => b.stars - a.stars);
  const chosenPlaces = sorted.filter(
    (place) => place.neighborhood === area && place.isOpen
  );
  if (!chosenPlaces.length) {
    return `Sorry, we can't find any other shops in ${area}`;
  }
  return chosenPlaces[0].shop;
};

console.log(findShop("City Park"));
