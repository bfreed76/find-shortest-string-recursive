function findShortestStringRecursive(arr) {
  // iterative solution
  // return arr.reduce((shortest, current) => 
  //   current.length < shortest.length ? current : shortest
  // )

  // recursive solution
  if (arr.length < 2) {
    return arr
  }

  const result = findShortestStringRecursive(arr.slice(1))
  // removes for element for comparison to remaining element(s)

  return arr[0].length <= result.length ? arr[0] : result

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

const startTime = Date.now();

for (let i = 0; i < 1000; ++i) {
  findShortestStringRecursive(['flower', 'juniper', 'lily', 'dadelion']);


const avgTime = (Date.now() - startTime) / 1000;
console.log(avgTime);
}

module.exports = findShortestStringRecursive;

// Define base case and return value.
// Base case: if current element is shorter than shortest element thus far, 
// replace it. Return value = shortest element.
// For timer, set startTime to Date.now(). Then create a for loop
// that runs the function 1000x, then sets Date.now() - startTime/1000
// to avgTime, then clg avgTime. 
