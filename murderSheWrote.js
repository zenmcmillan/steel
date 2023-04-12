const murder = {
  "bestShow": "Murder, She Wrote",
  "location": "Cabot Cove, Maine",
  "yearEst": 1984,
  "numOfEpisodes": 264,
  "topFiveEpisodes": [
    {
      name: "Birds of a Feather",
      season: 1,
      episode: 2,
      synopsis: "Drag murderer suspect",
      culturallyInsensitive: true,
      guestStars: [
        "Jeff Conaway",
        "Gabe Kaplan",
        "Martin Landau"
      ]
    },
    {
      name: "My Johnny Lies Over the Ocean",
      season: 1,
      episode: 13,
      synopsis: "Mayhem at sea",
      culturallyInsensitive: false,
      guestStars: [
        "Vicki Lawrence",
        "Leslie Nielsen",
        "Jo Anne Worley"
      ]
    },
    {
      name: "Menace, Anyone?",
      season: 2,
      episode: 20,
      synopsis: "Tennis star scandal",
      culturallyInsensitive: false,
      guestStars: [
        "Bryan Cranston",
        "Linda Hamilton",
        "David Spielberg"
      ]
    },
    {
      name: "Magnum on Ice ",
      season: 3,
      episode: 8,
      synopsis: "Magnum PI crossover",
      culturallyInsensitive: false,
      guestStars: [
        "John McMartin",
        "Tom Selleck",
        "Jessica Walter"
      ]
    },
    {
      name: "Curse of the Daanav",
      season: 4,
      episode: 14,
      synopsis: "Cursed Indian ruby",
      culturallyInsensitive: true,
      guestStars: [
        "Jane Badler",
        "Kabir Bedi",
        "Larry Linville"
      ]
    }
  ]
}

//Level 1

//Problem 1
//Return an array of episodes that are culturallyInsensitive


//Problem 2
//Return the episode that includes Magnum PI


//Problem 3
//Return an array of all stars in the top five episodes array



//Level 2

//Problem 1
// Return an array of objects with just the name and the guest stars for each episode
//e.g. [{name: "My Johnny Lies Over the Ocean",
  //guestStars: [
    //   "Vicki Lawrence",
    //   "Leslie Nielsen",
    //   "Jo Anne Worley"
    // ]}, 
    // {name: "Menace, Anyone?",
    // guestStars: [
    //     "Bryan Cranston",
    //     "Linda Hamilton",
    //     "David Spielberg"
    //   ]}...
    // ]




// Problem 2
// Return an Array of Objects with the name of the 
// episode as the key and the synopsis as the value, 
// e.g. [{"Curse of the Daanav": "Cursed Indian ruby"}, {"Magnum on Ice ":"Magnum PI crossover"}...]




// Problem 3
// Return one Object with all the guest stars


//Level 3

// Problem 1
//return an object with the episode names as keys and the co-stars as an array 
// e.g {
//  "Curse of the Daanav": [        
      // "Jane Badler",
      // "Kabir Bedi",
      // "Larry Linville"],
//  "Magnum on Ice ": [        
        // "John McMartin",
        // "Tom Selleck",
        // "Jessica Walter"]
// }








//////////////////// ANSWERS BELOW ////////////////////

























































//Possible answers:
//Return an array of episodes that are culturallyInsensitive

// function insesitiveEpisodes(murder){
//   const episodes = murder.topFiveEpisodes
//   let culturallyInsensitive = episodes.filter((episode) => {
//     return episode.culturallyInsensitive
//   }) 
//   return culturallyInsensitive
// }

// insesitiveEpisodes(murder)



//Return the episode that inclueds Magnum PI
// function incluedsMagnum(murder) {
//   const result = 'result here';
//   return result
// }

// function includesMagnum(murder) {
//   const episodes = murder.topFiveEpisodes
//   const nameMatch = episodes.find((episode) => {
//     return episode.name.includes('Magnum')
//   })
//   return nameMatch
// }

// includesMagnum(murder)

//Return an array of all stars in the top five episodes array
// function allStars(murder) {
//   const result = 'result here';
//   return result
// }

// function allStars(murder) {
//   const episodes = murder.topFiveEpisodes
//   const allNames = episodes.reduce((acc, episode) => {
//     acc.push(...episode.guestStars)
//     return acc
//   }, [])
//   return allNames
// }

// allStars(murder)
