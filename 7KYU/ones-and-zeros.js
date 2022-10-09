// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//Solution

//Using arr.join and parseInt( , 2)

const binaryArrayToNumber = arr => {
    const binaryString = arr.join('');
    return parseInt(binaryString , 2);
    
    };


//By Reducing the array
// const arr = [1, 0, 1, 1];
// const parseArray = arr => {
//    return arr.reduce((acc, val) => {
//       return (acc << 1) | val;
//    });
// };
// console.log(parseArray(arr));