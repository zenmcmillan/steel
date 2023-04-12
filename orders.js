const orders = [
  {
    type: 'cake',
    name: 'Strawberries & Cream Cake',
    price: 40,
    size: 6,
    customer: 'Olivia',
    specialConsiderations: 'gluten free*pick up on Thursday afternoon*birthday cake'
  },
  {
    type: 'tart',
    name: 'Chocolate Raspberry Tart',
    price: 25,
    size: 8,
    customer: 'Cody',
    specialConsiderations: 'pick up on Friday*no allergies'
  },
  {
    type: 'cake',
    name: 'Chocolate Cake',
    price: 40,
    size: 6,
    customer: 'Ramiro',
    specialConsiderations: 'olive oil allergy*add cream cheese icing*simple decoration'
  },
  {
    type: 'cake',
    name: 'Funfetti Cake',
    price: 0,
    size: 6,
    customer: 'Leta',
    specialConsiderations: 'none'
  }
];

//////////////////////////////////////

// Level One
// Write a function that will total up the profit of all orders.

// 105

// function sumProfit() {
// 	const result = orders.reduce((acc, item) => {
// 		return acc + item.price;
// 	}, 0)
// 	return result;
// }

// sumProfit()





//////////////////////////////////////

// Level Two
// Refactor your function to organize your orders by type (ex: 'cake' and 'tart') - keeping track of the names and total profit for that type.

// {
//   cake: {
//     names: [ 'Strawberries & Cream Cake', 'Chocolate Cake', 'Funfetti Cake' ],
//     totalProfit: 80
//   },
//   tart: { 
//     names: [ 'Chocolate Raspberry Tart' ],
//     totalProfit: 25 
//   }
// }

// input = array of objects

// outpot = object of objects

// { orders.type: {
// 	names: [array of orders.name of all orders of that type],
		// do Object.keys here

// 	totalProfit: orders.price (acc + orders.price)
			// do reduce here

// }

// totalprofit




// function sumProfitByType() {
// 	const result = orders.reduce((acc, item) => {

// 		if (!acc[item.type]) {
// 			acc[item.type] = {
// 				name: [item.name],
// 				totalProfit: item.price
// 			}
// 		} 
		
// 		else {
// 			{ 
// 				name: acc[item.type].name.push(item.name)
// 				totalProfit: acc[item.type].totalProfit += item.price
// 			}
//     }
// 		return acc;
// 	}, {})
// 	return result;
// }

// sumProfitByType()

// notes about above function:
	// acc.cake.name
	// acc.cake.totalProfit

	// Here:
	// acc.cake = acc[item.type]

	// Therefore, by substitution:
	// acc[item.type].name

// draft that is longer

// function sumProfitByType() {
// 	const result = orders.reduce((acc, item) => {

// 		if (!acc[item.type]) {
// 			acc[item.type] = {
// 				name: [item.name],
// 				totalProfit: item.price
// 			}
// 		} 
		
// 		else {
//       acc: { 
//         { 
//           name: acc[item.type].name.push(item.name)
//           totalProfit: acc[item.type].totalProfit += item.price
//         }
//       }

//       // acc[item.type].name.push(item.name);
//       // acc[item.type].totalProfit += item.price;
//     }
// 		return acc;
// 	}, {})
// 	return result;
// }







//////////////////////////////////////

// Level Three
// Refactor your function to add in the special considerations for each type (make sure to exclude 'none').

// {
//   cake: {
//     names: [ 'Strawberries & Cream Cake', 'Chocolate Cake', 'Funfetti Cake' ],
//     totalProfit: 80,
//     specialConsiderations: [
//       'gluten free',
//       'pick up on Thursday afternoon',
//       'birthday cake',
//       'olive oil allergy',
//       'add cream cheese icing',
//       'simple decoration',
//     ]
//   },
//   tart: {
//     names: [ 'Chocolate Raspberry Tart' ],
//     totalProfit: 25,
//     specialConsiderations: [ 
//       'pick up on Friday', 
//       'no allergies' 
//     ]
//   }
// }