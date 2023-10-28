const characters = [
  {
    name: 'Kurt',
    health: function() {
			return Math.floor(Math.random() * 10 + 30)
		},
    mana: 300,
    profession: 'Pale Master',
    weapons: ['magebane', 'whip', 'axe', 'potion'],
    home: 'Earth',
  },
  {
    name: 'Brandon',
    health: function() {
			return Math.floor(Math.random() * 10 + 39)
		},
    mana: 470,
    profession: 'Bard',
    weapons: ['crossbow', 'axe', 'halbred', 'skateboard', 'magebane'],
    home: 'Fire',
  },
  {
    name: 'Laura',
    health: function() {
			return Math.floor(Math.random() * 10 + 32)
		},
    mana: 530,
    profession: 'Cleric',
    weapons: ['bow', 'magebane', 'computer', 'hair', 'potion'],
    home: 'Water',
  },
  {
    name: 'Kiel',
    health: function() {
			return Math.floor(Math.random() * 10 + 34)
		},
    mana: 410,
    profession: 'Paladin',
    weapons: ['axe', 'halbred', 'magebane', 'hair'],
    home: 'Earth',
  },
  {
    name: 'Gray',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 490,
    profession: 'Dark Wizard',
    weapons: ['magebane', 'bow', 'knife', 'computer'],
    home: 'Fire',
  },
  {
    name: 'Ben',
    health: function() {
			return Math.floor(Math.random() * 10 + 35)
		},
    mana: 130,
    profession: 'Low Peasant',
    weapons: ['whip', 'rifle', 'knife', 'hat', 'potion'],
    home: 'Earth',
  },
  {
    name: 'Mike',
    health:function() {
			return Math.floor(Math.random() * 10 + 34)
		},
    mana: 500,
    profession: 'Court Jester',
    weapons: ['computer', 'hair', 'rifle', 'potion'],
    home: 'Fire',
  },
  {
    name: 'Paul',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},
    mana: 390,
    profession: 'Monk',
    weapons: ['computer', 'magebane', 'rifle', 'hat'],
    home: 'Air',
  },
  {
    name: 'Cody',
    health:function() {
			return Math.floor(Math.random() * 10 + 32)
		},
    mana: 330,
    profession: 'ShadowDancer',
    weapons: ['crossbow', 'knife', 'knife', 'magebane'],
    home: 'Water',
  },
  {
    name: 'Alex',
    health: function() {
			return Math.floor(Math.random() * 10 + 30)
		},
    mana: 470,
    profession: 'Necromancer',
    weapons: ['computer', 'knife', 'glasses', 'potion'],
    home: 'Air',
  },
  {
    name: 'Timf',
    health: function() {
			return Math.floor(Math.random() * 10 + 34)
		},
    mana: 430,
    profession: 'Druid',
    weapons: ['rifle', 'hair', 'magebane', 'knife'],
    home: 'Earth',
  },
  {
    name: 'Nick',
    health: function() {
			return Math.floor(Math.random() * 10 + 40)
		},
    mana: 450,
    profession: 'Sorcerer',
    weapons: ['bow', 'axe', 'rifle', 'glasses', 'potion'],
    home: 'Fire',
  },
  {
    name: 'Dennis',
    health: function() {
			return Math.floor(Math.random() * 10 + 36)
		},    
    mana: 340,
    profession: 'Dark Knight',
    weapons: ['whip', 'rifle', 'glasses', 'halbred'],
    home: 'Water',
  },
  {
    name: 'Tom',
    health: function() {
			return Math.floor(Math.random() * 10 + 37)
		},    
    mana: 391,
    profession: 'Ranger',
    weapons: ['bow', 'crossbow', 'knife', 'computer'],
    home: 'fire',
  },
  {
    name: 'Justin',
    health:function() {
			return Math.floor(Math.random() * 10 + 29)
		},    
    mana: 391,
    profession: 'Ranger',
    weapons: ['bow', 'crossbow', 'potion'],
    home: 'fire',
  },
  {
    name: 'Jesse',
    health: function() {
			return Math.floor(Math.random() * 10 + 31)
		},    
    mana: 391,
    profession: 'Blacksmith',
    weapons: ['whip', 'crossbow', 'knife', 'computer'],
    home: 'Earth',
  },
  {
    name: 'Chris',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},    
    mana: 391,
    profession: 'Dwarven Defender',
    weapons: ['axe', 'crossbow', 'knife', 'computer'],
    home: 'Earth',
  },
  {
    name: 'Megan',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},    
    mana: 391,
    profession: 'Apothecarist',
    weapons: ['magebane', 'crossbow', 'hair', 'potion'],
    home: 'Water',
  },
  {
    name: 'Haley',
    health: function() {
			return Math.floor(Math.random() * 10 + 33)
		},    
    mana: 391,
    profession: 'Sorceress',
    weapons: ['bow', 'magebane', 'glasses', 'hair', 'potion'],
    home: 'Water',
  },
  {
    name: 'Todd',
    health: function() {
			return Math.floor(Math.random() * 10 + 32)
		},    
    mana: 391,
    profession: 'Squire',
    weapons: ['bow', 'crossbow', 'knife', 'computer'],
    home: 'Air',
  }
];

const weapons = {
  magebane : {
    damage: 9,
    range: 3,
    durability: 16
   },
   potion : {
    damage: 7,
    range: 2,
    durability: 3
   },
  whip: {
    damage: 10,
    range: 5,
    durability: 7
  },
  axe: {
    damage: 8,
    range: 16,
    durability: 9
  },
  glasses: {
    damage: 0,
    range: 30,
    durability: 4
  },
  crossbow: {
    damage: 10,
    range: 25,
    durability: 10
  },
  halbred: {
    damage: 10,
    range: 5,
    durability: 12
  },
  bow: {
    damage: 12,
    range: 31,
    durability: 10
  },
  rifle: {
    damage: 15,
    range: 50,
    durability: 20
  },
  knife: {
    damage: 9,
    range: 2,
    durability: 5
  },
  hair: {
    damage: 5,
    range: 20,
    durability: 25
  },
  hat: {
    damage: 1,
    range: 1,
    durability: 15
  },
  computer: {
    damage: 12,
    range: 100,
    durability: 2
  },
  skateboard: {
    damage: 3,
    range: 8,
    durability: 9
  }
}



//  1) Return the sum of the amount of damage for all the weapons that our characters can use 
/// 750

const sumOfAllDamages = () => {
  return characters.reduce((acc, curr) => {
    curr.weapons.forEach((weapon) => {
      acc += weapons[weapon].damage;
    });
    return acc;
  }, 0);
};

console.log(sumOfAllDamages());

//  2) Return the sum damage, total range, and total durability for each character as an object. 
//// [ { Ben: { damage: 35, range: 58, durability: 47 } }, { Cody: {...}, ...}


const damageRangeEtc = () => {
  return characters.reduce((acc, curr) => {
    acc[curr.name] = acc[curr.name] || { damage: 0, range: 0, durability: 0 };
    curr.weapons.forEach((weapon) => {
      acc[curr.name].damage += weapons[weapon].damage;
      acc[curr.name].range += weapons[weapon].range;
      acc[curr.name].durability += weapons[weapon].durability;
    });
    return acc;
  }, {});
};

console.log(damageRangeEtc());

//  3) Write a function that takes in a character name as an input and returns the weapons it can use and its total damage and range.
// characterStats('Ben') //// {weapons: [magebane, whip, axe], damage: 113, range: 34}

const characterWeapons = (name) => {
  return characters
    .filter((person) => person.name === name)
    .reduce(
      (acc, curr) => {
        acc.weapons = curr.weapons;
        curr.weapons.forEach((weapon) => {
          acc.damage += weapons[weapon].damage;
          acc.range += weapons[weapon].range;
        });
        return acc;
      },
      { weapons: 0, damage: 0, range: 0 }
    );
};

console.log(characterWeapons("Ben"));

//  4) Write a function that takes in two character names as arguments and determines who will win based on who has higher total damage along with the remaining durability. // characterFight('Mike', 'Gray') //// 'Gray, -14'


//  5) Write a function that takes two names as arguments. First name is the attacker, the second Name the defender.  Determine whether the defender will survive an attack from the attacker based on the AttackersDmg - defendersHealth. 
// braceYourselfNerd('Timf', 'Kiel')  //// 'Kiel died'


// 6) Write a function that takes in two homies as arguments and returns the winner based on sum dmg and health of all the characters that belong to the home. (firstHomeDmg - secondHomeHealth) vs (secondHomeDmg - firstHomeHealth); home that has greater value is winner.  
// forFrodo('Air', 'Earth') //// 'Earth wins'


// 7) :: EUROPEAN EXTREME :: Write a function that takes in two arguments, a fighter and the fighter's target, and determine the percent chance the fighter has of winning against that target, (by recursively or iteratively matching them against one another for at least 100 fights) and returning a string containing the result: 

// winningChance('Ben', 'Paul') //// 'Ben has an 94% chance of beating Paul.'

//percentage = (wins / totalFights) * 100































//---------------------SOLUTIONS-----------------------------//

// 1)

// characters.reduce((allCharacters, character) => {
//   character.weapons.forEach(weapon => {
//     allCharacters += weapons[weapon].damage
//   })
//   return allCharacters
// }, 0)

// const totalDMG = () => {
// 	let total = 0;
// 	characters.forEach(char => {
// 		char.weapons.forEach(weapon => {
// 			total += weapons[weapon].damage
// 		})
// 	});
// 	return total;
// };


// // 2)

// characters.reduce((allCharacters, character) => {
//     let weaponObj = {};
//     let weaponDmg = 0;
//     let weaponRnge = 0;
//     let weaponDurability = 0
//   character.weapons.forEach(weapon => {
//     weaponDmg += weapons[weapon].damage
//     weaponRnge += weapons[weapon].range 
//     weaponDurability += weapons[weapon].durability
//     weaponObj = {damage: weaponDmg, range: weaponRnge, durability: weaponDurability }
//   })  
//   allCharacters.push({[character.name]: weaponObj})
//   return allCharacters
// }, [])

// const charWeapons = characters.map(char => {
// 	let charObj = { [char.name]: { damage:0, range:0, durability:0 } };
	
// 	char.weapons.forEach(weapon => {
// 		charObj[char.name].damage += weapons[weapon].damage;
// 		charObj[char.name].range += weapons[weapon].range;
// 		charObj[char.name].durability += weapons[weapon].durability;
// 	});

// 	return charObj;
// });

// // // 3)

// const characterStats = char => {
//   let matchingChar = characters.find(character => char === character.name)
//   return characters.reduce((allCharacters, character) => {
//     let weaponRnge = 0;
//     let weaponDmg = 0;

//   matchingChar.weapons.forEach(weapon => {
//     weaponDmg += weapons[weapon].damage
//     weaponRnge += weapons[weapon].range
//   })

//   allCharacters['weapons'] = matchingChar.weapons 
//   allCharacters['damage'] = weaponDmg
//   allCharacters['range'] = weaponRnge

//   return allCharacters
//   }, {})
// }

// const characterStats = (name) => {
// 	const useableWeapons = characters.reduce((weaponObj, char) => {
// 		if (char.name === name) {
// 			weaponObj.weapons = char.weapons;
// 			weaponObj.damage = 0;
// 			weaponObj.range = 0;
// 			char.weapons.forEach(weapon => {
// 				weaponObj.damage += weapons[weapon].damage;
// 				weaponObj.range += weapons[weapon].range;
// 			})
// 		}
// 		return weaponObj;
// 	}, {})

// 	return useableWeapons;
// }



// // //  4)

// const characterFight = (nameOne, nameTwo) => {
//   let firstFiltered = characters.find(character => character.name === nameOne)
//   let secondFiltered = characters.find(character => character.name === nameTwo)
//   let firstWeaponDmg = 0
//   let secondWeaponDmg = 0
  
//   return characters.reduce((winner, character) => {
//     let firstDurability = 0
//     let secondDurability = 0
    
//     firstFiltered.weapons.forEach(weapon => {
//       firstWeaponDmg += weapons[weapon].damage
//       firstDurability += weapons[weapon].durability
//     })

//     secondFiltered.weapons.forEach(weapon => {
//       secondWeaponDmg += weapons[weapon].damage
//       secondDurability += weapons[weapon].durability
//     })

//     if (firstWeaponDmg > secondWeaponDmg) {
//       winner = nameOne + ' , '+ (firstDurability - secondDurability)
//     } else if( firstWeaponDmg < secondWeaponDmg) {
//       winner = nameTwo + ' , ' + (secondDurability - firstDurability)
//     } else {
//       winner = 'draw'
//     }
//     return winner
//   }, '')
// } 

// characterFight('Timf', 'Justin') // 'Timf, 19'
// // // characterFight('Ben', 'Laura') // 'Laura, 6'

// const characterFight = (fighter1, fighter2) => {
// 	let aDMG = 0 
// 			aDUR = 0
// 			bDMG = 0 
// 			bDUR = 0
// 	const a = characters.find(char => char.name === fighter1).weapons.forEach(weapon => {
// 		aDMG += weapons[weapon].damage;
// 		aDUR += weapons[weapon].durability;
// 	});
// 	const b = characters.find(char => char.name === fighter2).weapons.forEach(weapon => {
// 		bDMG += weapons[weapon].damage;
// 		bDUR += weapons[weapon].durability;
// 	});
// 	let aHealth = aDUR - bDMG;
// 	let bHealth = bDUR - aDMG;

// 	if (aHealth > bHealth) {
// 		return `${fighter1}, ${aHealth}`
// 	} else {
// 		return `${fighter2}, ${bHealth}`
// 	}
// }



// // //  5)

// const braceYourselfNerd = (attacker, defender) => {
//   let firstFiltered = characters.find(char => char.name === attacker)
//   let secondFiltered = characters.find(char => char.name === defender)
//   let attackersDmg = 0
  
//   firstFiltered.weapons.forEach(weapon => {
//     attackersDmg += weapons[weapon].damage
//   })

//   if(secondFiltered.health - attackersDmg > 0) {
//     return defender + ' lives'
//   } else if(!secondFiltered.health - attackersDmg) {
//     return defender + ' dies'
//   }
// }

// braceYourselfNerd('Paul', 'Gray') //Tom lives
// braceYourselfNerd('Paul', 'Mike') //Mike dies
// braceYourselfNerd('Laura', 'Nick') //Ben dies
// braceYourselfNerd('Paul', 'Gray') //Gray dies
// braceYourselfNerd('Paul', 'Brandon') //Brandon dies


// //6)

// const forFrodo = (homeOne, homeTwo) => {
//   let filteredHomeOne = characters.filter(character => character.home === homeOne)
//   let filteredHomeTwo = characters.filter(character => character.home === homeTwo)

//   let homeOneHealth = 0 
//   let homeOneDmg = 0
//   let homeTwoHealth = 0
//   let homeTwoDmg = 0

//   filteredHomeOne.forEach(home => { 
//     homeOneHealth += home.health
    
//     home.weapons.forEach(weapon => {
//       homeOneDmg += weapons[weapon].damage
//     })
//   })

//   filteredHomeTwo.forEach(home => { 
//     homeTwoHealth += home.health
    
//     home.weapons.forEach(weapon => {
//       homeTwoDmg += weapons[weapon].damage
//     })
//   })

//   let homeOneStatus = homeOneHealth - homeTwoDmg
//   let homeTwoStatus = homeTwoHealth - homeOneDmg

//   if(homeOneStatus > homeTwoStatus) {
//     return homeOne + ' wins'
//   } else {
//     return homeTwo + ' wins'
//   }
// }

// // forFrodo('Fire', 'Water') //'Fire wins'
// // forFrodo('Fire', 'Earth') //'Earth wins'
// // forFrodo('Fire', 'Air') //'Fire wins'
// // forFrodo('Air', 'Earth') //'Earth wins'
// // forFrodo('Air', 'Water') //'Air wins'
// // forFrodo('Water', 'Earth') //'Earth wins'

//#7


// const winningChance = (fighter, opponent) => {
// 	let wins = 0;
// 	let a = characters.find(char => char.name === fighter)
// 	let b = characters.find(char => char.name === opponent)
// 	let aDMG = 0 
// 			aDUR = 0
// 			bDMG = 0 
// 			bDUR = 0

// 	a.weapons.forEach(weapon => {
// 		aDMG += weapons[weapon].damage;
// 		aDUR += weapons[weapon].durability;
// 	});

// 	b.weapons.forEach(weapon => {
// 		bDMG += weapons[weapon].damage;
// 		bDUR += weapons[weapon].durability;
// 	});

// 	for (let i = 0; i < 1e5; i++) {
// 		let aHealth = a.health() - bDMG;
// 		let bHealth = b.health() - aDMG;

// 		if (aHealth > bHealth) {
// 			wins++;
// 		}
// 	}

// 	let percentage = (wins / 1000).toFixed(0) + '%';
// 	if (percentage === '0%') {
// 		percentage = 'no';
// 	}
// 	return `${fighter} has a ${percentage} chance of beating ${opponent}.`;
// };

	
// winningChance('Paul', 'Kiel')