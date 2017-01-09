const binarySearch = require('../lib/util').binarySearch;

let anArray = [];

let N = 1000000;
for (let i = 0;i < N;i++) {
  let val = i;
  if (i % 2) {
    val = i - 1;
  }
  anArray.push({ id: '-k'+i, val: val})
}

for (let i = N; i < 2*N;i++) {
  let val = i - N;
  const options0 = {
    aArray  : anArray,
    val     : val
  }

  let index = binarySearch(options0);
  // let oItem = { id: '-k'+i, val: i - N }
  // anArray.splice(index,0, oItem)
  console.log(`index ${index} of val ${val}`);  
}
