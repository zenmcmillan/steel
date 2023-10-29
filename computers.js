const computers = [
  {
    cost: 2000,
    components: {
      gpu: 'Nvidia Geoforce GTX 1080ti',
      ram: '32GB',
      cpu: 'Intel Core i7'
    },
    isNew: false,
    isLaptop: false,
    accessories: ['mouse', 'keyboard', 'headset', 'rgb', 'darthVader']
  },
  {
    cost: 1200,
    components: {
      gpu: 'Radeon Pro Vega 20',
      ram: '32GB',
      cpu: 'Intel Core i9'
    },
    isNew: true,
    isLaptop: true,
    accessories: ['mouse', 'keyboard', 'liquidCooling', 'headset']
  },
  {
    cost: 2800,
    components: {
      gpu: 'NVIDIA Geforce RTX 2080',
      ram: '16GB',
      cpu: 'Intel Core i9'
    },
    isNew: true,
    isLaptop: false,
    accessories: ['mouse', 'keyboard', 'rgb']
  },
  {
    cost: 800,
    components: {
      gpu: 'Radeon Vega 10',
      ram: '8GB',
      cpu: 'Intel Core i5'
    },
    isNew: true,
    isLaptop: false,
    accessories: ['mouse', 'keyboard', 'rgb', 'microphone']
  }
]

// DIFFICULTY LEVEL: BEGINNER

// Below, return the total cost of all the computers (Correct answer will return an integer: 6800)

const computerCost = computers.reduce((acc, curr) => acc + curr.cost, 0);

console.log(computerCost);

// __________________________________________________________________________________________________________________________________

// let totalCost = 0
// computers.forEach(item => {
//   totalCost += item.cost;
// });
// 
// console.log(totalCost);
// __________________________________________________________________________________________________________________________________

//Below retun an array that sorts the computers by cost low -> high (Correct answer will be an array of computer objects like below):

const sortComputersByCost = computers.sort((a, b) => a.cost - b.cost);

console.log(sortComputersByCost);


// [
//   {
//     cost: 800,
//     components: {
//       gpu: 'Radeon Vega 10',
//       ram: '8GB',
//       cpu: 'Intel Core i5'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'RGB']
//   },
//   {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard']
//   },
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   },
//   {
//     cost: 2800,
//     components: {
//       gpu: 'NVIDIA Geforce RTX 2080',
//       ram: '16GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'RGB']
//   }
// ]
// __________________________________________________________________________________________________________________________________

//---------ES5------------

const computersByPrice = computers.sort(function(a, b) {
  if (a.cost > b.cost) {
    return 1;
  } else {
    return -1;
  }
});

console.log(computersByPrice);

//----------ES6------------  

// const computerCost = computers.sort((a, b) => (a.cost > b.cost ? 1 : -1));

// console.log(computerCost);
// __________________________________________________________________________________________________________________________________



// Below return an array of objects that have a value of isNew as false: Answer: 
// [
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   }
// ]
// __________________________________________________________________________________________________________________________________

const notNew = computers.filter((computer) => !computer.isNew);

console.log(notNew);


// const oldComputers = computers.filter(function(computer) {
//   if (!computer.isNew) {
//     return true;
//   };
// })


// ES6

// const oldComputers = computers.filter(computer => !computer.isNew);

// console.log(oldComputers);


// __________________________________________________________________________________________________________________________________


// Below return the one object that is a laptop: Answer:
// {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard', 'liquidCooling', 'headset'] 
// }
// __________________________________________________________________________________________________________________________________



// const laptop = 



// __________________________________________________________________________________________________________________________________

// Below, return an array of objects that are components for each computer: Answer:

// [
//   {
//     gpu: 'Nvidia Geoforce GTX 1080ti',
//     ram: '32GB',
//     cpu: 'Intel Core i7'
//   },
//   {
//     gpu: 'Radeon Pro Vega 20',
//     ram: '32GB',
//     cpu: 'Intel Core i9'
//   },
//   {
//     gpu: 'NVIDIA Geforce RTX 2080',
//     ram: '16GB',
//     cpu: 'Intel Core i9'
//   },
//   {
//     gpu: 'Radeon Vega 10',
//     ram: '8GB',
//     cpu: 'Intel Core i5'
//   },
// ]



// __________________________________________________________________________________________________________________________________


const isALaptop = computers.find((computer) => computer.isLaptop);

console.log(isALaptop);




// __________________________________________________________________________________________________________________________________





// Below, return the count of computers that are new: Answer: 3


// __________________________________________________________________________________________________________________________________

const newComputers = computers.filter((computer) => computer.isNew).length;

console.log(newComputers);

// __________________________________________________________________________________________________________________________________









// DIFFICULTY LEVEL: INTERMEDIATE

// Below return an array of computers that have 32GB of ram and then sort by price low -> high: Answer will be:
// [
//   {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard']
//   },
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   }
// ]

// __________________________________________________________________________________________________________________________________

const thirtyTwoGBRam = computers
  .filter((computer) => computer.components.ram === "32GB")
  .sort((a, b) => a.cost - b.cost);

console.log(thirtyTwoGBRam);

// __________________________________________________________________________________________________________________________________


// Below return an array of computers that use NVIDIA gpu's: Answer:
// [
//  {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'rgb', 'darthVader']
//   },
//   {
//     cost: 2800,
//     components: {
//       gpu: 'NVIDIA Geforce RTX 2080',
//       ram: '16GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'rgb']
//   },
// ]  



// __________________________________________________________________________________________________________________________________

const nvidiaTech = computers.filter(
  (computer) =>
    computer.components.gpu.includes("Nvidia") ||
    computer.components.gpu.includes("NVIDIA")
);

console.log(nvidiaTech);


// __________________________________________________________________________________________________________________________________








// DIFFICULTY LEVEL: Hard

//Below return an array of all possible accessories from all computers and then sort alphabetically: Answer will be :

//[ 'darthVader', 'headset', 'keyboard', 'liquidCooling', 'microphone', 'mouse', 'rgb' ]


// __________________________________________________________________________________________________________________________________
const allAccessories = () => {
  let arr = [];
  computers.forEach((obj) => {
    obj.accessories.forEach((gadget) => {
      !arr.includes(gadget) ? arr.push(gadget) : "";
    });
  });
  return arr.sort();
};

console.log(allAccessories());


// __________________________________________________________________________________________________________________________________










// DIFFICULTY LEVEL: Ultra Hard

//Below return an object of all possible accessories from all computers as keys and the number of times they are shown in the computers array as the keys value Answer will be : 

// {
//   darthVader: 1,
//   headset: 2,
//   keyboard: 4,
//   liquidCooling: 1,
//   microphone: 1 ,
//   mouse: 4,
//   rgb: 3,
// }  


// __________________________________________________________________________________________________________________________________

const accessoryCount = () => {
  let answer = computers.reduce((acc, curr) => {
    curr.accessories.forEach((item) => {
      acc[item] = acc[item] || 0;
      Object.keys(acc).forEach((key) => {
        item === key ? acc[item]++ : 0;
      });
    });
    return acc;
  }, {});
  return Object.keys(answer)
    .sort()
    .reduce((acc, curr) => {
      acc[curr] = answer[curr];
      return acc;
    }, {});
};

console.log(accessoryCount());


// __________________________________________________________________________________________________________________________________


// Create an object of components that exist from all of the computers. The objecet will have keys of gpu, ram, cpu and their values will be an array of said components that are sorted in reverse alphabetical order: Answer:


// {
//   gpu: ['Radeon Vega 10', 'Radeon Pro Vega 20', 'Nvidia Geoforce GTX 1080ti', 'NVIDIA Geforce RTX 2080'],
//   ram: ['32GB', '16GB', '8GB'],
//   cpu: ['Intel Core i9', 'Intel Core i7, 'Intel Core i5']
// },



// __________________________________________________________________________________________________________________________________

const organizeComponents = () => {
  return computers.reduce((acc, curr) => {
    Object.keys(curr.components).forEach((comp) => {
      acc[comp] = acc[comp] || [];
      !acc[comp].includes(curr.components[comp])
        ? acc[comp].push(curr.components[comp])
        : "";
    });
    acc["gpu"].sort((a, b) => (a > b ? -1 : b > a ? 1 : 0));
    acc["cpu"].sort((a, b) => (a > b ? -1 : b > a ? 1 : 0));
    return acc;
  }, {});
};

console.log(organizeComponents());

// __________________________________________________________________________________________________________________________________






// WHEN YOU COMPLETE THIS PING ME ON SLACK @DAN REARDON

// I Will provide a double dataset repl for a larger challenge.