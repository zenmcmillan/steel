const restaurants = [
  { name: "Fruition Restaurant", type: "Fine Dining", number_of_reviews: 788, neighborhood: "Cap Hill" },
  { name: "Sushi Den", type: "Fine Dining", number_of_reviews: 479, neighborhood: "Platt Park" },
  { name: "Sam's No. 3", type: "Cheap Eats", number_of_reviews: 1870, neighborhood: "LoDo" },
  { name: "Pete's Kitchen", type: "Cheap Eats", number_of_reviews: 236, neighborhood: "City Park" },
  { name: "Root Down", type: "Lunch", number_of_reviews: 972, neighborhood: "Highlands" },
  { name: "The Capital Grille", type: "Lunch", number_of_reviews: 531, neighborhood: "LoDo" },
  { name: "Acorn", type: "Dinner", number_of_reviews: 309, neighborhood: "RiNo" },
  { name: "Panzano", type: "Dinner", number_of_reviews: 1316, neighborhood: "LoDo" }
]



//1. sum up the the total numer of restaurant reviews for all the restaurants.

//*EXPECTED OUTPUT*//
// 6501

const totalReviews = () => {
  return restaurants.reduce((acc, curr) => acc + curr["number_of_reviews"], 0);
};

totalReviews();

//=====================================================================

//2. Create an object where each property is the name of a restaurant and its key value is its number of reviews.

const organizeTotalReviews = () => {
  return restaurants.reduce((acc, curr) => {
    acc[curr.name] = curr["number_of_reviews"];
    return acc;
  }, {});
};

console.log(organizeTotalReviews());

//*EXPECTED OUTPUT*//
//{ 'Fruition Restaurant': 788,
// 'Sushi Den': 479,
// 'Sam\'s No. 3': 1870,
// 'Pete\'s Kitchen': 236,
// 'Root Down': 972,
// 'The Capital Grille': 531,
// Acorn: 309,
// Panzano: 1316 }


// ===================================================================

// 3. Make a new object where each key is a type of restaurant and its value is an array of the matching restaurants


//*EXPECTED OUTPUT*//
//  { Fine Dining: [ 'Fruition Restaurant', 'Fruition Restaurant', 'Sushi Den' ],
//   Cheap Eats: [ 'Sam\'s No. 3', 'Sam\'s No. 3', 'Pete\'s Kitchen' ],
//   Lunch: [ 'Root Down', 'Root Down', 'The Capital Grille' ],
//   Dinner: [ 'Acorn', 'Acorn', 'Panzano' ] }

const organizeByType = () => {
  return restaurants.reduce((acc, curr) => {
    acc[curr.type] = acc[curr.type] || [];
    acc[curr.type].push(curr.name);
    return acc;
  }, {});
};

console.log(organizeByType());


//S'MORE!

//2B Create an object where each property is the name of the restaurant
// and its key value is the neighborhood where its located.

  //*EXPECTED OUTPUT*//
// { 'Fruition Restaurant': 'Cap Hill',
// 'Sushi Den': 'Platt Park',
// 'Sam\'s No. 3': 'LoDo',
// 'Pete\'s Kitchen': 'City Park',
// 'Root Down': 'Highlands',
// 'The Capital Grille': 'LoDo',
// Acorn: 'RiNo',
// Panzano: 'LoDo' }

const locationEating = () => {
  return restaurants.reduce((acc, curr) => {
    acc[curr.name] = acc[curr.name] || curr.neighborhood;
    return acc;
  }, {});
};

console.log(locationEating());

//3B Create an object where each key is the neighborhood and its value is the name of each restaurant in that neighborhood.



//*EXPECTED OUTPUT*//
// { 'Cap Hill': [ 'Fruition Restaurant' ],
//   'Platt Park': [ 'Sushi Den' ],
//   LoDo: [ 'Sam\'s No. 3', 'The Capital Grille', 'Panzano' ],
//   'City Park': [ 'Pete\'s Kitchen' ],
//   Highlands: [ 'Root Down' ],
//   RiNo: [ 'Acorn' ] }

const areaEats = () => {
  return restaurants.reduce((acc, curr) => {
    acc[curr.neighborhood] = acc[curr.neighborhood] || [];
    acc[curr.neighborhood].push(curr.name);
    return acc;
  }, {});
};

console.log(areaEats());

















































































//SOLUTIONS


//1. sum up the the total numer of restaurant reviews for all the restaurants.

//=========EXPECTED OUTPUT===========//
// 6501


// const totalRevs = restaurants.reduce((totalRevs, restaurant) => {
//  totalRevs += restaurant.number_of_reviews
// return totalRevs
// },0)
// console.log(totalRevs)


//=====================================================================

//2. Create an object where each property is the name of a restaurant and its key value is its number of reviews.


//=========EXPECTED OUTPUT===========//
//{ 'Fruition Restaurant': 788,
// 'Sushi Den': 479,
// 'Sam\'s No. 3': 1870,
// 'Pete\'s Kitchen': 236,
// 'Root Down': 972,
// 'The Capital Grille': 531,
// Acorn: 309,
// Panzano: 1316 }


// const restReviews = restaurants.reduce((restReviews, restaurant) => {
// if(!restReviews[restaurant.name]){
//   restReviews[restaurant.name] = restaurant.number_of_reviews
// }
// return restReviews
// },{})


// ===================================================================

// 3. Make a new object where each property is a type of restaurant and its value is the matching restaurants


//=========EXPECTED OUTPUT===========//
//  { Fine Dining: [ 'Fruition Restaurant', 'Fruition Restaurant', 'Sushi Den' ],
//   Cheap Eats: [ 'Sam\'s No. 3', 'Sam\'s No. 3', 'Pete\'s Kitchen' ],
//   Lunch: [ 'Root Down', 'Root Down', 'The Capital Grille' ],
//   Dinner: [ 'Acorn', 'Acorn', 'Panzano' ] }




//  const restByType = restaurants.reduce((restByType, restaurant ) => {
//    if(!restByType[restaurant.type]){
//     restByType[restaurant.type] = [restaurant.name]
//    } restByType[restaurant.type].push(restaurant.name)
//    return restByType
//  },{})

