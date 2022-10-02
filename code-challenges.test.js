// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { array } = require("yargs")

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

// describe("colorsArr2", () => {
//     it("removes the first item from the array and shuffles the remaining content", () => {expect(colorsArr2(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//     })
//   })


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// ReferenceError: colorsArr is not defined

// b) Create the function that makes the test pass.

/* Psuedo code.... Wow, where do I start? I had a heck of a time fighting with this to get it to work. First I started with the .slice method, but that wouldn't work because both arrays had a different number of elements. Then I used .shift which was the right direction, but I couldn't figure out how to run both expects in the same test, so I had to create two different tests to get it to pass.

1. create a new function
2. pass the array into the function
3. use .shift() to remove the first element
4. use .sort along with math.random to randomly select the order of the elements
5. return array
*/

/* ok so after much time and frustration and coaching from joseph I got it to pass the both colors1 and colors2 in the same test and with one code. I don't think I can accurately describe how dificult these javascript challenges have been for me.
*/

const colorsArr = (array) => {
    array.shift()
    array.sort((a, b) => 0.5 - Math.random())
    return array
}

// const colorsArr = () => {
//     colors2.shift()
//     colors2.sort((a, b) => 0.5 - Math.random())
//     return colors2
// }

//  PASS  ./code-challenges.test.js


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.


describe("sumVotes", () => {
  it("returns the net total of votes", () => {
    expect(sumVotes(votes1)).toEqual(11)
    expect(sumVotes(votes2)).toEqual(-31)
  })
})


// ReferenceError: sumVotes is not defined

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

// b) Create the function that makes the test pass.

/* Psuedocode 
    1. Create a new function called sumVotes
    2. Pass an object into the parameters of the function as a placeholder
    3. Return the value of total votes by returning object.keyname minus object.otherkeyname
*/

const sumVotes = (object) => {
  return object.upVotes - object.downVotes
}

// PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDupilicatesArr", () => {
  it("returns one array with no duplicate values", () => {
    expect(noDupilicatesArr(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])})
})

// ReferenceError: noDupilicatesArr is not defined

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

/* Psuedo code
    1. create a new function
    2. Pass in 2 arrays into that function
    3. Use the string opperator (...) to copy our existing arrays into a new array
    4. Return the new Set data object because Set does not allow duplicates in the array. Also use the sting opperator on new Set to bring it into the noDuplicatesArr

    ** info for this challenge was found here https://www.samanthaming.com/tidbits/43-3-ways-to-remove-array-duplicates/ 
*/
const noDupilicatesArr = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

// PASS  ./code-challenges.test.js