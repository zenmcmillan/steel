const artists = [
  { name: 'SG Lewis', label: 'atlantic' },
  { name: 'HONNE', label: 'virgin' },
  { name: 'BORNS', label: 'capital' },
  { name: 'Leisure', label: 'capital' },
  { name: 'St. Lucia', label: 'capital' },
  { name: 'Gallant', label: 'capital' },
  { name: 'Marcus Marr', label: 'virgin' },
  { name: 'Penguin Prison', label: 'atlantic' },
  { name: 'Future Islands', label: 'atlantic' },
  { name: 'Roosevelt', label: 'capital' },
  { name: 'Jack Garratt', label: 'capital' },
  { name: 'Chet Faker', label: 'virgin' },
  { name: 'Sam Sparro', label: 'virgin' }
];

const ticketPrice = {
  atlantic: 20,
  virgin: 25,
  capital: 30
};

const crowd = {
  atlantic: 20,
  virgin: 100,
  capital: 100100000,
}


//Level 1

//Question 1:
// Return an array of just the artists names



//Question 2:

// Write a function that takes a name as a parameter and returns the first artist where the name matches .  ex. findByName('Jack Garratt')


//Question 3:

// Write some code to add the appropriate ticket price to each artist.



//Question  4:

// Write a function that takes a label as a parameter and returns an array containing all the artists of that label .  ex. getByLabel('atlantic')



//Question 5:

// Write some code to determine how much it would cost to go to all to the shows



//Question 6:

// Make an object containing each label as keys and all the associated artists in an array as the value.



//Question 7:
//write some code that will add the crowdsize to each artist





















//////////////////ANSWERS/////////////////////
















//Question 1:

// let artistsNames = artists.map(currentArtist =>  currentArtist.name);
// console.log(artistsNames)



// Question 2:

// function findName(name)  {
//    return artists.find(artist => artist.name === name)
// } 

// findName('Roosevelt')

// findName('Chet Faker')


//Question 3:


// multiple answers:

// artists.map(artist => {
//   artist.concertPrice = ticketPrice[artist.label];
//   return {name: artist.name, cost: artist.concertPrice}
// } )

// artists.map(artist => {
//   return {name: artist.name, price: ticketPrice[artist.label]}
// })

// artists.map(artist => {
//   artist.concertPrice = ticketPrice[artist.label]
//   return artist
// })




// Question 7:

// let crowdSize = artists.map(artist => {
//   return { name: artist.name, crowd: crowd[artist.label]}
// })
// console.log(crowdSize)