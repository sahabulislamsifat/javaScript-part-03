// 01. Ludu khelay amra ki vabe 1 - 10 digits rendomly print korte pari?

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const result = getRandomNumber(1, 6);

// console.log(result);

// 02. Ki vabe amra amader class er sob student er name Alphabetically Re-arrange korte pari ?

// const student = [
//   "Sifat",
//   "Hasin",
//   "Sumit",
//   "Mahbub",
//   "Mukit",
//   "Ranju",
//   "Milon",
//   "Samsul",
//   "Amin",
// ];

// console.log(student.sort());

// class er student der roll ki vabe choto theke boro ba boro theke choto sajate pari ?
// const studentRollNo = [31, 25, 4, 23, 1, 54, 22, 7];

// const roll = studentRollNo.sort(function (a, b) {
//   //   return a - b;
//   return b - a;
// });

// console.log(roll);

// 03. Kono year leap year ki na ta ber korbo ki vabe???

// function isLeapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year...`);
//   } else {
//     console.log(`${year} is not a leap year....`);
//   }
// }

// isLeapYear(2026);
// isLeapYear(2027);
// isLeapYear(2028);
// isLeapYear(2029);
// isLeapYear(2030);

// const findLeapYear = (year) => {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year...`);
//   } else {
//     console.log(`${year} is not a leap year...`);
//   }
// };

// findLeapYear(2026);
// findLeapYear(2027);
// findLeapYear(2028);

// 04. kono sentence koto guli Vowel ache ta nirnoy kora jay ki vabe??

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// const countVowels = (sentence) => {
//   let count = 0;
//   const letters = Array.from(sentence);

//   letters.forEach(function (value) {
//     if (vowels.includes(value)) {
//       count++;
//     }
//   });

//   return count;
// };

// console.log(countVowels("I love Bangladesh...My hometown Rangpur."));

// 05. kono array theke duplicate number guli ki vabe ber korboo???

const numbers = [1, 6, 4, 6, 8, 4, 5, 6, 8, 10, 3, 7, 3];

// const duplicates = numbers.filter(function (value, index, array) {
//   return array.indexOf(value) !== index;
// });

// console.log(duplicates);

// find unique numbers in the array
const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(duplicates);
