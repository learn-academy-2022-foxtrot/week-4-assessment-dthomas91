// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorsArr", () => {
  it("removes the first item from the array and shuffles the remaining content", () => {
    expect(colorsArr(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(colorsArr(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// ReferenceError: colorsArr is not defined

// b) Create the function that makes the test pass.
const colorsArr = colors1.slice(1, 5)

colorsArr.sort((a, b) => 0.5 - Math.random())
return colorsArr
// console.log(colorsArr)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.


// describe("netVotes", () => {
//   it("returns the net total of votes", () => {
//     expect(netVotes(votes1)).toEqual(11)
//     expect(netVotes(votes2)).toEqual(-31)
//   })
// })

// const votes1 = {upVotes: 13, downVotes: 2}
// // Expected output: 11
// const votes2 = {upVotes: 2, downVotes: 33}
// // Expected output: -31

// // ReferenceError: netVotes is not defined

// // b) Create the function that makes the test pass.

// const netVotes = () => {
//   return votes1.split
// }



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.
