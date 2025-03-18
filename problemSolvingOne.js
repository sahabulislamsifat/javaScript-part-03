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

// Kono year leap year ki na ta ber korbo ki vabe???

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

const findLeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year...`);
  } else {
    console.log(`${year} is not a leap year...`);
  }
};

// findLeapYear(2026);
// findLeapYear(2027);
findLeapYear(2028);
